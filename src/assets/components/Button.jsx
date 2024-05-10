
function RandomNumberGenerator({generateRandomNumber, randomNumber}) {
  return (
    <>
      <h2>Numéro aléatoire généré : {randomNumber}</h2>
      <button onClick={generateRandomNumber}>Générer un nouveau numéro</button>
    </>
  );
}

export default RandomNumberGenerator;