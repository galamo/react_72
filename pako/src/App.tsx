import React from 'react';
import logo from './logo.svg';
import './App.css';
import css from "./app.module.css"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import { LoginPage } from './components/pages/login';
import { RegistrationPage } from './components/pages/register';
import { CountryPage } from './components/pages/country';
import { NewsPage } from './components/pages/news';
import { NewsImage } from './components/pages/news-image';
import { TopHeadlinesPage } from './components/pages/top-headlines';
import { NotFound } from './components/pages/notFound';
import { ParentProblem } from './components/pages/__Global_State_Problem/problem';
import { ParentSolution } from './components/pages/__Global_State_Problem/solution';

interface IRoute {
  path: string
  element: any,
  linkText: string,
  invisible?: boolean
}
const routes: Array<IRoute> = [
  { path: "/login", element: <LoginPage />, linkText: "Login" },
  { path: "/register", element: <RegistrationPage />, linkText: "Register" },
  { path: "/", element: <NewsPage />, linkText: "News" },
  { path: "/top-headlines", element: <TopHeadlinesPage />, linkText: "Top Headlines " },
  { path: "/country/:country", element: <CountryPage />, linkText: "", invisible: true },
  { path: "/news-image/:image", element: <NewsImage />, linkText: "", invisible: true },
  { path: "/problem", element: <ParentProblem />, linkText: "problem", invisible: false },
  { path: "/solution", element: <ParentSolution />, linkText: "solution", invisible: false },
  { path: "*", element: <NotFound />, linkText: "", invisible: true },



]

function App() {
  return (
    <Router>
      <div className="App" style={{ background: "rgba(255,151,120,0.5)" }}>
        {routes.filter((route: IRoute) => !route.invisible).map((route: IRoute) =>
          <span className={css.route}><Link to={route.path}>{route.linkText}</Link></span>)}
      </div>
      <Routes>
        {routes.map((route: IRoute) => <Route path={route.path} element={route.element} />)}
      </Routes>
    </Router>
  );
}



export default App;
