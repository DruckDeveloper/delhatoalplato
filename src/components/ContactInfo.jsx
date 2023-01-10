import React from "react";
import Map from "./Map";
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BsFacebook } from "react-icons/bs";

function ContactInfo() {
  return (
    <section className="my-20">
      <h2 className="text-center text-[25px]">CONTACTANOS</h2>
      <article className="flex justify-center gap-[50px] flex-col lg:flex-row">
        <div>
          <ul className="list-none">
            <li className="flex justify-center items-center gap-[5px]">
              <BsFillTelephoneFill className="text-[15px]"/>
              <span className="text-[15px]">3134368647</span></li>
            <li className="flex justify-center items-center gap-[5px]">
              <BsFacebook className="text-[15px]"/>
              <a className="text-[15px]" href="https://es-la.facebook.com/Carnesdelhatoalplato/">Siguenos en facebook</a></li>
          </ul>
        </div>
        <div>
            <Map/>
        </div>
      </article>
    </section>
  );
}

export default ContactInfo;
