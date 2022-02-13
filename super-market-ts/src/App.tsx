import React, { Component, ReactElement } from 'react';
import logo from './logo.svg';
import './App.css';
import { JsxElement } from 'typescript';

const dateTime = new Date().toLocaleDateString()
const headerText = <div> <h1> Mini Super {dateTime} </h1> </div>
const arrayOfProducts: Array<any> = [<h1> Milk </h1>, <h1> Potatos </h1>]

function Products() {
  return <div>
    {arrayOfProducts.map((header: ReactElement) => {
      return <div style={{ color: "red" }}>{header} {Math.ceil(Math.random() * 10)}$</div>
    })}
  </div>
}

function MainSuperHeader() {
  const dateTime = new Date().toLocaleDateString()
  return <div> <h1> Mini Super {dateTime} </h1> </div>
}

interface ISuperHeaderProps {
  headerText: string
}

function SuperHeader(props: ISuperHeaderProps): any | undefined {
  const { headerText } = props
  const currentHeader = headerText || "Default_Mssing_Header"
  const dateTime = new Date().toLocaleDateString()
  return <div> <h1 style={{ color: "green" }}> {currentHeader} {dateTime} </h1> </div>
}

function App() {
  return (
    <div className="App">
      {/* <MainSuperHeader /> */}
      <SuperHeader headerText='Mini Super' />
      <SuperHeader headerText='Products list' />
      <Products />
    </div >
  );
}

export default App;
