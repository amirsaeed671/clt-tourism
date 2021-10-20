import Header from "./Components/Header/Header";
import "./App.css";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./Components/Home/Home";
import { red } from "@material-ui/core/colors";
import Footer from "./Components/Footer/Footer";
import FooterBottom from "./Components/Footer/FooterBottom";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ED4723",
    },
    secondary: {
      main: red[900],
    },
  },
});

const options = {
  method: "GET",
  url: "https://hotels-com-free.p.rapidapi.com/suggest/v1.7/json",
  params: { query: "San Francisco", locale: "en_US" },
  headers: {
    "x-rapidapi-host": "hotels-com-free.p.rapidapi.com",
    "x-rapidapi-key": "c296cc3a6bmsh99f54af2086a146p1e24eajsn5a480dda237c",
  },
};

function App() {
  const [data, setdata] = useState(null);
  useEffect(() => {
    axios
      .request(options)
      .then((res) => {
        setdata(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("this data", data);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
       
        <Header />
        <Home />
        <Footer />
        <FooterBottom />
      </BrowserRouter>
      
    </ThemeProvider>
  );
}

export default App;
