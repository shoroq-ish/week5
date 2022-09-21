// import logo from "./logo.svg";
import "./CSS/App.css";
import Header from "./components/Header";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import Cards from "./components/Cards";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { Typography } from "@mui/material";
import "@fontsource/nunito-sans";
import Search from "./components/Search";
import Filter from "./components/Filter";
import { Box } from "@mui/material";
import Image1 from './assets/al.svg';
import Image2 from './assets/af.svg';
import Image3 from './assets/al.svg';
import Image4 from './assets/us.svg';
import Image5 from './assets/de.svg';
import Image6 from './assets/dz.svg';
import Image7 from './assets/is.svg';
import Image8 from './assets/br.svg';


function App() {
 
  return (
    <body>
      <Header/>
      <Container maxWidth="lg" >
        <div>
          <Box sx={{ display: 'flex' ,justifyContent: 'space-between', flexDirection: {md:'row', lg:'row', xl:'row', sm: 'column', xs: 'column'} ,mt: 3, mb: 3}}>
            <Search />
            <Filter />
          </Box>
        </div>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Cards countryName = "Albania" img={Image1} />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Cards countryName ="Afghanestan"  img={Image2} />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Cards countryName = "Germany" img={Image5} />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Cards countryName ="United States" img={Image3} />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Cards countryName = "United States" img={Image4} />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Cards countryName ="Algeria" img={Image6} />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Cards countryName = "Iceland" img={Image7} />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Cards countryName ="Brazil" img={Image8} />
            </Grid>
          </Grid>
        </div>
      </Container>
    </body>
  );
}

export default App;
