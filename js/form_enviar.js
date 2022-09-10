/*'use strict';

const e = React.createElement;


class FormEnviar extends React.Component {
    constructor(props) {
      super(props);
      this.state = { loading: false, song: null };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({song: e.target.value});
    }
    handleSubmit() {
        alert('A song was submitted: ' + this.state.song);
    }
  
    render() {
       return(
            <div class="boton-input">
                <input value={this.state.value} onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>{this.state.loading=== true ? <div className="spinner-border text-light" role="status" style={{width:'20px',height:'20px'}}>
                <span className="sr-only"></span>
              </div> :  "Enviar" }</button>
            </div>
       );
      }
  } */
function FormEnviar() {
    const [loading, setLoading] = React.useState(false);
    const [song, setSong] = React.useState("");
    const handleSubmit = () => {
        setLoading(true);
        fetch('http://52.39.127.106:3000/commands?command=play&args='+song)
        .then(response => response.json())
        .then(data => {
            setLoading(false);
            window.location.reload();
        })
    }
    const handleChange = (e) => {
        setSong(e.target.value);
    }
    return(
        <div className="boton-input">
            <input value={song} onChange={handleChange}/>
            <button onClick={handleSubmit}>{loading=== true ? <div className="spinner-border text-light" role="status" style={{width:'20px',height:'20px'}}>
            <span className="sr-only"></span>
            </div> :  "Enviar" }</button>
        </div>
    );
}
const domContainer = document.querySelector('#form_enviar');
const root = ReactDOM.createRoot(domContainer);
root.render(e(FormEnviar))