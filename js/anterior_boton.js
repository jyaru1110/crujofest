'use strict';

const e = React.createElement;


class AnteriorButton extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        alert('No sirve me perdonas? ):');
    }
  
    render() {
       return(
       <button className="boton_controles" onClick={this.handleSubmit}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-skip-backward-fill" viewBox="0 0 16 16">
  <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/>
</svg>
        </button>
        );
      }
  } 
const domContainer = document.querySelector('#boton_anterior_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(AnteriorButton))