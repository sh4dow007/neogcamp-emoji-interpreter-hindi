import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🤩": "Ankho ka taara hona",
  "😂": "Khushi ke ansu",
  "🤯": "Hosh udd jana",
  "😵‍💫": "Sar chakkar kha gya",
  "😤": "Aag babula hona",
  "😒": "Kya bakwas hai",
  "😍": "Ankho ka dulara"
};

var knownEmojis = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var meaning = emojiDictionary[event.target.value];

    if (meaning === undefined) {
      meaning = "cant find!😖";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter (Hindi)</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>

      <h3>emojis we know</h3>
      {knownEmojis.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}