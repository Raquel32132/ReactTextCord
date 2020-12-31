import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Download from '../components/Download';
import useChat from '../components/UseChat';


const Transcription = (props) => {

  const { roomId } = props.head;
  const { message, sendMessage } = useChat(roomId);

  const { transcript } = useSpeechRecognition()

  useEffect(() => {
    handleSendMessage();
  },[transcript])


  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  const handleSendMessage = () => {
    sendMessage(transcript);
  }

  const listenContinuously = () => {
    SpeechRecognition.startListening({
    continuous: true,
    language: 'pt-br'
    })

  }

  return (
    <div>

        <div className="transcription">
          <p>
            {message.body}
          </p> 
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