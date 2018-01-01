import * as view from './template.html';

const init = () => {
  console.log(view);
  document.getElementById('container').innerHTML = view;
};

export default init;

