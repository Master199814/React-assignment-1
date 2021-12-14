import logo from './logo.svg';
import './App.css';
const employee = {
  name: 'Tom',
  location: 'New York',
  bloodGroup: 'B+',
  age: 28,
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
       }
  

function App() {
  return (
      <div className="main-class">
        <img src={employee.profileImg}/>
        <h1>{employee.name}</h1>
        <p>Location</p>
        <h3>{employee.location}</h3>
        <p>BloodGroup</p>
        <h3>{employee.bloodGroup}</h3>
        <p>Age</p>
        <h3>{employee.age}</h3>
        
      </div>
  
  );
}

export default App;
