import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Download from '../components/Download';

const Transcription = () => {
  const { transcript  } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  const listenContinuously = () => SpeechRecognition.startListening({
    continuous: true,
    language: 'pt-br'
  })

  return (
    <div>
        <div className="transcription">
          <p>{transcript}</p> 
        </div>

         <div className="buttons">
           <button onClick={listenContinuously}>
             Iniciar fala
           </button> 

           <button onClick={SpeechRecognition.stopListening}>
             Pausar fala
           </button>

           <Download texto={transcript}/>

        </div>
    </div>
  )
}
export default Transcription;