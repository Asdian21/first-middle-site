import { useEffect, useState } from "react";
import { Slider, StyleSection_1 } from "./Section_1.style";
import { Header } from "../../../components/Headers/Header_for_PC_and_Tablets/Header";
import { MobileHeader } from "../../../components/Headers/Header_for_Mobile_phones/MobileHeader";

export const Section_1 = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (!window.location.hash) {
			window.location.hash = "#slide-1";
		}
	}, []);

	useEffect(() => {
		const totalSlides = 7;

		// 👇 Определение текущего номера слайда
		const getCurrentSlide = () =>
			parseInt(window.location.hash.replace("#slide-", "")) || 1;

		// 👇 Переключение слайда
		const goToSlide = (index: number) => {
			if (index < 1) index = totalSlides;
			if (index > totalSlides) index = 1;
			window.location.hash = `#slide-${index}`;
		};

		// 👇 Клавиши ← →
		const handleKeyDown = (e: KeyboardEvent) => {
			const current = getCurrentSlide();
			if (e.key === "ArrowRight") goToSlide(current + 1);
			else if (e.key === "ArrowLeft") goToSlide(current - 1);
		};

		window.addEventListener("keydown", handleKeyDown);

		// 👇 Свайпы (тач и мышь)
		let startX = 0;
		let endX = 0;

		const handleTouchStart = (e: TouchEvent) => {
			startX = e.touches[0].clientX;
		};

		const handleTouchEnd = (e: TouchEvent) => {
			endX = e.changedTouches[0].clientX;
			handleSwipe();
		};

		const handleMouseDown = (e: MouseEvent) => {
			startX = e.clientX;
		};

		const handleMouseUp = (e: MouseEvent) => {
			endX = e.clientX;
			handleSwipe();
		};

		const handleSwipe = () => {
			const diff = startX - endX;
			if (Math.abs(diff) < 50) return; // игнорировать маленькие свайпы
			const current = getCurrentSlide();
			if (diff > 0) goToSlide(current + 1); // свайп влево
			else goToSlide(current - 1); // свайп вправо
		};

		const slideshow = document.querySelector(".slideshow");
		if (slideshow) {
			slideshow.addEventListener(
				"touchstart",
				handleTouchStart as EventListener
			);
			slideshow.addEventListener("touchend", handleTouchEnd as EventListener);
			slideshow.addEventListener("mousedown", handleMouseDown as EventListener);
			slideshow.addEventListener("mouseup", handleMouseUp as EventListener);
		}

		// 👇 Удаляем обработчики при размонтировании
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			if (slideshow) {
				slideshow.removeEventListener(
					"touchstart",
					handleTouchStart as EventListener
				);
				slideshow.removeEventListener(
					"touchend",
					handleTouchEnd as EventListener
				);
				slideshow.removeEventListener(
					"mousedown",
					handleMouseDown as EventListener
				);
				slideshow.removeEventListener(
					"mouseup",
					handleMouseUp as EventListener
				);
			}
		};
	}, []);

	return (
		<StyleSection_1>
			{isMobile ? <MobileHeader /> : <Header />}
			<Slider>
				<div className="container">
					<div className="slideshow">
						<div id="slide-1" className="slide">
							<a href="#slide-7"></a>
							<a href="#slide-2"></a>
							<img src="./MainPage/wallp1.jpg" />
						</div>
						<div id="slide-2" className="slide">
							<a href="#slide-1"></a>
							<a href="#slide-3"></a>
							<img src="./MainPage/wallp2.jpg" />
						</div>
						<div id="slide-3" className="slide">
							<a href="#slide-2"></a>
							<a href="#slide-4"></a>
							<img src="./MainPage/wallp3.jpg" />
						</div>
						<div id="slide-4" className="slide">
							<a href="#slide-3"></a>
							<a href="#slide-5"></a>
							<img src="./MainPage/wallp4.jpg" />
						</div>
						<div id="slide-5" className="slide">
							<a href="#slide-4"></a>
							<a href="#slide-6"></a>
							<img src="./MainPage/wallp5.jpg" />
						</div>
						<div id="slide-6" className="slide">
							<a href="#slide-5"></a>
							<a href="#slide-7"></a>
							<img src="./MainPage/wallp6.jpg" />
						</div>
						<div id="slide-7" className="slide">
							<a href="#slide-6"></a>
							<a href="#slide-1"></a>
							<img src="./MainPage/wallp7.jpg" />
						</div>

						<div className="pagination">
							<a href="#slide-1">
								<span>1</span>
							</a>
							<a href="#slide-2">
								<span>2</span>
							</a>
							<a href="#slide-3">
								<span>3</span>
							</a>
							<a href="#slide-4">
								<span>4</span>
							</a>
							<a href="#slide-5">
								<span>5</span>
							</a>
							<a href="#slide-6">
								<span>6</span>
							</a>
							<a href="#slide-7">
								<span>7</span>
							</a>
						</div>
					</div>
				</div>
			</Slider>
		</StyleSection_1>
	);
};
