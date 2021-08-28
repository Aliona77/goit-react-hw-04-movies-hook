import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
import Spiner from "./components/Spinner/Spinner";
import routes from "./routes";
import "./App.module.css";

const HomePage = lazy(() =>
  import("./pages/HomePage.js" /*webpackChunkName: "home-page" */)
);

const MoviesPage = lazy(() =>
  import("./pages/MoviesPage.js" /*webpackChunkName: "movies-page" */)
);

const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage.js" /*webpackChunkName: "movies-details-page" */
  )
);

const NotFoundMovies = lazy(() =>
  import("./pages/NotFoundMovies.js" /*webpackChunkName: "not-found-page" */)
);

const App = () => (
  <Container>
    <AppBar />
    <Suspense fallback={<Spiner />}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.moviesPage} component={MoviesPage} />
        <Route component={NotFoundMovies} />
      </Switch>
    </Suspense>
  </Container>
);

export default App;
