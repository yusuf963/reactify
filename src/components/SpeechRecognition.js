import React from 'react'


class SpeechRecognition extends React.Component {
  state = {
    text: null
  }
  render() {
    let speech = new SpeechSynthesisUtterance();
    const handleTextInput = (e) => {
      this.setState({ text: e.target.value })
    }
    const handleSpeech = () => {
      speech.text = this.state.text
      speech.pitch = 1;
      speech.volume = 1;
      speech.lang = "en-US";
      speech.rate = 0.9;
      speech.onend = "0k";
      speech.voice = speechSynthesis.speak(speech);
    }
    return (
      <div>
        <textarea
          onChange={handleTextInput}
          placeholder="inter text here"
          className="form-control textarea"
          rows="10"
        ></textarea>
        <button onClick={handleSpeech} className="btn btn-primary">Convert to speech</button>

      </div>
    );
  }
}

export default SpeechRecognition;