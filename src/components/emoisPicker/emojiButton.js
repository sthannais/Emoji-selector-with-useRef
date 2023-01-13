import React from "react";

export default function EmojiButon({ emoji, onClick }) {
  function handleClick() {
    onClick(emoji);
  }
  return <button onClick={handleClick}>{emoji.symbol}</button>;
}
