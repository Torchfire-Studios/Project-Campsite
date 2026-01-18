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
	showMobileArrows?: boolean;
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
	showMobileArrows = false,
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
	const [touchStart, setTouchStart] = useState<number | null>(null);
	const [touchEnd, setTouchEnd] = useState<number | null>(null);
	const [isUserInteraction, setIsUserInteraction] = useState(false);

	const goToPrevious = () => {
		setIsUserInteraction(true);
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? items.length - 1 : prevIndex - 1,
		);
	};

	const goToNext = () => {
		setIsUserInteraction(true);
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % items.length);
	};

	// Swipe detection - minimum distance to be considered a swipe (in pixels)
	const minSwipeDistance = 50;

	const onTouchStart = (e: React.TouchEvent) => {
		setTouchEnd(null); // Reset touch end
		setTouchStart(e.targetTouches[0].clientX);
	};

	const onTouchMove = (e: React.TouchEvent) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	const onTouchEnd = () => {
		if (!touchStart || !touchEnd) return;

		const distance = touchStart - touchEnd;
		const isLeftSwipe = distance > minSwipeDistance;
		const isRightSwipe = distance < -minSwipeDistance;

		if (isLeftSwipe) {
			goToNext();
		} else if (isRightSwipe) {
			goToPrevious();
		}
	};

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
			setIsUserInteraction(false);
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
				onTouchStart={onTouchStart}
				onTouchMove={onTouchMove}
				onTouchEnd={onTouchEnd}
			>
				{/* Background layer for contain mode */}
				{backgroundClassName && (
					<div className={`absolute inset-0 ${backgroundClassName}`} />
				)}

				{items.map((item, index) => {
					const sizeClasses =
						objectFit === "scale-down"
							? "w-auto h-auto max-w-[90%] max-h-[90%] sm:max-w-[85%] sm:max-h-[85%] md:max-w-[80%] md:max-h-[80%] lg:max-w-[75%] lg:max-h-[75%] mx-auto my-auto"
							: "w-full h-full";

					// Faster transition for user interactions (swipes/clicks), slower for auto-advance
					const transitionDuration = isUserInteraction
						? "duration-300"
						: "duration-1500";

					return (
						<img
							key={item.imageUrl}
							src={item.imageUrl}
							alt={item.title || `Image ${index + 1}`}
							className={`absolute inset-0 ${sizeClasses} object-${objectFit} transition-opacity ${transitionDuration} ${imageClassName}`}
							style={{
								opacity: index === currentImageIndex ? 1 : 0,
							}}
						/>
					);
				})}

				{overlayClassName && <div className={overlayClassName} />}
			</div>

			{/* Mobile arrow controls */}
			{showMobileArrows && items.length > 1 && (
				<>
					<button
						onClick={goToPrevious}
						className="absolute left-2 top-1/2 -translate-y-1/2 z-10 sm:hidden bg-background/50 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-background/70 transition-all"
						aria-label="Previous image"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2.5}
							stroke="currentColor"
							className="w-5 h-5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 19.5L8.25 12l7.5-7.5"
							/>
						</svg>
					</button>
					<button
						onClick={goToNext}
						className="absolute right-2 top-1/2 -translate-y-1/2 z-10 sm:hidden bg-background/50 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-background/70 transition-all"
						aria-label="Next image"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2.5}
							stroke="currentColor"
							className="w-5 h-5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M8.25 4.5l7.5 7.5-7.5 7.5"
							/>
						</svg>
					</button>
					<div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 sm:hidden bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg text-sm">
						{currentImageIndex + 1} / {items.length}
					</div>
				</>
			)}

			{/* Navigation dots */}
			{showDots && items.length > 1 && (
				<div className={dotsClassName}>
					<div className="flex gap-2 rounded-2xl bg-background/30 p-2 backdrop-blur-sm shadow-lg shadow-black/40">
						{items.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentImageIndex(index)}
								className={`sm:w-3 sm:h-3 w-4 h-4 rounded-full transition-all duration-300 ${
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
