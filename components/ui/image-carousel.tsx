"use client";

import { useEffect, useState } from "react";

export interface CarouselItem {
	imageUrl: string;
	title?: string;
	link?: string;
}

interface ImageCarouselProps {
	items: CarouselItem[];
	interval?: number;
	showDots?: boolean;
	enableParallax?: boolean;
	className?: string;
	imageClassName?: string;
	overlayClassName?: string;
	dotsClassName?: string;
	activeDotClassName?: string;
	inactiveDotClassName?: string;
	onIndexChange?: (index: number) => void;
	aspectRatio?: string;
	objectFit?: "cover" | "contain" | "scale-down";
	backgroundClassName?: string;
}

const ImageCarousel = ({
	items,
	interval = 10000,
	showDots = true,
	enableParallax = false,
	className = "",
	imageClassName = "",
	overlayClassName = "absolute inset-0 bg-black/30",
	dotsClassName = "absolute bottom-15 z-10 flex items-center gap-4",
	activeDotClassName = "bg-primary scale-125",
	inactiveDotClassName = "bg-foreground hover:bg-foreground/80 hover:cursor-pointer",
	onIndexChange,
	aspectRatio,
	objectFit = "cover",
	backgroundClassName = "bg-background/30 backdrop-blur-sm",
}: ImageCarouselProps) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [scrollY, setScrollY] = useState(0);

	// Parallax scroll effect
	useEffect(() => {
		if (!enableParallax) return;

		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [enableParallax]);

	// Auto-advance carousel
	useEffect(() => {
		if (items.length <= 1) return;

		const intervalId = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % items.length);
		}, interval);

		return () => clearInterval(intervalId);
	}, [items.length, interval, currentImageIndex]);

	// Notify parent of index changes
	useEffect(() => {
		if (onIndexChange) {
			onIndexChange(currentImageIndex);
		}
	}, [currentImageIndex, onIndexChange]);

	return (
		<>
			{/* Carousel images */}
			<div
				className={className}
				style={{
					...(enableParallax && {
						transform: `translateY(${scrollY * 0.4}px)`,
					}),
					...(aspectRatio && { aspectRatio }),
				}}
			>
				{/* Background layer for contain mode */}
				{backgroundClassName && (
					<div className={`absolute inset-0 ${backgroundClassName}`} />
				)}

				{items.map((item, index) => {
					const sizeClasses = objectFit === "scale-down"
						? "max-w-full max-h-full p-4 mx-auto my-auto"
						: "w-full h-full";

					return (
						<img
							key={item.imageUrl}
							src={item.imageUrl}
							alt={item.title || `Image ${index + 1}`}
							className={`absolute inset-0 ${sizeClasses} object-${objectFit} transition-opacity duration-3000 ${imageClassName}`}
							style={{
								opacity: index === currentImageIndex ? 1 : 0,
							}}
						/>
					);
				})}

				{overlayClassName && <div className={overlayClassName} />}
			</div>

			{/* Navigation dots */}
			{showDots && items.length > 1 && (
				<div className={dotsClassName}>
					<div className="flex gap-2 rounded-2xl bg-background/30 p-2 backdrop-blur-sm shadow-lg shadow-black/40">
						{items.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentImageIndex(index)}
								className={`w-3 h-3 rounded-full transition-all duration-300 ${
									index === currentImageIndex
										? activeDotClassName
										: inactiveDotClassName
								}`}
								aria-label={`View image ${index + 1}`}
							/>
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default ImageCarousel;
