import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Download from '../components/Download';
import useChat from '../components/UseChat';


const Transcription = (props) => {

  const { roomId } = props.head;
  const { message, sendMessage } = useChat(roomId);

  const { transcript } = useSpeechRecognition()

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
          
          {/* <p>{transcript}</p> */}
        </div>

         <div className="buttons">
           
           <button onClick={listenContinuously}>
             Iniciar fala
           </button> 

           <button onClick={SpeechRecognition.stopListening}>
             Pausar fala
           </button>

           
           <button onClick={handleSendMessage}>
             mandarmensagem
           </button>

           <Download texto={transcript}/>
        </div>
    </div>
  )
}
export default Transcription;