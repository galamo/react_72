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

interface IImageProps {
  imageUrl?: string,
  height?: number,
  width?: number
}

function ImageComponent(props: IImageProps) {
  const { imageUrl, height, width } = props;
  const defaultImage: string = "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"
  const image = imageUrl || defaultImage
  return <img src={image} height={height || 150} width={width || 150} />
}

function App() {
  return (
    <div className="App">
      {/* <MainSuperHeader /> */}
      <SuperHeader headerText='Mini Super' />
      <SuperHeader headerText='Products list' />
      <ImageComponent imageUrl='https://i.pinimg.com/236x/ca/6d/0f/ca6d0f9248915942ebe0d63038756fad.jpg' height={400} width={500} />
      <ImageComponent />
      <Products />
    </div >
  );
}

export default App;
