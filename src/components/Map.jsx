import React from "react";

function Map() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.5313361908607!2d-74.00100504910813!3d5.017192240209697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e40719c97fce44d%3A0xac1d089fa99b7b9e!2sCarnes%20del%20Hato%20al%20Plato!5e0!3m2!1ses!2sco!4v1673194161735!5m2!1ses!2sco"
        width="600"
        height="450"
        style={{border: 0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
