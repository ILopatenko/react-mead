class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>INDECISION APP</h1>
        <h1>Put your life in the hands of computer.</h1>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What shoul I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return <div>THIS IS A TEXT FROM OPTIONS COMPONENT!!!</div>;
  }
}

class AddOption extends React.Component {
  render() {
    return <div>THIS IS A TEXT FROM ADDOPTION COMPONENT!!!</div>;
  }
}

const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
);
ReactDOM.render(jsx, document.getElementById('app'));
