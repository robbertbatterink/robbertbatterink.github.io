import React, {Component} from 'react';
import './containers.css';

import { FaJava, FaPython, FaReact, FaPhp, FaHtml5, FaCss3 } from 'react-icons/fa'
import { DiScrum, DiJsBadge, DiGit, DiAtom, DiMysql } from "react-icons/di";
import Grid from '@material-ui/core/Grid';

class Skills extends Component {
    render() {
        return(
            <div style={{backgroundColor: "#6AA4B8"}}>
            <div className="containerLeft bg-dark" >
                <div className="header">Skills</div> <br/>
                    <div className="intro">
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <ul >
                                <li><FaJava  className='skills'/>  Java  -  General-purpose OOP language </li>
                                <li><FaPython  className='skills'/>   Python - An interpreted, object-oriented, high-level programming language  </li>
                                <li><FaReact  className='skills'/>   React - A library for building composable user interfaces 1 year of experience </li>
                                <li><FaPhp  className='skills'/>   Php - A script language and interpreter </li>
                                <li><FaHtml5  className='skills'/>   HTML - A markup language for the structure and presentation of World Wide Web </li>
                                <li><FaCss3  className='skills'/>   Css -  Language for describing the presentation of Web pages</li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ul>
                                <li><DiScrum  className='skills'/>   Agile Scrum - A framework that helps teams work together </li>
                                <li><DiJsBadge  className='skills'/>   JavaScript - A client-side scripting language </li>
                                <li><DiGit  className='skills'/>   Git - A type of version control system</li>
                                <li><DiAtom  className='skills'/>   Atom - A text editor I use for developing </li>
                                <li><DiMysql  className='skills'/>   MySQL - A full-featured relational database management system </li>
                            </ul>
                        </Grid>
                    </Grid>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;
