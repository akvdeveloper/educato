import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    quote: "Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrices ligula aliquet odio tristique euismod.",
    authorImg: "assets/img/testimonial/testi_avatar.png",
    authorName: "Margie Dose",
    authorRole: "Web Developer",
  },
  {
    id: 2,
    quote: "Ut ultrices ligula aliquet odio tristique euismod. Donec efficitur dolor in turpis aliquet.",
    authorImg: "assets/img/testimonial/testi_avatar_02.png",
    authorName: "Rock Dloder",
    authorRole: "Software Engineer",
  },
  {
    id: 3,
    quote: "Donec efficitur dolor in turpis aliquet, at mollis tortor. Fusce dictum euismod lectus, in dapibus urna.",
    authorImg: "assets/img/testimonial/testi_avatar_03.png",
    authorName: "Roboto Eorure",
    authorRole: "Product Designer",
  }
];

const UnversityTestmonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,  // 3 slides on desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,  // 2 slides for tablets
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,  // 1 slide for mobile
        },
      },
    ],
  };

  return (
    <div className=" pt-120 pb-115 p-relative fix">
            <div className="animations-01">
                <img src="assets/img/bg/an-img-03.png" alt="an-img-01" />
            </div>
            <div className="animations-02">
                <img src="assets/img/bg/an-img-04.png" alt="contact-bg-an-01" />
            </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-center mb-50">
            <h5>
              <i className="fa fa-graduation-cap" /> Testimonials
            </h5>
            <h2>What Our Student Say</h2>
          </div>
        </div>
        <div className="col-lg-12">
          <Slider {...settings} className=' fadeInUp   fadeInUp animated px-5' data-animation="fadeInUp" data-delay=".4s">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="single-testimonial text-center  p-2">
                <div className='border border-1 p-5' style={{backgroundColor:"#f0f7ff"}}>
                    <div className="qt-img d-flex justify-content-center mt-3 mb-4">
                        <img src="assets/img/testimonial/qt-icon.png" alt="qt-icon" />
                    </div>
                    <p>{testimonial.quote}</p>
                    <div className="qt-img d-flex justify-content-center mb-3 mt-3">
                        <img src={testimonial.authorImg} alt={testimonial.authorName} />
                    </div>
                    <h6>{testimonial.authorName}</h6>
                    <span>{testimonial.authorRole}</span>
                    </div>
                </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default UnversityTestmonial;
