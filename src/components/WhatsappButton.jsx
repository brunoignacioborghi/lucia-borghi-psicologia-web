import { FaWhatsapp } from "react-icons/fa";

import "../styles/whatsapp.css";

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5493512626614"
      target="_blank"
      rel="noreferrer"
      className="floating_whatsapp"
    >

      <FaWhatsapp />

    </a>
  );
}

export default WhatsappButton;