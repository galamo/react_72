import React, { createContext, useReducer, useState } from 'react';
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
import { SettingsPage } from './components/pages/settings';
import { TZComponent } from './components/ui-components/timezone';
import { Provider, useSelector } from "react-redux"
import { store } from './store';
import { ACTIONS } from './store/actions';
import AppModal from './components/pages/appModal';


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
  { path: "/settings", element: <SettingsPage />, linkText: "Settings", invisible: false },
  { path: "*", element: <NotFound />, linkText: "", invisible: true }
]

interface IGlobalState {
  userProfile: IUser,
  timezone: string,
  dispatch?: Function
}
interface IUser {
  userName: string
}
const initialState: IGlobalState = { userProfile: { userName: "Gal Amouyal" }, timezone: "local" };
export const GlobalState = createContext<IGlobalState>(initialState)



const reducer = (state: IGlobalState, action: { type: string, payload?: any }) => {
  console.log(state)
  switch (action.type) {
    case ACTIONS.USER_PROFILE.UPDATE_USER: {
      return { ...state, userProfile: { userName: action.payload } }
    }
    case ACTIONS.TIMEZONE.SET_TIMEZONE: {
      return { ...state, timezone: action.payload }
    }
    default:
      return state
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const reduxState: any = useSelector(state => state)
  console.log(state, "global state!!!")
  return (
    <GlobalState.Provider value={{ dispatch, userProfile: state.userProfile, timezone: state.timezone }}>
      <Router>
        <div className="App" style={{ background: "rgba(255,151,120,0.5)" }}>
          {routes.filter((route: IRoute) => !route.invisible).map((route: IRoute) =>
            <span className={css.route}><Link to={route.path}>{route.linkText}</Link></span>)}
          <h2> {reduxState?.userName} </h2>
          <h2> <TZComponent timezone={reduxState.timezone} datetime={new Date().toString()} /> </h2>
        </div>

        <Routes>
          {routes.map((route: IRoute) => <Route path={route.path} element={route.element} />)}
        </Routes>
      </Router>
      <AppModal />
    </GlobalState.Provider>
  );
}



export default App;
