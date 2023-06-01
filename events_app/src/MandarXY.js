export function MandarXY() {
  function add(x, y) {
    return x + y;
  }

  let numberRandom = Math.ceil(Math.random() * 6 + 1);
  let numberRandom2 = Math.floor(Math.random() * 10);
  console.log(numberRandom, numberRandom2);

  return (
    <>
      <h1>{add(numberRandom2, numberRandom)}</h1>
    </>
  );
}
