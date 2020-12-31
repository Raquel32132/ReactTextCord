import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import icon from '../assets/images/logo.png';
import setaVoltar from '../assets/images/seta-voltar.png';
      
function Entrar() {

    const [roomName, setRoomName] = React.useState("");

    const handleRoomNameChange = (event) => {
        setRoomName(event.target.value);
    }


    return (
        <div className="container">

            <Helmet>
                <link rel="stylesheet" href="/css/entrar.css" />
            </Helmet>

            <aside>
                
                <Link to={'/'}>
                    <h3>Textcord</h3>
                </Link>

                
                <img id="logoimg" src={icon} alt="Logo"/>
            

                <Link className="link" to={'/'}>
                    <img src={setaVoltar} alt="Voltar"/>
                </Link>
                
            </aside>

            <main>

                <div className="fieldset">

                        <legend>Entre em uma sala</legend>

                        <div className="input-box">
                            <label for="nome">Digite seu nome:</label>
                            <input id="nome" name="nome"/>
                        </div>

                        <div className="input-box">
                            <label for="senha">Digite a senha da sala:</label>
                            <input type="text" value={roomName} onChange={handleRoomNameChange}/>
                        </div>

                        <Link to={`/${roomName}`}>
                            Entrar na sala
                        </Link>

                </div>

            </main>

        </div>
    );
} 

export default Entrar;