const app = {
  title: 'Indecision app',
  subtitle: 'Put your life in the hands of a computer',
  options: [],
};
const deleteOptions = () => {
  app.options = [];
  renderApp();
};
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const newOption = app.options[randomNum];
  alert(newOption);
};
const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};
const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>
        {app.options.length > 0 ? 'Here are your options: ' : 'No any options'}
      </p>
      <ol>
        {app.options.map((eachOption, index) => (
          <li key={index}>{eachOption}</li>
        ))}
      </ol>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={deleteOptions}>Delete all the options</button>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option'></input>
        <button>Add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
const appRoot = document.getElementById('app');
renderApp();
