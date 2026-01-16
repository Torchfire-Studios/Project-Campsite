import ImageCarousel from "../../ui/image-carousel";
import { soulboundShowcase } from "./data";

const Content = () => {
	return (
		<section
			id="content"
			className="p-12 bg-linear-to-b from-gray-950 via-black to-gray-900 bg-[radial-gradient(circle_at_25%_15%,rgba(75,150,150,0.2),transparent_40%),radial-gradient(circle_at_75%_60%,rgba(64,224,208,0.15),transparent_50%),radial-gradient(circle_at_40%_85%,rgba(72,150,140,0.18),transparent_45%),radial-gradient(circle_at_60%_35%,rgba(48,100,100,0.12),transparent_60%)]"
		>
			<div className="relative rounded-xl overflow-hidden max-w-6xl flex justify-center mx-auto">
				<ImageCarousel
					items={soulboundShowcase}
					interval={10000}
					showDots={true}
					enableParallax={false}
					className="relative w-full"
					aspectRatio="16/9"
					objectFit="scale-down"
					dotsClassName="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4"
					overlayClassName=""
					backgroundClassName=""
				/>
			</div>
		</section>
	);
};

export default Content;
