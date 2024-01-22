
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  const personArray = [
    {firstName:'Martin', lastName: 'Ugwu', age: 23, haircolor:'brown'},
    {firstName:'Travis', lastName: 'Scott', age: 19, haircolor:'black'},
  ]

const [person1 , person2, person3] = personArray

console.log(person1);

  return (
    <div className="App">
      {personArray.map( (person) => {
        return<PersonCard firstName= {person.firstName} lastName= {person.lastName} age= {person.age} haircolor= {person.hairColor}/>
      })}
    </div>
  )
}

export default App;
