//016 - Events and Attributes
let count = 0;

const addOne = () => {
  console.log('addOne() is working ...');
};
const minusOne = () => {
  console.log('minusOne() is working ...');
};
const reset = () => {
  console.log('reset() is working ...');
};

const template016 = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}> +1 </button>
    <button onClick={reset}> reset </button>
    <button onClick={minusOne}> -1 </button>
  </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template016, appRoot);
