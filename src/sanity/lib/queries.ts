import { groq } from 'next-sanity'

export const getActivePromosQuery = groq`
  *[_type == "promo" && isActive == true] | order(order asc) {
    _id,
    title,
    badge,
    desc,
    image,
    isActive,
    order
  }
`
