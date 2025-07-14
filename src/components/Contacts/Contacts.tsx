import { StyleContacts } from "./Contacts.style";

export const Contacts = () => {
	return (
		<StyleContacts>
			<div className="innerContacts">
				<span>Контакты</span>
				<div className="phoneNumber">
					<img src="src/assets/icons/phone.svg" />
					<div className="number">+7 (812) 209 00 15</div>
				</div>
				<div className="phoneNumber">
					<img src="src/assets/icons/phone.svg" />
					<div className="number">+7 (913) 111 06 90</div>
				</div>
				<div className="phoneNumber">
					<img src="src/assets/icons/phone.svg" />
					<div className="number">+7 (800) 707 99 20</div>
				</div>
				<span className="free">Бесплатно для регионов</span>
				<div className="address">
					<img src="src/assets/icons/locationMark.svg" />
					<span>г. Санкт-Петербург, ул. Заставская 11, к. 2</span>
				</div>
				<div className="delivery">Доставка по России и СНГ</div>
				<div className="workTime">
					<img src="src/assets/icons/clockMark.svg" />
					<div className="time">11:00 - 19:00</div>
				</div>
				<div className="online">Онлайн заказы 24/7</div>
				<div className="socials">
					<img className="WhatsApp" src="./MainPage/WhatsApp.png" />
					<img className="Telegram" src="./MainPage/Telegram.png" />
					<button className="videoConsult">
						<p>Заказать видео консультацию</p>
					</button>
				</div>
			</div>
		</StyleContacts>
	);
};
