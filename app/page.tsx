import LiveSvg from "@/components/mongolz"
import Image from "next/image"
export default function Home() {
	return (
		<main className="flex h-screen w-full flex-col items-center justify-center px-[42px] ">
			<div
				className="flex items-center justify-center w-[291px] h-[282px] lg:w-[346px] lg:h-[468px] px-[49px]"
				style={{ backgroundImage: "url('/path/to/image.jpg')" }}>
				<LiveSvg className="" />
			</div>
		</main>
	)
}
