import { MobileMenu } from "../../MobileMenu/MobileMenu";
import { StyleMobileHeader } from "./MobileHeader.style";
import { useEffect, useState } from "react";

export const MobileHeader = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [contactsOpen, setContactsOpen] = useState(false);

	const handleOpenMenu = () => {
		setMenuOpen((prev) => !prev);
	};

	const handleOpenContacts = () => {
		setContactsOpen((prev) => !prev);
	};

	useEffect(() => {
		if (contactsOpen === true) {
			setMenuOpen(false);
		}

		console.log(menuOpen ? "true" : "false");
		console.log(contactsOpen ? "true" : "false");
	}, [menuOpen, contactsOpen]);

	return (
		<StyleMobileHeader menuOpen={menuOpen}>
			<div className="first_line">
				<div className="first_line_inner">
					<button className="menu" onClick={handleOpenMenu}>
						{menuOpen ? "НАЗАД" : "МЕНЮ"}
					</button>
					<img src="./MainPage/logo.png" className="logo" />
					<button className="contacts" onClick={handleOpenContacts}>
						{menuOpen ? "КОНТАКТЫ" : <img src="src/assets/icons/phone.svg" />}
					</button>
				</div>
			</div>
			{menuOpen ? <MobileMenu /> : <h1>каталог</h1>}
			{contactsOpen ? <></> : <>oh</>}
		</StyleMobileHeader>
	);
};
