'use client'

import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function About({}: Props) {
  return (
		<motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        className="flex flex-col relative h-screen  text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				About
			</h3>
			<motion.img 
            initial={{
                x:-300,
                opacity:0
            }}
            whileInView={{opacity:1, x:0}}
            transition={{
                duration:1.2
            }}
            viewport={{once: true}}
            src="https://scontent.fpbc2-2.fna.fbcdn.net/v/t31.18172-8/12605367_10208613760171401_2592774148701610873_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEKKZmEVvp1eUWZmacsQKcbTqCL-yS8bulOoIv7JLxu6X25AXYo7pk1hfQ7MGlpjOE&_nc_ohc=z2hlBhPhu-0AX-Q3mCM&_nc_ht=scontent.fpbc2-2.fna&oh=00_AfA6O9zUvLzT9zzHwMKHHmCZwOSCCOD7l-RfmYkSSL9XQA&oe=6449ADB8" 
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rouded-lg md:w-64 xl:w-[400px] xl:h-[600px]"
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className='text-4xl font-semibold'>
                    here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background </h4>
<p className='text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis necessitatibus natus eos autem incidunt provident repudiandae labore excepturi illo quos illum assumenda exercitationem repellat corrupti, amet nam reprehenderit, recusandae iure, veritatis doloremque dicta officiis quidem beatae quam? Cupiditate dolore nulla facere, nam unde quisquam vel facilis ullam doloribus eaque expedita fugiat libero, quos hic modi veritatis.</p>
            </div>
		</motion.div>
	)
}

export default About