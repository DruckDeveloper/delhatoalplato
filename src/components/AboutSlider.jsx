import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const AboutSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true
  };
  return (
    <div className="w-100 text-center">
        <h2 className="text-3xl">¿porque Carnes Del Hato Al Plato?</h2>
        <Slider {...settings}>
          <div>
            <h3>Lorem ipsum dolor sit amet consectetur, <br/> adipisicing elit. Necessitatibus, voluptate cum? Velit, quae? Deserunt maxime veniam amet sed, autem ipsa quasi minima quas quam optio modi expedita mollitia facilis magnam!</h3>
          </div>
          <div>
            <h3>ABCDEFIJOJOIDJOIEJOIDJOSIJOFIJEOIDJSIJFOEIJSOD</h3>
          </div>
          <div>
            <h3>123456546351654654651651651651</h3>
          </div>
          <div>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis corrupti optio consectetur voluptatum quaerat ratione est iste. Fugit doloribus atque cupiditate aperiam accusamus ducimus assumenda? Facilis eaque quas maxime?</h3>
          </div>
          <div>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ullam voluptas repudiandae, amet laboriosam modi suscipit ipsam ad inventore. Odit vel, sed fuga nesciunt quia itaque placeat dignissimos minima aliquid.</h3>
          </div>
        </Slider>
      </div>
  )
}

export default AboutSlider