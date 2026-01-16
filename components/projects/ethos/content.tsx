import ImageCarousel from "../../ui/image-carousel";
import { ethosShowcase } from "./data";

const Content = () => {
	return (
		<section
			id="content"
			className="p-12 bg-linear-to-br from-white via-sky-50 to-blue-100 bg-[radial-gradient(circle_at_20%_30%,rgba(147,197,253,0.5),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(186,230,253,0.45),transparent_50%),radial-gradient(circle_at_60%_70%,rgba(224,242,254,0.6),transparent_55%),radial-gradient(circle_at_35%_80%,rgba(125,211,252,0.4),transparent_40%)]"
		>
			<div className="relative rounded-xl overflow-hidden max-w-6xl flex justify-center mx-auto">
				<ImageCarousel
					items={ethosShowcase}
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
