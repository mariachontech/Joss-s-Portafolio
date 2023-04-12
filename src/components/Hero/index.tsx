"use client"
import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter"
import BackGrounCircles from '../BackGroundCircles'
import { PageInfo } from '../../../typings'
import urlFor from '../../../lib/urlFor'
import Image from 'next/image'


type Props = {
	pageInfo?: PageInfo
}

const Hero = ({ pageInfo }: Props) => {
	const [text, count] = useTypewriter({
		words: [
			`Hi, The Name's ${pageInfo?.name}`,
			`${pageInfo?.messageAnimated1}`,
			`${pageInfo?.messageAnimated2}`,
		],
		loop: true,
		delaySpeed: 2000,
	})
	return (
		<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<BackGrounCircles />
			<div className="relative rounded-full h-32 w-32 m-auto">
			<Image
				className=" rounded-full mx-auto object-cover"
				src={urlFor(pageInfo?.heroImage).url()}
				alt={pageInfo?.name || ""}
				fill
			/>

			</div>
			<div className="z-20">
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
					{pageInfo?.role}
				</h2>
				<h1 className="text-5xl lg:text-6xl font-semibold px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#E66400" />
				</h1>
				<div className="pt-5">
					<a href="#about">
						<button className="heroButton">About</button>
					</a>
					<a href="#experience">
						<button className="heroButton">Experience</button>
					</a>
					<a href="#skills">
						<button className="heroButton">Skills</button>
					</a>
					<a href="#projects">
						<button className="heroButton">Projects</button>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Hero