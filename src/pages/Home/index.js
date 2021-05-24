import React from "react";
import axios from "axios";

import { Section } from "./styled";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      image: [],
      isLoading: true,
    };
  }

  async componentDidMount() {
    const urls = await axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=8")
      .then((response) => response.data.results);

    let promiseurl = urls.map((u) => fetch(u.url).then((res) => res.json()));
    const data = await Promise.all(promiseurl).then((res) => res);

    const title = [];
    const img = [];

    data.map((res) => {
      title.push(res.forms[0].name);
      img.push(res.sprites.other.dream_world.front_default);
    });

    this.setState({
      name: title,
      image: img,
      isLoading: true,
    });
  }

  render() {
    const name = this.state.name;

    const image = this.state.image;

    return (
      <Section>
        <div className="search">
          <h1>FIND POKEMON</h1>
          <input type="text" />
        </div>
        <div className="cards">
          {name.map((n, id) => (
            <div key={n} className="card">
              <img src={image[id]} alt="Pokemon name" />
              <h2> {n.toUpperCase()}</h2>
            </div>
          ))}
        </div>
      </Section>
    );
  }
}
