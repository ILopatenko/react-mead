'use strict';

console.log('App.js is running ...');
var app = {
  title: 'Indecision app',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};
var deleteOptions = function deleteOptions() {
  app.options = [];
  renderApp();
};
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};
var renderApp = function renderApp() {
  var template = React.createElement(
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
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options: ' : 'No any options'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (eachOption, index) {
        return React.createElement(
          'li',
          { key: index },
          eachOption
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add an option'
      ),
      React.createElement(
        'button',
        { onClick: deleteOptions },
        'Delete all the options'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};
var appRoot = document.getElementById('app');
renderApp();
