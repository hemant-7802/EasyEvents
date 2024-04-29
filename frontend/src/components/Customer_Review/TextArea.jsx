// import library
import React, {useState} from "react";

// import components
import { Button, Textarea } from "@nextui-org/react";

export default function TextArea() {
  const[message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  const handleClick = () => {
    setMessage("");
  }

  return (
    <>
      <Textarea
        label="Comments"
        placeholder="Enter your comment"
        className="max-w-xl mt-5 bg-yellow-400"
        onChange={handleChange}
        value={message}
      />
      <Button className="mt-3 bg-yellow-400" onClick={handleClick}>Add</Button>
    </>
  );
}
