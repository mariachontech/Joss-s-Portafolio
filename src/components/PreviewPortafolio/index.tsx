"use client"

import React from 'react'
import { usePreview } from '../../../lib/sanity.preview'
import PortafolioPage from '../PortafolioPage'

type Props = {
	queryPageInfo?: string
  queryExperiences?: string
  querySkills?:string
  querySocial?: string
  queryProject?: string

}

function PreviewPortafolio({queryPageInfo, queryExperiences, queryProject, querySkills, querySocial}: Props) {
    const pageInfo = usePreview(null, queryPageInfo || "")
    const projects = usePreview(null, queryProject || "")
    const experiences = usePreview(null, queryExperiences || "")
    const skills = usePreview(null, querySkills || "")
    const socials =  usePreview(null, querySocial || "")
 

  
    
  return <PortafolioPage pageInfo={pageInfo} experiences={experiences} skills={skills} projects={projects}/>
}

export default PreviewPortafolio