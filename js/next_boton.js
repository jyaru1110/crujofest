/*'use strict';

const e = React.createElement;


class NextButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }
  
    render() {
       return(
       <button className="boton_controles" onClick={() => this.setState({ liked: false })}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-skip-forward-fill" viewBox="0 0 16 16">
  <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.753l-6.267 3.636c-.54.313-1.233-.066-1.233-.697v-2.94l-6.267 3.636C.693 12.703 0 12.324 0 11.693V4.308c0-.63.693-1.01 1.233-.696L7.5 7.248v-2.94c0-.63.693-1.01 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5z"/>
</svg>
        </button>
        );
      }
  } */

function NextButton(){
    const handleSubmit = () => {
        fetch('http://52.39.127.106:3000/commands?command=next').then(response => response.json()).then(data => {
            console.log("next");
        });
    }
    return(
        <button onClick={handleSubmit} className="boton_controles">
           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-skip-forward-fill" viewBox="0 0 16 16">
  <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.753l-6.267 3.636c-.54.313-1.233-.066-1.233-.697v-2.94l-6.267 3.636C.693 12.703 0 12.324 0 11.693V4.308c0-.63.693-1.01 1.233-.696L7.5 7.248v-2.94c0-.63.693-1.01 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5z"/>
</svg>
        </button>
        );
}
const domContainer = document.querySelector('#boton_next_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(NextButton))