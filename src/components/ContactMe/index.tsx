"use client"

import React, { useState } from "react"
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid"
import { SubmitHandler, useForm } from "react-hook-form"
import { PageInfo } from "../../../typings"
import { toast } from "react-hot-toast"
import { set } from "sanity"

type Inputs = {
	name: string
	email: string
	subject: string
	message: string
}

type Props = {
	pageInfo?: PageInfo
}

function ContactMe({ pageInfo }: Props) {
	const [loading, setLoading] = useState(false)
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		setLoading(true)

		const toastId = toast.loading("Enviando email...")

		
		fetch("/api/email-send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((data) => {
					console.log("Success:", data)
					toast.dismiss(toastId)
					toast.success("Corrreo enviado correctamente")
				})
			.catch((err) => {
				console.log(err)
				toast.error("Error creating store")

			})
			.finally(() => {
				setValue("name", "")
				setValue("email", "")
				setValue("subject", "")
				setValue("message", "")
				setLoading(false)})
	
	}
	return (
		<div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Contact
			</h3>
			<div className="flex flex-col space-y-10">
				<h4 className="text-4xl font-semibold text-center">
					I have got just what you need.
					<span className="decoration-mariachon-orange/50 underline">
						Lets Talk.
					</span>
				</h4>

				<div className="space-y-10">
					<div className="flex items-center space-x-5 justify-center">
						<PhoneIcon className="text-mariachon-orange h-7 w-7 animate-pulse" />
						<p className="text-2xl">{pageInfo?.phoneNumber}</p>
					</div>
					<div className="flex items-center space-x-5 justify-center">
						<EnvelopeIcon className="text-mariachon-orange h-7 w-7 animate-pulse" />
						<p className="text-2xl">{pageInfo?.email}</p>
					</div>
					<div className="flex items-center space-x-5 justify-center">
						<MapPinIcon className="text-mariachon-orange h-7 w-7 animate-pulse" />
						<p className="text-2xl">{pageInfo?.address}</p>
					</div>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col space-y-2 w-fit mx-auto"
				>
					<div className="flex space-x-2">
						<input
							{...register("name")}
							placeholder="Name"
							className="contactInput"
							type="text"
						/>
						<input
							{...register("email")}
							placeholder="email"
							className="contactInput"
							type="email"
						/>
					</div>

					<input
						{...register("subject")}
						placeholder="Subject"
						className="contactInput"
						type="text"
					/>
					<textarea
						{...register("message")}
						placeholder="Message"
						className="contactInput"
					/>
					<button
						type="submit"
						disabled={loading}
						className="bg-mariachon-orange py-5 rounded-md text-black font-bold text-lg"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	)
}

export default ContactMe
