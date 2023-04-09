import React from "react"
import { motion } from "framer-motion"
import { Experience } from "../../../typings"
import urlFor from "../../../lib/urlFor"

type Props = {
	experience: Experience
}

function ExperienceCard({ experience }: Props) {
	//console.log("card!!!!!!!!", experience?.dateStarted, experience)

	return (
		<article className="flex flex-col rounded-lg items-center space-y-7  flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
		
			<motion.img
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="w-24 h-24 rounded-full xl:w-[90px] xl:h-[90px] object-cover object-center"
				src={urlFor(experience?.companyImage).url() || ""}
				alt=""
			/>
			<div className="px-0 md:px-10">
				<h4 className="text-4xl md:text-xl font-light uppercase">{experience?.jobTitle}</h4>
				<p className="font-bold text-2xl md:text-sm mt-1">{experience?.company}</p>
				<div className="flex space-x-2 my-2">
					 {experience?.technologies.map((tech) => (
						<img
							key={tech._id}
							className="m-10 h-10 rounded-full"
							src={urlFor(tech?.image).url()}
							alt=""
						/>
					))}  
				</div>
				 <p className="uppercase py-5 text-gray-300 text-sm">
					 Started -{" "}
					{experience?.dateStarted || ""}
					- ended -{" "}
					{experience?.dateEnded || "..."} 
				</p> 

				<ul className="list-disc space-y-4 mt-5 text-sm max-h-96 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]/80">
					{experience?.points.map((point, index) => (
						<li key={index}>{point}</li>
					))}
				</ul>
			</div>
		</article>
	)
}

export default ExperienceCard
