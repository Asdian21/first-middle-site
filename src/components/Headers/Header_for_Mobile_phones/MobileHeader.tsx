import { CatalogButton } from "../../CatalogButton/CatalogButton";
import { Contacts } from "../../Contacts/Contacts";
import { MobileMenu } from "../../MobileMenu/MobileMenu";
import { StyleMobileHeader } from "./MobileHeader.style";
import { useState } from "react";

export const MobileHeader = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [contactsOpen, setContactsOpen] = useState(false);

	const handleOpenMenu = () => {
		setMenuOpen((prev) => {
			if (!prev) setContactsOpen(false); // Закрыть контакты, если открывается меню
			return !prev;
		});
	};

	const handleOpenContacts = () => {
		setContactsOpen((prev) => {
			if (!prev) setMenuOpen(false); // Закрыть меню, если открываются контакты
			return !prev;
		});
	};

	return (
		<StyleMobileHeader $menuOpen={menuOpen} $contactsOpen={contactsOpen}>
			<div className="first_line">
				<div className="first_line_inner">
					<button className="menu" onClick={handleOpenMenu}>
						{menuOpen ? "НАЗАД" : "МЕНЮ"}
					</button>
					<img src="./MainPage/logo.png" className="logo" />
					<button className="contacts" onClick={handleOpenContacts}>
						{menuOpen || contactsOpen ? (
							"КОНТАКТЫ"
						) : (
							<img src="src/assets/icons/phone.svg" />
						)}
					</button>
				</div>
			</div>
			{menuOpen && <MobileMenu />}
			{contactsOpen && <Contacts />}
			{!menuOpen && !contactsOpen && <CatalogButton />}
		</StyleMobileHeader>
	);
};
