import { Container } from "@material-ui/core";
import React from "react";
import Header from "../../components/Header/index";
import SearchIcon from "@material-ui/icons/Search";
import Logo from "./../../assets/images/pokedex.png";
import HotImg from "./../../assets/images/hotimg.jpg";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
const Home = () => {
  const styles = useStyles();

  return (
    <Container className={styles.principal}>
      <Header>
        <Container>
          <img src={Logo} alt="logo" className={styles.logo} />
        </Container>
        <Container className={styles.busca}>
          <SearchIcon />
          <input placeholder="Faça sua busca..." />
        </Container>

        <Container className={styles.links}>
          <Typography>Monte sua equipe</Typography>
          <Typography>Favoritos</Typography>
        </Container>
      </Header>
      <Typography>BEM VINDO TREINADOR</Typography>
      <Container className={styles.principal}>
        <img src={HotImg} alt="logo" className={styles.hotimg} />
      </Container>
    </Container>
  );
};

export default Home;
