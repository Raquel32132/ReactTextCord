import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import icon from '../assets/images/logo.png';
import setaVoltar from '../assets/images/seta-voltar.png';

function Criar() {

    return (
        <div className="container">

            <Helmet>
                <link rel="stylesheet" href="/css/criar.css" />
            </Helmet>

            <aside>
                
                <Link to={'/'}>
                    <h3>Textcord</h3>
                </Link>

                <img id="logoimg" src={icon} alt="Logo"/>
                

                <Link className="link" to={'/Login'}>
                    <img src={setaVoltar} alt="Voltar"/>
                </Link>
                
            </aside>

            <main>

                <form action="">
                    <fieldset>

                        <legend>Crie sua sala</legend>

                        <div className="input-box">
                            <label for="nome">Digite seu nome:</label>
                            <input id="nome" name="nome" required/>
                        </div>

                        <div className="input-box">
                            <label for="senha">Digite uma senha:</label>
                            <input id="senha" name="senha" required/>
                        </div>

                        <button type="submit">
                            Criar sala
                        </button>

                    </fieldset>
                </form>

            </main>

        </div>
    );
} 

export default Criar;