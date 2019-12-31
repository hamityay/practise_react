const desc = 'I just learned how to create a React node and render it into Dom.';
const myTitleId = 'main-title';
const name = 'HMT';

const header = (
  <header>
    <h1 id={ myTitleId }>{ name }'s first React element</h1>
    <p calssName="main-desc">{ desc }</p>
  </header>
);

ReactDOM.render(
  header,
  document.getElementById('root')
);
