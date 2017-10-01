import React, {  Component } from 'react';

import PropTypes from 'prop-types';
import SpeechRecognition from 'react-speech-recognition'


const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
}

class SpeechRecog extends Component {


  render(){
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props


    if (!browserSupportsSpeechRecognition) {
      return null
    }

    return(

      <div>
        <button onClick={resetTranscript}>Reset</button>
        <span>{transcript}</span>
      </div>
    )
  }

}
SpeechRecog.propTypes = propTypes

export default SpeechRecognition(SpeechRecog);
