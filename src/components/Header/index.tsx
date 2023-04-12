"use client"
import React from "react"
import { SocialIcon } from "react-social-icons"
import { EnvelopeIcon } from "@heroicons/react/24/solid"

import { motion } from "framer-motion"
import Link from "next/link"
import { PageInfo } from "../../../typings"

type Props = {
	pageInfo?: PageInfo
}

const Header = ({ pageInfo }: Props) => {

	return (
		<header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className="flex flex-row items-center cursor-pointer"
			>
				{pageInfo?.socials.map((social) => (
					<SocialIcon
						key={social._id}
						url={social?.url}
						fgColor="gray"
						bgColor="transparent"
					/>
				))}
				<div>
					
				</div>
			</motion.div>
			<a href="/#contact">
				<motion.div
					initial={{
						x: 500,
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						x: 0,
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 1.5,
					}}
					className="flex flex-row items-center text-gray-300 cursor-pointer"
				>
					<EnvelopeIcon
						className="w-5 mx-3"
					/>
					<p className="uppercase hidden md:inline-flex text-sm text-gray-400">
						Get in Touch
					</p>
				</motion.div>
			</a>
		</header>
	)
}

export default Header
