console.log('App.js is running ...');

//JSX - JavaScript XML

let userName = 'Iurii Lopatenko';
let userAge = 34;
let userLocation = 'Los Angeles, CA';

let user = {
  name: 'John Doe',
  age: 41,
  location: 'Dallas, TX',
};
const templateTwo = (
  <div>
    <h1>JSX template #1</h1>
    <h2>{userName.toUpperCase()}</h2>
    <p>Age: {userAge + 5}</p>
    <p>Location: {userLocation}</p>

    <h1>JSX template #2</h1>
    <h2>{user.name.toLowerCase()}</h2>
    <p>Age: {user.age * 2}</p>
    <p>Location: {user.location}</p>
  </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
