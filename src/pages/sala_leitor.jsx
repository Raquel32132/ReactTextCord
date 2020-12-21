<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>


</head>
<body>

    <div id="container">

        <aside id="aside_container">

            <h3>Textcord</h3>

            <h2 id="nome_locutor"></h2>

            <button id="button_baixar_texto">
                Baixar Texto
            </button>

            <button id="button_sair">
                Sair da sala
            </button>

        </aside>

        <main id="main_container">

            <textarea name="texto" id="texto" cols="30" rows="10"></textarea>

            
        </main>

    </div>

    <div id="button_listener"> </div>

    <div id="like_button_container"></div>

    <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
    <script src="../../public/scripts/sala-leitor.js"></script>

</body>
</html>



