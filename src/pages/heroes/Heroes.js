import React from 'react';
import axios from 'axios';
import './Heroes.module.scss';
import styles from "../scoreboard/Scoreboard.module.css";
import classNames from 'classnames';
export class Heroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: []
    }
  }
componentDidMount() {
    this.getHeroes();
    // axios.get('http://eastflag.co.kr:8000/api/heroes')
    //     .then(res => console.log(res));
}

async getHeroes() {
   const res = await axios.get('http://eastflag.co.kr:8000/api/heroes');
   console.log(res);
   this.setState({heroes : res.data});
}

  render() {
    return (
        <div className="row">
            {this.state.heroes.map(hero => (
                <div className="col-6 col-sm-4 col-md-3 p-1 p-sm-2 p-md-3" key={hero.hero_id}>
                    <div className="card">
                        <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'}
                             style={{width: '100%'}} alt={hero.name}></img>
                        <div className="card-body">
                            <h5 className="card-title">{hero.name}</h5>
                            <p className="card-text">email: {hero.email}</p>
                            <p className="card-text">sex: {hero.sex}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
  }
}

