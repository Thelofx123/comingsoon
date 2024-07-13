import LiveSvg from "@/components/mongolz"
import Image from "next/image"
export default function Home() {
	return (
		<main className="flex h-screen w-full flex-col items-center justify-center px-[42px] bg-[#111111]">
			<div className="absolute w-full h-screen z-10">
				<Image
					src="https://gobicashmere-res.cloudinary.com/image/upload/v1720881881/hee_unmtfp.png"
					fill
					className="object-cover w-full h-full"
					alt="Hee"
				/>
			</div>
			<div
				className="flex items-center justify-center w-[291px] h-[282px] lg:w-[346px] lg:h-[468px] px-[49px] z-20"
				style={{ backgroundImage: "url('/path/to/image.jpg')" }}>
				<LiveSvg className="" />
			</div>
		</main>
	)
}
