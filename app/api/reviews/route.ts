import { NextRequest, NextResponse } from 'next/server'
import { writeClient } from '@/sanity/lib/client'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const name = formData.get('name') as string
    const role = formData.get('role') as string
    const company = formData.get('company') as string
    const testimonial = formData.get('testimonial') as string
    const rating = parseInt(formData.get('rating') as string) || 5
    const serviceCategory = formData.get('serviceCategory') as string
    const imageFile = formData.get('image') as File | null

    // Validate required fields
    if (!name || !testimonial) {
      return NextResponse.json(
        { error: 'Name and testimonial are required' },
        { status: 400 }
      )
    }

    // Validate rating
    if (rating && (rating < 1 || rating > 5)) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      )
    }

    // Upload image if provided
    let imageAsset = null
    if (imageFile && imageFile.size > 0) {
      const buffer = Buffer.from(await imageFile.arrayBuffer())
      imageAsset = await writeClient.assets.upload('image', buffer, {
        filename: imageFile.name,
        contentType: imageFile.type,
      })
    }

    // Create testimonial document in Sanity
    const result = await writeClient.create({
      _type: 'testimonial',
      name,
      role: role || '',
      company: company || '',
      testimonial,
      rating: rating || 5,
      serviceCategory: serviceCategory || '',
      ...(imageAsset && {
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageAsset._id,
          },
        },
      }),
    })

    return NextResponse.json(
      { message: 'Review submitted successfully', id: result._id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating testimonial:', error)
    return NextResponse.json(
      { error: 'Failed to submit review' },
      { status: 500 }
    )
  }
}
