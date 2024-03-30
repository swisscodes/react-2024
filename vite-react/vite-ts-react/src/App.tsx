import './App.css';
import Pets from './components/Pets/Pets';
import SearchParams from './components/SearchParams/SearchParams';

function App() {
  
  return (
    <>
      <div>
        {petsInfo.map((x) => {
          return <Pets {...x} key={x.name}/>;
        })}
        <SearchParams />
      </div>
    </>
  );
  
}

const petsInfo = [
  { name: 'ok1', animal: 'dog', breed: 'yorkshire' },
  { name: 'ok2', animal: 'dog', breed: 'yorkshire' },
  { name: 'ok3', animal: 'dog', breed: 'yorkshire' },
];

export default App;
