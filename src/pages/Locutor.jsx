import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Transcription from '../components/Transcription';


function Locutor() {

    return (
        <div class="container">

            <Helmet>
                <link rel="stylesheet" href="/css/locutor.css"/>
            </Helmet>

            <aside>

                <Link className="link" to={'/'}>
                    <h3>Textcord</h3>
                </Link>
                
                <ul>
                    <h5>Leitores:</h5>
                    <li>teste</li>
                </ul>
                
                <Link className="sair" to={'/Login'}>
                    Sair da sala
                </Link>

                

            </aside>

            <main>
                <Transcription/>
            </main>

        </div>
    );
}

export default Locutor;