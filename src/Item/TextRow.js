import React from "react";
import { InputBase } from "@material-ui/core";

export default function TextRow({
  inputRef,
  text,
  handleChange,
  handleKeyDown,
  autoFocus
}) {
  return (
    <InputBase
      ref={inputRef}
      fullWidth
      margin="dense"
      multiline={true}
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      autoFocus={autoFocus}
    />
  );
}
