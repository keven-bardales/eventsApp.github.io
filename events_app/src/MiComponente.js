function MiComponente() {
  let nombre = 'Mi primer componente';

  return (
    <div>
      Este es un div llamado {nombre}
      <label>
        Cambia Mi nombre:
        <input id='input' type='text' name='name' />
      </label>
    </div>
  );
}

export default MiComponente;
