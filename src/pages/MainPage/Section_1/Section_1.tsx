import { useEffect, useState } from "react";
import { Block, Slider, StyleNumber, StyleSection_1 } from "./Section_1.style";
import { BasicMenu } from "../../../components/BasicMenu/BasicMenu";
import { SearchBar } from "../../../components/SearchBar/SearchBar";
import { Icons } from "../../../components/Icons/Icons";

export const Section_1 = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const [activeIndexBlock, setActiveIndexBlock] = useState<number | null>(null);

	const menuItems = [
		{ id: 0, label: "О нас" },
		{ id: 1, label: "Доставка" },
		{ id: 2, label: "Оплата" },
		{ id: 3, label: "Услуги" },
		{ id: 4, label: "Блог" },
		{ id: 5, label: "Контакты" },
	];

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
			<div className="first_line">
				<div className="left_info_container">
					<div className="location">
						<img
							src="src\assets\icons\locationMark.svg"
							className="locationImg"
						></img>
						<span className="location_text">
							г. Санкт-Петербург, ул. Заставская 11, к. 2
						</span>
					</div>
					<div className="work_time">
						<img src="src/assets/icons/clockMark.svg" className="clockImg" />
						<div className="work_time_text">11:00 - 19:00</div>
					</div>
					<div className="vertical_line"></div>
					<div className="orders">Онлайн заказы 24/7</div>
				</div>
				<div className="right_info_container">
					{menuItems.map((item) => (
						<a href="#" key={item.id}>
							<div
								className={`${item.label.toLowerCase()} ${
									activeIndex === item.id ? "active" : "disabled"
								}`}
								onClick={() => setActiveIndex(item.id)}
							>
								{item.label}
							</div>
						</a>
					))}
				</div>
			</div>
			<div className="second_line">
				<div className="logo"></div>
				<div className="search">
					<div className="catalog">
						<BasicMenu />
					</div>
					<SearchBar />
				</div>
				<div className="free_for_regions">
					<div className="left_side">
						<div className="left_top">
							<StyleNumber>
								<img src="src/assets/icons/phoneIcon.svg" alt="phoneIcon" />
								<span>+7 (800) 707 99 20</span>
							</StyleNumber>{" "}
							<button>
								<img
									src="src/assets/icons/arrow_down_2.svg"
									alt="arrow_down_2"
								/>
							</button>
						</div>
						<span className="left_bottom">Бесплатно для регионов</span>
					</div>
					<div className="right_side">
						<StyleNumber>
							<img src="src/assets/icons/phoneIcon.svg" alt="phoneIcon" />
							<span>+7 (800) 707 99 20</span>
						</StyleNumber>
						<StyleNumber>
							<img src="src/assets/icons/phoneIcon.svg" alt="phoneIcon" />
							<span>+7 (800) 707 99 20</span>
						</StyleNumber>
					</div>
				</div>
				<Icons />
			</div>
			<div className="third_line">
				{[
					"Газовые грили",
					"Угольные грили",
					"Керамические грили",
					"Коптильни",
					"Аксессуары",
					"Гриль-кухни",
					"Школа барбекю",
				].map((label, index) => (
					<Block
						key={index}
						className={`block${index + 1} block`}
						$active={activeIndexBlock === index}
						onClick={() => setActiveIndexBlock(index)}
					>
						{label}
					</Block>
				))}
			</div>
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
