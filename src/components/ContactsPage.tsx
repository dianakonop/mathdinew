import React, { useState } from "react";
import Sidebar from "./SideBar";
import type { PageKey } from "../types";
import "./ContactsPage.css";

const contacts = [
  { name: "Telegram", icon: "/telegram.png", link: "https://t.me/xrxtg", label: "XRXTG" },
  { name: "TikTok", icon: "/tiktok.png", link: "https://www.tiktok.com/@dianakonop", label: "dianakonop" },
  { name: "Phone", icon: "/phone.png", link: "tel:+380978564875", label: "+380978564875" },
];

type ContactsPageProps = {
  onNavigate: (page: PageKey) => void;
  activePage: PageKey;
};

const ContactsPage: React.FC<ContactsPageProps> = ({ onNavigate, activePage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handleClick = (idx: number, link: string) => {
    setActiveIdx(idx);
    setTimeout(() => {
      window.open(link, "_blank");
      setActiveIdx(null);
    }, 300);
  };

  return (
    <>
      {/* Фоновий контейнер на весь екран */}
    <div className="background-container">
  <div className="rotating-images">
    <img src="/bg1.png" alt="Background 1" />
    <img src="/bg2.png" alt="Background 2" />
  </div>
</div>




      {/* Заголовок */}
      <h1
        className="absolute top-6 left-1/2 -translate-x-1/2 text-4xl font-bold text-white drop-shadow-[2px_2px_0px_black] z-10"
        style={{ fontFamily: "'Chewy', sans-serif" }}
      >
        MATHDI
      </h1>

      {/* Обгортка для центрованої контактної картки */}
      <div className="centered-wrapper">
        <div
          className="contact-card"
          role="region"
          aria-label="Контактна інформація"
        >
          <h1 className="contacts-header">
            Я НА ЗВ’ЯЗКУ, <span className="highlight">GUYS!</span>
          </h1>

          {contacts.map((contact, idx) => (
            <div
              key={contact.name}
              className={`contact-item ${activeIdx === idx ? "active" : ""}`}
              onClick={() => handleClick(idx, contact.link)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleClick(idx, contact.link);
              }}
            >
              <img
                src={contact.icon}
                alt={`${contact.name} icon`}
                className="contact-icon"
                draggable={false}
              />
              <div className="contact-label">{contact.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Кнопка бургер */}
      <div className="burger-button" onClick={() => setMenuOpen(true)} title="Menu">
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
      </div>

      <Sidebar
  menuOpen={menuOpen}
  onClose={() => setMenuOpen(false)}
  activePage={activePage}
  onNavigate={(page) => {
    if (page !== activePage) {  // перевіряємо, чи змінився пункт
      onNavigate(page);
      setMenuOpen(false);
    }
    // якщо той же пункт, меню залишиться відкритим
  }}
/>
    </>
  );
};

export default ContactsPage;
