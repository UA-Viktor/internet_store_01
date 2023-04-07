import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img_1 from "../img/img_1.jpeg";
import img_2 from "../img/img_2.jpeg";
import img_3 from "../img/img_3.jpeg";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}>
      >
        <div>
          <img src={img_1} alt="text" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={img_2} alt="text" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={img_3} alt="text" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;

// ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));
