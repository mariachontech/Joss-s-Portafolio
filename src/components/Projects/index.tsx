"use client"
import React from "react"
import { motion } from "framer-motion"
import { Project } from "../../../typings"
import urlFor from "../../../lib/urlFor"

type Props = {
	projectsData?: Project[]
}

function Projects({ projectsData }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Projects
			</h3>
			<div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 z-20 ">
				{projectsData?.map((project, i) => (
					<div
						key={project._id}
						className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-30 md:p-44 max-h-screen"
					>
						<motion.img
							initial={{
								y: -300,
								opacity: 0,
							}}
							transition={{
								duration: 1.2,
							}}
							whileInView={{
								opacity: 1,
								y: 0,
							}}
							viewport={{ once: true }}
							src={urlFor(project.image).url()}
							alt=""
							className="w-1/2"
						/>
						<div className="space-y-10 px-0 md:px-10 max-w-6xl">
							<h4 className="text-4xl font-semibold text-center">
								<span
									className="underline decoration-[#F7AB0A]/50
                                "
								>
									{project.title}
								</span>
							</h4>
							<div className="flex items-center space-x-2 justify-center">
								{project?.technologies.map((tech) => (
									<img
									key={tech._id}
										className="h-10 w-10 rounded-full"
										src={urlFor(tech.image).url()}
										alt={tech.titles}
									/>
								))}
							</div>
							<p className="text-lg texxt-center md:text-left">
								{project.summary}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 eft-0 h-[500px] -skew-y-12" />
		</motion.div>
	)
}

export default Projects
