'use strict';

var isVisible = false;
var changeIsVisible = function changeIsVisible() {
  isVisible = !isVisible;
  appRender();
};

var appRoot = document.getElementById('app');

var appRender = function appRender() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibiliti Toggle'
    ),
    React.createElement(
      'button',
      { onClick: changeIsVisible },
      isVisible ? 'Hide details' : 'Show details'
    ),
    isVisible && React.createElement(
      'p',
      null,
      'There are some details ...'
    )
  );
  ReactDOM.render(template, appRoot);
};
appRender();
