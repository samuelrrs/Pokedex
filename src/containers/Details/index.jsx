import { Container } from "@material-ui/core";
import React, { useState } from "react";
import Header from "../../components/Header/index";
import SearchIcon from "@material-ui/icons/Search";
import Logo from "./../../assets/images/pokedex.png";
import HotImg from "./../../assets/images/hotimg.jpg";
import useStyles from "./styles";

import api from "../../services/api";

const Home = () => {
  const styles = useStyles();
  const [poke, setPoke] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.get(`pokemon/${poke}`);

    console.log(response.data);
  }

  function handleInputChange(e) {
    setPoke(e.target.value);
  }

  return (
    <div className={styles.principal}>
      <Header>
        <Container>
          <img src={Logo} alt="logo" className={styles.logo} />
        </Container>
        <Container className={styles.busca}>
          <SearchIcon />
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Faça sua busca..."
              value={poke}
              onChange={handleInputChange}
            />
          </form>
        </Container>

        <Container className={styles.links}></Container>
      </Header>
      <Container className={styles.principal}>
        <img src={HotImg} alt="logo" className={styles.hotimg} />
      </Container>
    </div>
  );
};

export default Home;
