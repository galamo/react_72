import React, { Component, ReactElement, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { JsxElement } from 'typescript';

const dateTime = new Date().toLocaleDateString()
const headerText = <div> <h1> Mini Super {dateTime} </h1> </div>
// const arrayOfProducts: Array<any> = [<h1> Milk </h1>, <h1> Potatos </h1>]
const products = [{
  "name": "hero Product",
  "detail": "Lorem ipsum dolor sit amet",
  "price": "100",
  "hero": "OMG This just came out today!",
  "image": "http://placehold.it/940x300/999/CCC"
}, {
  "name": "Milk",
  "detail": "Drinks",
  "price": "5",
  "info": "This is the latest and greatest product from Derp corp.",
  "image": "http://placehold.it/300x300/999/CCC"
}, {
  "name": "Product 2",
  "detail": "Lorem ipsum dolor sit amet",
  "price": "99",
  "offer": "BOGOF",
  "image": ""
}, {
  "name": "Product 3",
  "detail": "Lorem ipsum dolor sit amet",
  "price": "99",
  "image": "http://placehold.it/300x300/999/CCC"
}, {
  "name": "Product 4",
  "detail": "Lorem ipsum dolor sit amet",
  "price": "99",
  "offer": "No srsly GTFO",
  "image": "http://placehold.it/300x300/999/CCC"
}, {
  "name": "Product 5",
  "detail": "Lorem ipsum dolor sit amet",
  "price": "99",
  "image": "http://placehold.it/300x300/999/CCC"
}, {
  "name": "Product 6",
  "detail": "Lorem ipsum dolor sit amet",
  "price": "99",
  "info": "This is the latest and greatest product from Derp corp.",
  "offer": "info with offer",
  "image": "http://placehold.it/300x300/999/CCC"
}]

function Products() {
  return <div>
    {products.map((product) => {
      const { image, name, detail, price } = product
      return <Product name={name}
        price={parseInt(price)}
        imageUrl={image}
        category={detail} />
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
  // Hooks
  console.log("Component SuperHeader Render")
  const initialState: boolean = false;
  const [isSelected, setIsSelected] = useState(initialState)
  console.log(`Component State value: ${isSelected}`)
  // setIsSelected(true) DONT DO THIS!!!!!
  const { headerText } = props
  const currentHeader = headerText || "Default_Mssing_Header"
  const dateTime = new Date().getTime()
  console.log(`After Date: ${dateTime}`)

  return <div style={{ cursor: "pointer" }} onClick={() => {
    setIsSelected(!isSelected)
  }}> <h1 style={{ color: "green", background: isSelected ? "yellow" : "white " }}> {currentHeader} {dateTime} {isSelected.toString()}</h1> </div>
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
// interface IProductProps{}
function Product(props: {
  name: string, price: number,
  imageUrl: string, category: string
}) {
  const { name, price, category, imageUrl } = props;
  return (
    <div style={{
      border: "solid 2px black",
      display: "inline-block", width: "400px"
    }}>
      <h1> {name} </h1>
      <h2> $ {price}  </h2>
      <h2> {category}  </h2>
      <ImageComponent imageUrl={imageUrl} />
    </div>
  )

}

function App() {
  return (
    <div className="App">
      {/* <MainSuperHeader /> */}
      <SuperHeader headerText='Mini Super' />
      <SuperHeader headerText='Products list' />
      <h2> Hi i am the manager: </h2>
      <ImageComponent imageUrl='https://i.pinimg.com/236x/ca/6d/0f/ca6d0f9248915942ebe0d63038756fad.jpg' height={400} width={500} />
      <Products />
    </div >
  );
}

export default App;



// class User implements IUser { }
// interface IUser { }