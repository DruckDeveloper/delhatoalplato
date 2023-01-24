import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const AboutSlider = () => {
  const settings = {
    arrows: true, 
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 6000
  };
  return (
    <div className="w-full h-[40vh] text-center">
      <span>
      <h2 className="text-3xl md:text-[40px]">¿porque comprar en<br />Carnes Del Hato Al Plato?</h2>
        <Slider {...settings}>
        <div>
          <h3>Te ofrecemos gran variedad de carnes<br />Como: res, pollo, cerdo y pescado</h3>
        </div>
        <div>
          <h3>Carnes tajadas a contra fibra,<br />bajas en rilas para lograr una mayor terneza</h3>
        </div>
        <div>
          <h3>Si asi lo requieres, empacamos tus carnes al vacio<br />para mantenerlas frescas y en proceso de maduracion</h3>
        </div>
        <div>
          <h3>Disfruta de nuestras recetas propias en:<br /> <b>Chorizo, Longaniza y carne para hamburgueza</b></h3>
        </div>
        <div>
          <h3>Servicio de porcionado segun gramaje requerido.<br />(Restaurantes)</h3>
        </div>
        <div>
          <h3>Disfruta de pollo por presas 100% <b>NATURAL</b><br />Recuerda que el pollo marinado se reduce durante la cocción:</h3>
        </div>
        <div>
          <h3>Pechuga deshuesada y tajada<br />Sin costo adicional</h3>
        </div>
      </Slider>
      </span>
    </div>
  )
}

export default AboutSlider