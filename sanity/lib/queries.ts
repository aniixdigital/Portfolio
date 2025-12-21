import { groq } from 'next-sanity'

// Get all projects
export const projectsQuery = groq`
  {
    "all": *[_type == "project"] | order(completedAt desc) {
      _id,
      title,
      slug,
      category,
      description,
      image,
      projectUrl,
      technologies,
      completedAt,
      showcase
    },
    "totalCount": count(*[_type == "project"]),
    "showcaseCount": count(*[_type == "project" && showcase == true])
  }
`

// Get projects by category
export const projectsByCategoryQuery = groq`
  {
    "all": *[_type == "project" && category == $category] | order(completedAt desc) {
      _id,
      title,
      slug,
      category,
      description,
      image,
      projectUrl,
      technologies,
      completedAt,
      showcase
    },
    "totalCount": count(*[_type == "project" && category == $category]),
    "showcaseCount": count(*[_type == "project" && category == $category && showcase == true])
  }
`

// Get all testimonials
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    role,
    company,
    image,
    testimonial,
    rating,
    serviceCategory
  }
`

// Get testimonials by service category
export const testimonialsByCategoryQuery = groq`
  *[_type == "testimonial" && serviceCategory == $category] | order(_createdAt desc) {
    _id,
    name,
    role,
    company,
    image,
    testimonial,
    rating,
    serviceCategory
  }
`

// Get top projects - if more than 6 total projects, show only showcase=true, else show top 6
export const topProjectsQuery = groq`
  {
    "all": *[_type == "project"] | order(completedAt desc) {
      _id,
      title,
      slug,
      category,
      description,
      image,
      projectUrl,
      technologies,
      completedAt,
      showcase
    },
    "totalCount": count(*[_type == "project"]),
    "showcaseCount": count(*[_type == "project" && showcase == true])
  }
`

// Get top 5 best rated testimonials
export const topTestimonialsQuery = groq`
  *[_type == "testimonial"] | order(rating desc, _createdAt desc)[0...5] {
    _id,
    name,
    role,
    company,
    image,
    testimonial,
    rating,
    serviceCategory
  }
`

// Get average rating of all testimonials
export const averageRatingQuery = groq`
  {
    "averageRating": math::avg(*[_type == "testimonial" && defined(rating)].rating),
    "totalReviews": count(*[_type == "testimonial"])
  }
`

// Get contact page content
export const contactQuery = groq`
  *[_type == "contact"][0] {
    _id,
    title,
    subtitle,
    email,
    phone,
    whatsapp,
    socialLinks,
    ctaTitle,
    ctaDescription
  }
`