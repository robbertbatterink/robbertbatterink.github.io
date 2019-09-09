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
                <div className="header">Projecten</div>
                <div className="intro" id="Minor">
                    Tijdens mijn school cariere heb ik aan een aantal klein
                    schalige project gewerkt. Ool heb ik aan een aantal grotere
                    projecten gewerkt bijvoorbeeld mijn minor project. Tijdens dit project
                    heb ik als Scrum master met een internationaal en multidisciplinaire groep
                    gewerkt aan een sociale energie markt met gebruik van Blockchain, ReactJs en Python.
                </div>
                <div className="intro" id="MovieApp">
                    De meeste van mijn grotere projecten zijn school projecten.
                    Eén van deze projecten was een ReactJs en Python applicatie waarbij
                    wij een sociaal media platform bouwden met als hoofd thema
                    films. We wouden een platform maken waar je eigen groepen kon
                    en reviews voor films kon maken. Ook zou je films kunnen aanbevelen aan vrienden.
                </div>
                <div className="intro" id="CarPark">
                    Mijn Java projecten bevatten een simulatie voor een parkeer
                    garage waar wij inkomende en vertrekkende auto's moesten
                    simuleren samen met auto's die reserveerden en auto's die
                    een parkeer pas houden.
                </div>
                <div className="intro" id="Reversie">
                    Ook heb ik gewerkt aan een A.I. die reversie kon spelen tegen
                    zichzelf of tegen een persoon. Bij dit project heb ik gewerkt
                    aan het MVC design en aan de werking van de A.I zelf.
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
