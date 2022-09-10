/*'use strict';

const e = React.createElement;


class Cola extends React.Component {
    constructor(props) {
      super(props);
      this.state = {songs: []};
    this.bringData = this.bringData.bind(this);
        
    }
    
    bringData() {  
        
        var lista = [];
        fetch('http://52.39.127.106:3000/commands?command=queue')
        .then(response => response.json())
        .then(data => {
            if(data.resultado=="No hay nada en la lista de reproducción"){
                //console.log(data);
                lista.push(data.resultado);
            }
        }
        );
        this.state.songs = lista;
        console.log(this.state.songs);
        console.log(lista);
        
    }
    
    render() {
       return(
            <div onLoad={this.bringData()} class="lista">
                <ul>{
                this.state.songs.map((song) =>{
                    console.log("song",song);
                    return(<li>{song}</li>)
                    })}
                </ul>
            </div>
        );
      }
  }*/
function Cola() {
    const [songs, setSongs] = React.useState("");
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [refresh, setRefresh] = React.useState(false);
    var lista = [];
    React.useEffect(() => {
        setLoading(true);
        fetch('http://52.39.127.106:3000/commands?command=queue')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.resultado=="No hay nada en la lista de reproducción"){
                
            }
            else{
                setSongs(data.resultado);
            }
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        });
    }, [refresh]);
   
    lista =  songs.split("]");
    if (loading) return <div className="spinner-border text-light spinner_cola" role="status" style={{width:'20px',height:'20px'}}>
    <span className="sr-only"></span>
  </div>;

    if (lista[0] ==""){
        return(
            <div className="lista">
                <ul>
                    <li>No hay nada en la cola</li>
                </ul>
            </div>
        );
    }
    if (error) return <p>Hubo un error</p>;
    return (
        
        <div className="lista">
            <ul>{
            lista.map((song) =>{
                return(
                    <div key={song}>
                        <li >{song}</li>
                        <br></br>
                    </div>
                )
                })}
            </ul>
        </div>
    );
}
const domContainer = document.querySelector('#lista_canciones');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Cola))