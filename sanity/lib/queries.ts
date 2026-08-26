import { defineQuery } from "next-sanity";

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0]{
    headline,
    tagline,
    aboutText,
    email,
    location,
    githubUrl,
    linkedinUrl,
    "cvUrl": cvFile.asset->url,
    seoDescription
  }
`);

export const projectsQuery = defineQuery(`
  *[_type == "project"] | order(order asc, _createdAt asc){
    "slug": slug.current,
    name,
    status,
    summary,
    problem,
    solution,
    architecture,
    techStack,
    keyFeatures,
    whatILearned,
    githubUrl,
    demoUrl,
    "screenshotUrl": screenshot.asset->url
  }
`);

export const projectBySlugQuery = defineQuery(`
  *[_type == "project" && slug.current == $slug][0]{
    "slug": slug.current,
    name,
    status,
    summary,
    problem,
    solution,
    architecture,
    techStack,
    keyFeatures,
    whatILearned,
    githubUrl,
    demoUrl,
    "screenshotUrl": screenshot.asset->url
  }
`);

export const skillGroupsQuery = defineQuery(`
  *[_type == "skillGroup"] | order(order asc){
    title,
    description,
    skills,
    isCurrentlyLearning
  }
`);

export const postsQuery = defineQuery(`
  *[_type == "post"] | order(publishedAt desc){
    "slug": slug.current,
    title,
    description,
    publishedAt
  }
`);

export const postBySlugQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug][0]{
    "slug": slug.current,
    title,
    description,
    publishedAt,
    body
  }
`);

export const experienceQuery = defineQuery(`
  *[_type == "experience"] | order(order asc){
    role,
    org,
    location,
    bullets
  }
`);

export const educationQuery = defineQuery(`
  *[_type == "education"] | order(order asc){
    degree,
    org,
    year
  }
`);
