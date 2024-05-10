import { useState } from "react";
import Cards from "../components/Card";
import Button from "../components/Button"

function Random() {

  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 99999) + 1;
    setRandomNumber(newRandomNumber);
  }

  return (
    <>
      <Cards 
      randomNumber = {randomNumber}/>
      <Button
      generateRandomNumber = {generateRandomNumber}
      randomNumber = {randomNumber}/>
    </>
  );
}

export default Random;
