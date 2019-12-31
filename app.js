const title = 'My first React Element!';
const desc = 'I just learned how to create a React node and render it into Dom.';

const header = (
  <header>
    <h1>{ title }</h1>
    <p calssName="main-desc">{ desc }</p>
  </header>
);

ReactDOM.render(
  header,
  document.getElementById('root')
);
