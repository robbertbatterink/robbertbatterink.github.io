import React, {Component} from 'react';
import './containers.css';

import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Carousel, CarouselSlide } from 'material-ui-carousel'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import Grid from '@material-ui/core/Grid';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { FaLink } from 'react-icons/fa'

import { IntlProvider, FormattedMessage } from 'react-intl';

import westerbork from "./Westerbork.JPG";
import lariks from "./lariks.jpg";
import hanze from "./hanze.jpg";
import entrance from "./entrance.jpg";
import quinto from "./quinto.png"

class Intro extends Component {
    constructor(){
        super();
        this.state = {
            lang: "en",
            pictures: [
              {image: westerbork, title: 'Westerbork',link: "https://nl.wikipedia.org/wiki/Westerbork_(dorp)",index: 0},
              {image: lariks, title: 'Vincent van Gogh',link: "https://www.csvincentvangogh.nl/lariks.aspx", index: 1},
              {image: hanze, title: 'Hanze',link: "https://www.hanze.nl/nld/", index: 2},
              {image: entrance, title: 'Entrance',link: "https://www.en-tran-ce.org/", index: 3},
              {image: quinto, title: 'Quinto',link: "http://www.vvquinto.nl/", index: 4},
          ],
            en: {
                intro1: "My name is Robbert Batterink and I live in the village of Westerbork in Drenthe, The Netherlands. I am a student at the Hanze Hogeschool of applied sciences in Groningen to become a software engineer. I am currently in my third year and looking for an internship.",
                intro2: "I finished highschool in Assen at Vincent van Gogh Lariks where I did HAVO with a package in nature and technology. This is where I fistly came in contact with programming because I chose informatics as an extra subject and since then I wanted to do something with software development. After that I went to Groningen where I currently am and where I also did a minor in Smart Energy at Entrance because I was interested in IT in the energy sector.",
                intro3: "I also have a few hobbies, I play volleyball in my home town, I also like to play games in my spare time with friends, Also do some small coding projects in my spare time because I like to expand my programming knowledge. Going out during the weekends with friends is also something I do.",
            }
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
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                        <div className="header">Wie ben ik</div>
                        <div className="intro" id="introduction">
                            Mijn naam is Robbert Batterink en ik woon in
                            Westerbork in de provincie Drenthe, Nederland.
                            Ik ben een student bij de Hanze Hogeschool of
                            applied sciences in Groningen, daar studeer ik nu om
                            een Software developer te worden. Op dit moment zit
                            ik in mijn derde studiejaar en ben ik opzoek naar een stage
                        </div>
                        <div className="intro" id="education">
                            Ik heb de mijn middelbare school afgemaakt in Assen bij het Vincent van Gogh Lariks.
                            Ik heb daar HAVO gedaan met het pakket natuur en techniek.
                            Dit is ook waar ik mijn eerste ervaring had met programmeren omdat
                            ik het keuze vak informatica had gekozen. Sinds ik dit vak
                            gekozen had heb ik altijd wel een passie gehad voor software development.
                            Hierna ben ik naar Groningen gegaan waar ik op dit moment studeer. Ook heb ik
                            in Groningen de Smart Energy minor gedaan bij Entrance omdat ik wel
                            geintreseerd was in de IT in de energie sector.
                        </div>
                        <div className="intro" id="hobbies">
                            Ook heb ik een aantal hobbies, Ik speel graag volleybal bij mijn lokale volleybal vereniging,
                            Ik vind het ook leuk om in mijn vrije tijd te gamen met vrienden.
                            In mijn vrije tijd doe ik ook aan een aantal kleinschalige programmeer projecten omdat ik het
                            leuk vindt om mijzelf te verbeteren en kleine programma's te maken.
                            Uit gaan tijdens het weekend met vrienden is ook iets dat ik graag doe.
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
                                  {this.state.pictures.map(({ image, title, link ,index }) => (
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
                                          <a href={link} target="_blank"><FaLink className="link"/></a>
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

export default Intro;
