const desc = 'I just learned how to create a React node and render it into Dom.';
const myTitleId = 'main-title';
const name = 'HMT';

const header = (
  <header>
  {/* This is acomment */}
    <h1 id={ myTitleId }>{ name }'s first React element</h1>
    <p calssName="main-desc">{ desc }</p>
    <input value={ 10 * 20 } />
  </header>
);

ReactDOM.render(
  header,
  document.getElementById('root')
);
