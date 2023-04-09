import React from "react"
import Header from "../Header"
import Hero from "../Hero"
import About from "../About"
import WorkExperience from "../WorkExperience"
import Skills from "../Skills"
import Projects from "../Projects"
import ContactMe from "../ContactMe"
import Link from "next/link"
import { Experience, PageInfo, Project, Skill } from "../../../typings"

type Props = {
	pageInfo?: PageInfo
	experiences?: Experience[]
	skills?: Skill[]
	projects?: Project[]
}

function PortafolioPage({ pageInfo, experiences, skills, projects }: Props) {
	
	return (
		<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 z-0">
			<Header pageInfo={pageInfo} />
			
		{/*	<section id="hero" className="snap-start">
				<Hero pageInfo={pageInfo} />
			</section>
			 <section id="about" className="snap-center">
				<About pageInfo={pageInfo} />
			</section>
			<section id="experience" className="snap-center">
				<WorkExperience experiences={experiences} />
			</section>
			<section id="skills" className="snap-center">
				<Skills skills={skills} />
			</section>
			<section id="projects" className="snap-start">
				<Projects projectsData={projects} />
			</section>
			<section id="contact" className="snap-start">
				<ContactMe />
			</section>

			<Link href="#hero">
				<footer className="sticky botton-5 w-full cursor-pointer">
					<div className="flex items-center justify-center">
						<img
							className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
							src="https://www.mariachon.com.mx/_next/image?url=%2Fimages%2Fmariachon.png&w=1920&q=75"
							alt=""
						/>
					</div>
				</footer>
			</Link> */}
		</div>
	)
}

export default PortafolioPage
