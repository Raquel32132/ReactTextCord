import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/images/logo.png';
import seta from '../assets/images/seta.png';
import { Helmet } from 'react-helmet';

function Home() {
        return ( 
                <div className="container">

                    <Helmet>
                        <link rel="stylesheet" href="/css/home.css" />
                    </Helmet>

                    <div className="celular">
                        <img id="imglogo" src={icon} alt="Logo Textcord"/>
                    </div>

                    <br/>

                    <main>

                        <strong>Textcord</strong>
                        <h1>Transforme sua voz em texto</h1>
                        <p>Crie uma sala para falar ou entre em uma sala para ler</p>

                        <br/>
                        <br/>
                        <br/>

                        <Link to={'/Login'}>
                            <img src={seta} alt="Ir para o login"/>
                        </Link> 
                    
                    </main>

                </div>
        );
}

export default Home;