import React, {Component} from 'react';
import './containers.css';

import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Carousel, CarouselSlide } from 'material-ui-carousel'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import Grid from '@material-ui/core/Grid';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { FaGithub } from 'react-icons/fa'

import powerchainger from "./powerchainger.JPG";
import movieapp from "./movieapp.png";
import simulation from "./simulation.png";
import reversi from "./reversi.png";

class Projects extends Component {
    constructor(){
        super();
        this.state = {
            pictures: [
                {image: powerchainger, title: 'PowerChainger',link: "https://gitlab.com/RobbertBatterink/powerchainger",index: 0},
                {image: movieapp, title: 'MovieApp',link: "https://github.com/bigoner18/MovieApp-2.4", index: 1},
                {image: simulation, title: 'Simulation',link: "https://gitlab.com/nvbln/project-parkeer-garage", index: 2},
                {image: reversi, title: 'Reversi A.I',link: "https://github.com/robbertbatterink/game-framework", index: 3},
          ],
            }
    }
    render() {
        return(
            <div style={{backgroundColor: "#6AA4B8"}}>
            <div className="containerRight bg-dark">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                <div className="header">Projects</div>
                <div className="intro" id="Minor">
                    During my School career I have done some small and minor
                    projects. I have also worked on some larger projects
                    including my Minor project where I worked with a international
                    multidisiplinairy team on a social energy marketplace with the
                    use of Blockchain, ReactJS and Python.
                </div>
                <div className="intro" id="MovieApp">
                    Most of my larger projects are school projects. These include
                    a ReactJS and Python application where we wanted to make a movie based
                    social media platform where you could write reviews and recommend
                    movies to your friends.
                </div>
                <div className="intro" id="CarPark">
                    My Java projects include a Simulation for a parking garage
                    where we needed to simulate cars comming in and out of the
                    garage together with cars who have reservations.
                </div>
                <div className="intro" id="Reversie">
                    I also worked on an A.I that you could play reversie against.
                    On this project I worked on the A.I itself and also the
                    overall MVC design.
                </div>
                </Grid>
                <Grid item xs={12} sm={6}>
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
                          {this.state.pictures.map(({ image, title,link ,index }) => (
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
                                  <Typography>
                                  {title}
                                  <a href={link} target="_blank"><FaGithub className="git"/></a>
                                  </Typography>
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
                    </Grid>
                </Grid>
            </div>
            </div>
        )
    }
}

export default Projects;
