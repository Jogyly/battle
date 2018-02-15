import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import im from 'f/hero.png';

class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: 3,
        };
    }
}

class Game extends React.Component {
    render() {
        return (
            <div id="game">
                <div id="hero">
                    <div><img src={"http://pngimg.com/uploads/armour/armour_PNG41.png"} width={150} alt="hero"/></div>
                    Suka

                </div>
                <div id="evil">
                    Hello
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);