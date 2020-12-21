import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/images/logo.png';
import { Helmet } from 'react-helmet';

function Login() {
        return (
            <div className="container">

                    <Helmet>
                        <link rel="stylesheet" href="/css/login.css" />
                    </Helmet>

                <aside>
                    <Link to={'/'}>
                        <h3>Textcord</h3>
                    </Link>
                    
                    <img src={icon} alt="Logo Textcord"/>
                    
                </aside>

                <main>

                    <p>O que você deseja?</p>

                    <br/>
    
                    <Link className="link" to={'/Login/Criar'}> 
                        Criar uma sala
                    </Link>
                        
                    <br/>
                
                    <Link className="link" to={'/Login/Entrar'}>
                        Entrar em uma sala
                    </Link>

                </main>
            </div>
        );
    
} 

export default Login;