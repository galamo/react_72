import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"

interface IRoute {
  path: string
  element: any,
  linkText: string,
  invisible?: boolean
}
const routes: Array<IRoute> = [
  { path: "/A", element: <AComponent />, linkText: "Component A" },
  { path: "/B", element: <BComponent />, linkText: "Component B" },
  { path: "/C", element: <CComponent />, linkText: "Component C" },
  { path: "/", element: <DefaultComponent />, linkText: "HomePage", invisible: true }
]

function App() {
  return (
    <Router>
      <div className="App" style={{ background: "red" }}>
        {routes.filter((route: IRoute) => !route.invisible).map((route: IRoute) =>
          <Link to={route.path}>{route.linkText}</Link>)}
      </div>
      <Routes>
        {routes.map((route: IRoute) => <Route path={route.path} element={route.element} />)}
      </Routes>
    </Router>
  );
}

function AComponent() { return <h1 style={{ background: "blue" }}> A component!!!! </h1> }
function BComponent() { return <h1 style={{ background: "blue" }}> B component!!!! </h1> }
function CComponent() { return <h1 style={{ background: "blue" }}> C component!!!! </h1> }
function DefaultComponent() { return <h1 style={{ background: "blue" }}> DefaultComponent component!!!! </h1> }


export default App;
