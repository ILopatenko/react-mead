'use strict';

console.log('App.js is running ...');

//JSX - JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Welcome to Indecision APP'
  ),
  React.createElement(
    'p',
    null,
    'There is my test project for REACT course by Andrew Mead'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item #1'
    ),
    React.createElement(
      'li',
      null,
      'Item #2'
    ),
    React.createElement(
      'li',
      null,
      'Item #3'
    ),
    React.createElement(
      'li',
      null,
      'Item #4'
    ),
    React.createElement(
      'li',
      null,
      'Item #5'
    )
  )
);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Iurii Lopatenko'
  ),
  React.createElement(
    'p',
    null,
    'Age: 34'
  ),
  React.createElement(
    'p',
    null,
    'Location: Los Angeles'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
