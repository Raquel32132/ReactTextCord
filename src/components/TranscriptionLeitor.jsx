import React from 'react';
import Download from '../components/Download';

const TranscriptionLeitor = () => {

    const { teste } = 'teste';

    return (
        <div>

            <p className="transcription">{teste}</p>

            <Download texto={teste}/>

        </div>
    )
}

export default TranscriptionLeitor;