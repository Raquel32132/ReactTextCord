import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Transcription = () => {
  const { transcript, interimTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  return (
    <div>

        <div className="transcription">

          <p>
            {interimTranscript}
          </p> 

        </div>

        <div className="buttons">

          <button onClick={SpeechRecognition.startListening({ continuous: true, language: 'pt-br'})}>
            Iniciar fala
          </button>

          <button onClick={SpeechRecognition.stopListening}>
            Pausar fala
          </button>

        </div>
    </div>
  )
}
export default Transcription;