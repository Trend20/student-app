import { useState } from 'react';
import './App.css';

interface AppName{
  name: string
}

export interface Address{
    houseNo: number;
    street: string;
    Town: string;
}

export interface Student{
  name: string;
  surname: string;
  age?: number;
  address?: Address
}

const App:React.FC<AppName> = ({ name }) =>{
  const [student, setStudent] = useState<Student | null>(null)

  const addStudent = () => {
    setStudent({
      name: 'Antony',
      surname: 'Ndungu',
      age: 20
    })
  }

  return (
    <div className="App">
      <h1>{name}</h1>
      <p><b>{student?.name} {student?.surname}</b></p>
      <button onClick={addStudent}>Add Student</button>
    </div>
  );
}

export default App;
