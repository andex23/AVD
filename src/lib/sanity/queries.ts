import { groq } from "next-sanity";

export const projectFields = groq`
  title,
  "slug": slug.current,
  client,
  industry,
  services,
  coverImage,
  gallery,
  brief,
  approach,
  build,
  outcome,
  palette,
  liveUrl,
  publishedAt,
  timeline,
  tags,
  featured
`;

export const projectsQuery = groq`
  *[_type == "project"] | order(publishedAt desc) {
    ${projectFields}
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    ${projectFields}
  }
`;
