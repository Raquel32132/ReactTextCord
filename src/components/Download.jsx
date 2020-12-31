import React from 'react';

const Download = (props) => {

    const downloadTxtFile = () => {
      const element = document.createElement("a");
      const file = new Blob([props.texto], {type: 'text/plain'})
      element.href = URL.createObjectURL(file);
      element.download = "TexcordFile.txt";
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();
    }

    return (
        <div>
            <button onClick={downloadTxtFile}>Baixar texto</button>
        </div>
    );
}

export default Download;