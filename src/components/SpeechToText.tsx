"use client";

import React, { useEffect, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

export default function SpeechToText() {
  const [isClient, setIsClient] = useState(false);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  if (!browserSupportsSpeechRecognition) {
    return <p>Your browser does not support speech recognition.</p>;
  }

  return (
    <div style={{ marginTop: "1rem", fontFamily: "sans-serif" }}>
      <p><strong>Microphone:</strong> {listening ? "🎤 On" : "🔇 Off"}</p>
      <div style={{ margin: "1rem 0" }}>
        <button onClick={SpeechRecognition.startListening} style={btn}>Start</button>
        <button onClick={SpeechRecognition.stopListening} style={btn}>Stop</button>
        <button onClick={resetTranscript} style={btn}>Reset</button>
      </div>
      <div style={{ background: "#f9f9f9", padding: "1rem", borderRadius: "8px", minHeight: "4rem" }}>
        <strong>Transcript:</strong>
        <p>{transcript || <i>(Say something...)</i>}</p>
      </div>
    </div>
  );
}

const btn = {
  marginRight: "0.5rem",
  padding: "0.5rem 1rem",
  border: "none",
  backgroundColor: "#0070f3",
  color: "white",
  borderRadius: "4px",
  cursor: "pointer",
};
