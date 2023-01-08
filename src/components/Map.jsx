import React from "react";
import '../styles/MapStyles.css'

function Map() {
  return (
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          className="gmap_iframe"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=carnes del hato al plato calle 4 19 - 21 zipaquira cundinamarca colombia&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">    
        </iframe>
      </div>
    </div>
  );
}

export default Map;
