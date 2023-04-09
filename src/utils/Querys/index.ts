import { groq } from "next-sanity";

export const queryPageInfo = groq`
*[_type=='pageInfo'][0]`


export const queryExperiences = groq`
*[_type=='experience']{
  ...,
  technologies[]->{
    ...
  },
}
`

export const queryProjects = groq`
*[_type=='project']{
    ...,
    technologies[]->,
}`

export const querySkills = groq`
*[_type=='skill']`

export const querySocials = groq`
*[_type=='social']`

