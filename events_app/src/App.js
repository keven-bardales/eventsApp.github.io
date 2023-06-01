import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente.js';
import { UserCard } from './Greeting';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <UserCard
          name='Keven Bardales'
          amount={3000}
          married={false}
          points={[99, 33.3, 22.2]}
          address={{
            street: '7 Calle',
            city: 'San Pedro Sula',
            department: 'Cortes',
          }}
          greet={function () {
            alert('hello world');
          }}
        />

        <UserCard
          name='Joe Macmilan'
          amount={4500}
          married={true}
          points={[1, 2, 3, 4, 5]}
          address={{
            street: '15 Calle',
            city: 'Tegucigalpa',
            department: 'Francisco Morazan',
          }}
        />
      </header>
    </div>
  );
}

export default App;
