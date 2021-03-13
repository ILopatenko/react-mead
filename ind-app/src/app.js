console.log('App.js is running ...');
const app = {
  title: 'Indecision app',
  subtitle: 'Put your life in the hands of a computer',
  options: [],
};
const deleteOptions = () => {
  app.options = [];
  renderApp();
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
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option'></input>
        <button>Add an option</button>
        <button onClick={deleteOptions}>Delete all the options</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
const appRoot = document.getElementById('app');
renderApp();
