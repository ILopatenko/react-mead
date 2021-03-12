'use strict';

//016 - Events and Attributes
var count = 0;

var addOne = function addOne() {
  console.log('addOne() is working ...');
};
var minusOne = function minusOne() {
  console.log('minusOne() is working ...');
};
var reset = function reset() {
  console.log('reset() is working ...');
};

var template016 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    ' +1 '
  ),
  React.createElement(
    'button',
    { onClick: reset },
    ' reset '
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    ' -1 '
  )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template016, appRoot);
