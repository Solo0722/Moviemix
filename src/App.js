import { Button } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.less";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GlobalProvider from "./context/context";
import {
  About,
  AllMovies,
  Auth,
  Favorites,
  Home,
  MovieDetails,
  PersonDetails,
  Search,
  Watchlist,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Navbar />
        <RoutesContainer>
          <Routes>
            <Route path="/*" exact element={<Home />} />
            <Route path="/movies/:movieId" exact element={<MovieDetails />} />
            <Route path="/people/:personId" exact element={<PersonDetails />} />
            <Route path="/movies" exact element={<AllMovies />} />
            <Route path="/search" exact element={<Search />} />
          </Routes>
        </RoutesContainer>
        <Footer />
      </GlobalProvider>
    </BrowserRouter>
  );
}

const RoutesContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
`;

export default App;
