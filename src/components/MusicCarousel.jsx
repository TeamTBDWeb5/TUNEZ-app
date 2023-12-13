
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const MusicCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 3, // Number of slides to show
    slidesToScroll: 1,
    className: 'notes-slider',
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-card">Card 1</div>
        <div className="carousel-card">Card 2</div>
        <div className="carousel-card">Card 3</div>
        <div className="carousel-card">Card 4</div>
      </Slider>
    </div>
  );
};

export default MusicCarousel;
