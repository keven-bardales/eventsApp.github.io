export function Greeting({ id, nombre = 'user' }) {
  console.log(id, nombre);
  let variable = false;
  return (
    <div>
      Componente con numero de Id: {id} y nombre {nombre}
    </div>
  );
}

export function UserCard({ name, amount, married, address, greet }) {
  console.log(name, amount, married, address, greet);
  return (
    <div>
      <h1>{name}</h1>
      <p>💲{amount}</p>
      <p>{married ? 'married' : 'not married'}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Street: {address.street}</li>
        <li>Department: {address.department}</li>
        <button onClick={greet}>Saludar</button>
      </ul>
    </div>
  );
}

export function HolaFalso() {
  let variable = true;
  return <h1>{variable.toString()}</h1>;
}
