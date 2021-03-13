let isVisible = false;
const changeIsVisible = () => {
  isVisible = !isVisible;
  appRender();
};

const appRoot = document.getElementById('app');

const appRender = () => {
  const template = (
    <div>
      <h1>Visibiliti Toggle</h1>
      <button onClick={changeIsVisible}>
        {isVisible ? 'Hide details' : 'Show details'}
      </button>
      {isVisible && <p>There are some details ...</p>}
    </div>
  );
  ReactDOM.render(template, appRoot);
};
appRender();
