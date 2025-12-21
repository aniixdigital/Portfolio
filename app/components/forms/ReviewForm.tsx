'use client'

import { useState, useRef, useEffect } from 'react'
import { FaCamera, FaTimes } from 'react-icons/fa'

export default function ReviewForm() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    testimonial: '',
    rating: 5,
    serviceCategory: '',
  })
  const [profileImage, setProfileImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  // Auto-remove message after 5 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [message])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'rating' ? Number(value) : value,
    }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setMessage({ type: 'error', text: 'Please select an image file' })
        return
      }
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setMessage({ type: 'error', text: 'Image must be less than 5MB' })
        return
      }
      setProfileImage(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const removeImage = () => {
    setProfileImage(null)
    setImagePreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    try {
      const submitData = new FormData()
      submitData.append('name', formData.name)
      submitData.append('role', formData.role)
      submitData.append('company', formData.company)
      submitData.append('testimonial', formData.testimonial)
      submitData.append('rating', formData.rating.toString())
      submitData.append('serviceCategory', formData.serviceCategory)
      
      if (profileImage) {
        submitData.append('image', profileImage)
      }

      const response = await fetch('/api/reviews', {
        method: 'POST',
        body: submitData,
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({ type: 'success', text: 'Thank you! Your review has been submitted.' })
        setFormData({
          name: '',
          role: '',
          company: '',
          testimonial: '',
          rating: 5,
          serviceCategory: '',
        })
        removeImage()
      } else {
        setMessage({ type: 'error', text: data.error || 'Something went wrong' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to submit review. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[#2b2b2b79] rounded-2xl p-8 max-w-2xl mx-auto relative">
      <h2 className="text-2xl font-bold text-[#FFECB6] mb-6">Leave a Review</h2>

      {message && (
        <div
          className={`p-4 rounded-lg mb-6 fixed z-50 top-6 left-6 ${
            message.type === 'success' ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Profile Photo Upload */}
        <div className="flex flex-col items-center mb-6">
          <label className="block text-gray-300 mb-3 text-center">
            Profile Photo <span className="text-gray-500">(Optional)</span>
          </label>
          <div className="relative">
            {imagePreview ? (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Profile preview"
                  className="w-24 h-24 rounded-full object-cover border-2 border-[#FD853A]"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                >
                  <FaTimes size={12} />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-24 h-24 rounded-full bg-[#2a2a2a] border-2 border-dashed border-gray-600 hover:border-[#FD853A] transition-colors flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-[#FD853A]"
              >
                <FaCamera size={20} />
                <span className="text-xs">Add Photo</span>
              </button>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>

        <div>
          <label htmlFor="name" className="block text-gray-300 mb-2">
            Name <span className="text-[#FD853A]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-[#2a2a2a] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FD853A]"
            placeholder="Your name"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="role" className="block text-gray-300 mb-2">
              Role / Position
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full bg-[#2a2a2a] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FD853A]"
              placeholder="e.g. CEO, Manager"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-gray-300 mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-[#2a2a2a] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FD853A]"
              placeholder="Your company"
            />
          </div>
        </div>

        <div>
          <label htmlFor="serviceCategory" className="block text-gray-300 mb-2">
            Service Used
          </label>
          <select
            id="serviceCategory"
            name="serviceCategory"
            value={formData.serviceCategory}
            onChange={handleChange}
            className="w-full bg-[#2a2a2a] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FD853A]"
          >
            <option value="">Select a service</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="advertisement">Advertisement</option>
            <option value="graphic-design">Graphic Design</option>
            <option value="web-development">Web Development</option>
          </select>
        </div>

        <div>
          <label htmlFor="rating" className="block text-gray-300 mb-2">
            Rating
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}
                className={`text-3xl transition-colors ${
                  star <= formData.rating ? 'text-[#FD853A]' : 'text-gray-600'
                } hover:text-[#FD853A]`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="testimonial" className="block text-gray-300 mb-2">
            Your Review <span className="text-[#FD853A]">*</span>
          </label>
          <textarea
            id="testimonial"
            name="testimonial"
            value={formData.testimonial}
            onChange={handleChange}
            required
            rows={5}
            className="w-full bg-[#2a2a2a] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FD853A] resize-none"
            placeholder="Share your experience..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#FD853A] text-black font-semibold py-3 rounded-lg hover:bg-[#ca6619] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div>
  )
}
