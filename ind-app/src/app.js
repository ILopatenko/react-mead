class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = '!Put your life in the hands of computer!';
    const options = [
      'thing number one',
      'thing number two',
      'thing number three',
      'thing number four',
      'thing number five',
    ];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title.toUpperCase()}</h1>
        <h2>{this.props.subtitle}</h2>
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
    return (
      <div>
        Here are all the your options:<p>{this.props.options.length}</p>
        {this.props.options.map((option, index) => (
          <Option key={index} id={index} optionText={option} />
        ))}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <h3>Option #{this.props.id + 1}:</h3> {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return <div>THIS IS A TEXT FROM ADDOPTION COMPONENT!!!</div>;
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
