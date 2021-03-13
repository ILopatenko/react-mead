//016 - Events and Attributes
let count = 0;

const addOne = () => {
  console.log('addOne() is working ...');
  count += 1;
  console.log(`Current value of count is ${count}`);
  renderCounter();
};

const minusOne = () => {
  console.log('minusOne() is working ...');
  count -= 1;
  console.log(`Current value of count is ${count}`);
  renderCounter();
};

const reset = () => {
  console.log('reset() is working ...');
  count = 0;
  console.log(`Current value of count is ${count}`);
  renderCounter();
};

const appRoot = document.getElementById('app');

const renderCounter = () => {
  const template016 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}> +1 </button>
      <button onClick={reset}> reset </button>
      <button onClick={minusOne}> -1 </button>
    </div>
  );
  ReactDOM.render(template016, appRoot);
};

renderCounter();
