import React from "react";
import { FaCalendarAlt } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'; 
import { IoLogoWhatsapp } from 'react-icons/io'
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="web-footer w-full">
      <div className="footer-text-content flex justify-center" >
        <ul className="w-[30%] text-center text-white">
          <li className="flex justify-center items-center">
            <FaCalendarAlt className="text-[20px] text-center text-white"/>
            <span>Horario de atencion</span>
          </li>
          <li>Lunes a Sabado: 7:00a.m. - 7:00p.m.</li>
          <li>Domingos: 7:00a.m. - 3.p.m.</li>
        </ul>
      </div>
      <div className="footer-icons flex justify-center gap-[1%]">
        <a href="https://www.facebook.com/Carnesdelhatoalplato/" target="__blank">
          <BsFacebook className="text-white text-[25px]"/>
        </a>
        <a href="#">
          <IoLogoWhatsapp className="text-white text-[25px]"/>
        </a>
      </div>
      <div className="footer-copyright text-white text-center">Copyright © 2022 Carnes del Hato al Plato. Todos los derechos reservados</div>
    </footer>
  );
};

export default Footer;
