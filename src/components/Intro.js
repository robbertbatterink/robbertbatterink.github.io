import React, {Component} from 'react';
import './containers.css';

import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Carousel, CarouselSlide } from 'material-ui-carousel'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import westerbork from "./Westerbork.JPG";
import lariks from "./lariks.jpg";
import hanze from "./hanze.jpg";
import entrance from "./entrance.jpg";
import quinto from "./quinto.png"

class Intro extends Component {
    constructor(){
        super();
        this.state = {
            pictures: [
              {image: westerbork, title: 'Westerbork', index: 0},
              {image: lariks, title: 'Vincent van Gogh', index: 1},
              {image: hanze, title: 'Hanze', index: 2},
              {image: entrance, title: 'Entrance', index: 3},
              {image: quinto, title: 'Quinto', index: 4},
          ],
            }
    }
    render() {
        // <div className="slideshow">
        //     <Carousel data-ride="carousel" >
        //        {this.state.pictures.map(({ image, title }) => (
        //          <CarouselSlide key={image}>
        //            <Card>
        //              <CardMedia
        //                image={image}
        //                title={title}
        //                style={{
        //                  height: '100%',
        //                  paddingTop: '50%',
        //                }}
        //              />
        //              <CardContent>
        //                <Typography>{title}</Typography>
        //              </CardContent>
        //            </Card>
        //          </CarouselSlide>
        //        ))}
        //      </Carousel>
        // </div>
        return(
            <div style={{backgroundColor: "#6AA4B8"}}>
                <div className="containerLeft bg-dark">
                        <h1>About me</h1>
                        <div className="slideshow">
                        <CarouselProvider
                              style={{height: "50%"}}
                              naturalSlideWidth={100}
                              naturalSlideHeight={60}
                              totalSlides={this.state.pictures.length}
                              isPlaying={true}
                              dragEnabled={false}
                            >
                              <Slider>
                                  {this.state.pictures.map(({ image, title, index }) => (
                                    <Slide index={index} key={image}>
                                      <Card>
                                        <CardMedia
                                          image={image}
                                          title={title}
                                          style={{
                                            height: '100%',
                                            paddingTop: '50%',
                                          }}
                                        />
                                        <CardContent>
                                          <Typography>{title}</Typography>
                                        </CardContent>
                                      </Card>
                                    </Slide>
                                  ))}
                              </Slider>
                              <div className="text-center" style={{paddingTop:5}}>
                              <ButtonBack type="button" className="btn btn-info">Back</ButtonBack>
                              <ButtonNext type='button' className="btn btn-info" style={{marginLeft:15}}>Next</ButtonNext>
                              </div>
                            </CarouselProvider>
                            </div>
                        <div className="intro" id="introduction">
                            My name is Robbert Batterink and I live in the village of
                            Westerbork in Drenthe, The Netherlands. I am a student
                            at the Hanze Hogeschool of applied sciences in
                            Groningen to become a software engineer. I am currently
                            in my third year and looking for an internship.
                        </div>
                        <div className="intro" id="education">
                            I finished highschool in Assen at Vincent van Gogh Lariks
                            where I did HAVO with a package in nature and technology.
                            This is where I fistly came in contact with programming
                            because I chose informatics as an extra subject and since then
                            I wanted to do something with software development. After
                            that I went to Groningen where I currently am and where I
                            also did a minor in Smart Energy at Entrance because
                             I was interested
                            in IT in the energy sector.
                        </div>
                        <div className="intro" id="hobbies">
                            I also have a few hobbies, I play volleyball in my home
                            town, I also like to play games in my spare time with
                            friends, Also do some small coding projects in my spare
                            time because I like to learn new techniques and going out
                            during the weekends with friends is also something I do.
                        </div>
                    </div>
            </div>
        )
    }
}

export default Intro;
