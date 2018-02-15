import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: h,
        };
    }
}

class Game extends React.Component {
    render() {
        return (
            <div id="game">
                <div id="hero">
                    Hello
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