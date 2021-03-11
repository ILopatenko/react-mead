'use strict';

console.log('App.js is running ...');

//JSX - JavaScript XML

var userName = 'Iurii Lopatenko';
var userAge = 34;
var userLocation = 'Los Angeles, CA';

var user = {
  name: 'John Doe',
  age: 41,
  location: 'Dallas, TX'
};
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'JSX template #1'
  ),
  React.createElement(
    'h2',
    null,
    userName.toUpperCase()
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    userAge + 5
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    userLocation
  ),
  React.createElement(
    'h1',
    null,
    'JSX template #2'
  ),
  React.createElement(
    'h2',
    null,
    user.name.toLowerCase()
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age * 2
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
