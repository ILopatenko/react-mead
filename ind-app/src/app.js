//JSX - JavaScript XML
//012 - THEORY
let user = {
  name: 'Iurii Lopatenko',
  age: 34,
  location: 'Los Angeles, CA, USA',
};

//Ternary operator
const getLocation = user.location ? (
  <p>Location: {user.location}</p>
) : undefined;

//IF
const checkUserName = (nameToCheck) => {
  if (nameToCheck) {
    return nameToCheck;
  } else {
    return 'ANONYMOUS';
  }
};

const templateTheory = (
  <div>
    <h1>JSX template</h1>
    <h2>{checkUserName(user.name)}</h2>
    {/*Logical compare*/}
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation}
  </div>
);

//012 PRACTICE
const app = {
  title: 'Indecision App',
  subtitle: 'There is something subtitle for an APP ...',
  options: ['One', 'Two', 'Three'],
};

let templatePractice = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ? 'Here are your options:' : 'No any options'}
    {app.options.map((element, index) => (
      <p key={index}>
        Option #{index + 1} is: {element}
      </p>
    ))}
  </div>
);
let appRoot = document.getElementById('app');
ReactDOM.render(templatePractice, appRoot);
