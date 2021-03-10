console.log('App.js is running ...');

//JSX - JavaScript XML
const template = React.createElement(
  'h1',
  {
    id: 'someID',
  },
  'This is JSX from app.js'
);

let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
