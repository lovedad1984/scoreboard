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
        <ul className={styles["img-box"]}>
          {this.state.heroes.map(hero => (
            <li key={hero.hero_id} className="row align-items-center m-0">
            <div className="col-1 py-2">
            <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'}
                 alt={hero.name} className="img-fluid rounded-circle"
                style={{width:'100%'}}
            />
            </div>
            <span className="col">{hero.name}</span>
            </li>
          ))}
        </ul>

    );
  }
}

