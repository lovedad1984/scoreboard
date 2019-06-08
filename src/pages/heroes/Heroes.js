import React from 'react';
import axios from 'axios';
import './Heroes.module.scss';
import styles from "../scoreboard/Scoreboard.module.css";
import classNames from 'classnames';
import Pagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.css';
import {Route, Switch} from "react-router-dom";


export class Heroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            pageSize: 10,
            totalCount: 1321,
            currentPage: 1,
            heroes: []
        }
    }

componentDidMount() {
    this.getHeroes();
    // axios.get('http://eastflag.co.kr:8000/api/heroes')
    //     .then(res => console.log(res));
}

async getHeroes() {
   let start_index = (this.state.currentPage - 1) * this.state.pageSize;
   const res = await axios.get(`http://eastflag.co.kr:8000/api/paged_heroes?start_index=${start_index}&page_size=${this.state.pageSize}`);
   console.log(res);
   this.setState({heroes : res.data.data, totalCount: res.data.total});
}

    render() {
        return (
            <>
                <Switch>
                    <Route path="/heroes/:hero_id" component="{Hero}"></Route>
                </Switch>
                <div className="row">
                    {this.state.heroes.map(hero => (
                        <div className="col-6 col-sm-4 col-md-3 p-1 p-sm-2 p-md-3" key={hero.hero_id}>
                            <div className="card" onClick={() => this.gotoHero(hero.hero_id)}>
                                <img
                                    src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'}
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
                <Pagination total={this.state.totalCount} current={this.state.currentPage}
                            pageSize={this.state.pageSize} onChange={this.handleChange} className="d-flex justify-content-center" />
            </>
        );
    }
    handleChange = (page, pageSize) => {
        console.log(page, pageSize);
        this.setState({currentPage: page})
        this.getHeroes();
    }

    gotoHero = (hero) => {
      this.props.history.push(`/heroes/${hero_id}`);
    }
}



