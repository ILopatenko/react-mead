console.log('App.js is running ...');

//JSX - JavaScript XML
const template = (
  <div>
    <h1>Welcome to Indecision APP</h1>
    <p>There is my test project for REACT course by Andrew Mead</p>
    <ol>
      <li>Item #1</li>
      <li>Item #2</li>
      <li>Item #3</li>
      <li>Item #4</li>
      <li>Item #5</li>
    </ol>
  </div>
);

const templateTwo = (
  <div>
    <h1>Iurii Lopatenko</h1>
    <p>Age: 34</p>
    <p>Location: Los Angeles</p>
  </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
