import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import TranscriptionLeitor from '../components/TranscriptionLeitor';


function Leitor() {
    return (
        <div className="container">

            <Helmet>
                <link rel="stylesheet" href="/css/leitor.css"/>
            </Helmet>

            <aside>

                <Link className="link" to={'/'}>
                    <h3>Textcord</h3>
                </Link>

                <h6>Locutor: </h6>

                <Link className="sair" to={'/Login'}>
                    Sair da sala
                </Link>

            </aside>

            <main>
                <TranscriptionLeitor/>
            </main>

        </div>
    );
}

export default Leitor;

