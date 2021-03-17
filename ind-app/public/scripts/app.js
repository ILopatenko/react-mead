'use strict';

var User = function User(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'Name: ',
      props.name
    ),
    React.createElement(
      'p',
      null,
      'Age: ',
      props.age
    )
  );
};

ReactDOM.render(React.createElement(User, { name: 'IURII', age: '34' }), document.getElementById('app'));
