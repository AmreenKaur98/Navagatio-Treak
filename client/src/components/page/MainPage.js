import React,{Component} from "react";
import Slider from "react-slick";

class MainPage extends Component{
  render(){
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
          <div className="mainimg">
<div class="row">
<div class="col s12 m7">
<div class="card">
<div class="card-image">
  <img src="img/India_tourism.jpg" />
</div>
<div class="card-content">
  <p> India is large with diverse weather patterns. The Himalayas stop cold winds from reaching most of India so winters remain warm and summers can get very hot.
  The majority of India is tropical and is affected by three main seasons; summer, winter and monsoon.</p>
</div>
<div class="card-action">
  <a href="#">This is a link</a>
</div>
</div>
</div>
</div>
          </div>


          <div className="mainimg">
<div class="row">
<div class="col s12 m7">
<div class="card">
<div class="card-image">
  <img src="img/bigstock-222936619-800x360.jpg" />
</div>
<div class="card-content">
  <p>Australia is world famous for its natural wonders and wide open spaces,
  its beaches, deserts, "the bush", and "the Outback". Australia is one of the world's most highly
   urbanised countries.</p>
</div>
<div class="card-action">
  <a href="#">This is a link</a>
</div>
</div>
</div>
</div>
          </div>


          <div className="mainimg">
<div class="row">
<div class="col s12 m7">
<div class="card">
<div class="card-image">
  <img src="img/england-london-big-ben-river-night.jpg" />
</div>
<div class="card-content">
  <p>England, birthplace of Shakespeare and The Beatles, is a country in the British Isles bordering Scotland and Wales. The capital, London, on the River Thames,
  is home of Parliament, Big Ben and the 11th-century Tower of London.</p>
</div>
<div class="card-action">
  <a href="#">This is a link</a>
</div>
</div>
</div>
</div>
          </div>


                    <div className="mainimg">
          <div class="row">
          <div class="col s12 m7">
          <div class="card">
          <div class="card-image">
            <img src="img/About_the_Statue_Header_[Resized_826_x_300].jpg" />
          </div>
          <div class="card-content">
            <p>The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean. Major Atlantic Coast cities are New York,
            a global finance and culture center, and capital Washington, DC. </p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
          </div>
          </div>
          </div>
                    </div>

                    <div className="mainimg">
                <div class="row">
                <div class="col s12 m7">
                <div class="card">
                <div class="card-image">
                <img src="img/luxury-travel.jpg" />
                </div>
                <div class="card-content">
                <p>Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means,
                 with or without luggage, and can be one way or round trip. </p>
                </div>
                <div class="card-action">
                <a href="#">This is a link</a>
                </div>
                </div>
                </div>
                </div>
                    </div>

        </Slider>
      );
  }
}

export default MainPage;
