import React from "react";
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from "./components/header/Header";
import News from "./pages/news/News";
import About from "./pages/about/About";
import Search from "./pages/search/Search";
import TopRated from "./pages/toprated/TopRated";
import Serie from "./pages/serie/Serie";

function App(props) {
  return (

    <div className="App">

      <BrowserRouter>
        <Header />
      
        <Switch>
          
          <Route exact path='/' component={News} />
          <Route path='/news' component={News} />
          <Route path='/toprated' component={TopRated} />
          <Route path='/search' component={Search} />
          <Route path='/about' component={About} />
          <Route path='/serie/:serieId' component={Serie} />

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
