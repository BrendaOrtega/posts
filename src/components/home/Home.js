import React, { Component } from 'react';
import './Home.css';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="home">
                    <div className="cover">
                        <div className="nav">
                            <img src="https://www.ironhack.com/assets/shared/logo.svg" alt=""/>
                        </div>
                        <div className="flex">
                            <div className="slogan">
                                <h1>UX/UI Tips</h1>
                                <p>Las mejores prácticas de UX</p>
                                <FontAwesome className="icono" name="angle-down"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="posts">
                    <div className="card">
                        <Link to="/detail">
                        <h2>¿Qué es Design Thinking?</h2></Link>
                        <p>During the discovery phase, in order to get the entire picture,
                            you want to get insight from a variety of sources. These are
                            some of the most popular UX Research interviews:</p>
                        <div className="flexin">
                        <span>23 de Febrero de 2018</span>
                        <hr/><span>10 minutos</span></div>
                    </div>
                    <div className="card">
                        <h2>¿Qué es Design Thinking?</h2>
                        <p>During the discovery phase, in order to get the entire picture,
                            you want to get insight from a variety of sources. These are
                            some of the most popular UX Research interviews:</p>
                        <div className="flexin">
                            <span>23 de Febrero de 2018</span>
                            <hr/><span>10 minutos</span></div>
                    </div>
                    <div className="card">
                        <h2>¿Qué es Design Thinking?</h2>
                        <p>During the discovery phase, in order to get the entire picture,
                            you want to get insight from a variety of sources. These are
                            some of the most popular UX Research interviews:</p>
                        <div className="flexin">
                            <span>23 de Febrero de 2018</span>
                            <hr/><span>10 minutos</span></div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;