'use strict';

//JSX - JavaScript XML
//012 - THEORY
var user = {
  name: 'Iurii Lopatenko',
  age: 34,
  location: 'Los Angeles, CA, USA'
};

//Ternary operator
var getLocation = user.location ? React.createElement(
  'p',
  null,
  'Location: ',
  user.location
) : undefined;

//IF
var checkUserName = function checkUserName(nameToCheck) {
  if (nameToCheck) {
    return nameToCheck;
  } else {
    return 'ANONYMOUS';
  }
};

var templateTheory = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'JSX template'
  ),
  React.createElement(
    'h2',
    null,
    checkUserName(user.name)
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation
);

//012 PRACTICE
var app = {
  title: 'Indecision App',
  subtitle: 'There is something subtitle for an APP ...',
  options: ['One', 'Two', 'Three']
};

var templatePractice = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  app.options.length > 0 ? 'Here are your options:' : 'No any options',
  app.options.map(function (element, index) {
    return React.createElement(
      'p',
      { key: index },
      'Option #',
      index + 1,
      ' is: ',
      element
    );
  })
);
var appRoot = document.getElementById('app');
ReactDOM.render(templatePractice, appRoot);
