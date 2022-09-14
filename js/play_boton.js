'use strict';

const e = React.createElement;
/*

class PlayButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      if(this.state){
        this.setState({ liked: false })
        fetch('http://52.39.127.106:3000/commands?command=pause').then(response => response.json()).then(data => { 
        });
      }else{
        this.setState({ liked: true })
        fetch('http://52.39.127.106:3000/commands?command=play').then(response => response.json()).then(data => { 
        });
      }
  }
  
    render() {
      if (this.state.liked) {
       return(
       <button className="boton_controles" onClick={this.handleClick()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
</svg>
        </button>
        );
      }
  
      return (
        <button className="boton_controles" onClick={this.handleClick()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pause-fill" viewBox="0 0 16 16">
  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
</svg>
        </button>
      );
    }
  } */

function PlayButton(){
    const [like, setLike] = React.useState(true);
    const handleSubmit = () => {
      if(like){
        setLike(false);
        fetch('http://52.39.127.106:3000/commands?command=pause').then(response => response.json()).then(data => { 
        });
      }else{
        setLike(true);
        fetch('http://52.39.127.106:3000/commands?command=play').then(response => response.json()).then(data => { 
        });
      }
    }


    if (like==false)
    {
      return(
        <button className="boton_controles" onClick={handleSubmit}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
</svg>
        </button>
      );
    }
    return(
        <button onClick={handleSubmit} className="boton_controles">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pause-fill" viewBox="0 0 16 16">
  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
</svg>

        </button>
    );

}
const domContainer = document.querySelector('#boton_play_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(PlayButton))