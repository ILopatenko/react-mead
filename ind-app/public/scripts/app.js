'use strict';

//016 - Events and Attributes
var count = 0;

var addOne = function addOne() {
  console.log('addOne() is working ...');
  count += 1;
  console.log('Current value of count is ' + count);
  renderCounter();
};

var minusOne = function minusOne() {
  console.log('minusOne() is working ...');
  count -= 1;
  console.log('Current value of count is ' + count);
  renderCounter();
};

var reset = function reset() {
  console.log('reset() is working ...');
  count = 0;
  console.log('Current value of count is ' + count);
  renderCounter();
};

var appRoot = document.getElementById('app');

var renderCounter = function renderCounter() {
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
  ReactDOM.render(template016, appRoot);
};

renderCounter();
