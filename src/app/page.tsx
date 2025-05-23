"use client";

import SpeechToText from "../components/SpeechToText";

export default function HomePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Speech to Text Demo</h1>
      <SpeechToText />
    </main>
  );
}
