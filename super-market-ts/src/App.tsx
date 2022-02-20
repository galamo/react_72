import React, { Component, ReactElement, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { FcGrid } from "react-icons/fc"
import { CgCardSpades } from "react-icons/cg"
import { AiFillDelete } from "react-icons/ai"
import css from "./app.module.css"


const dateTime = new Date().toLocaleDateString()
const headerText = <div> <h1> Mini Super {dateTime} </h1> </div>
// const arrayOfProducts: Array<any> = [<h1> Milk </h1>, <h1> Potatos </h1>]
const data = [{
  "id": "123324",
  "name": "hero Product",
  "detail": "Drinks",
  "price": "3000",
  "hero": "OMG This just came out today!",
  "image": "http://placehold.it/940x300/999/CCC"
}, {
  "id": "123333324",
  "name": "Milk",
  "detail": "Drinks",
  "price": "5",
  "info": "This is the latest and greatest product from Derp corp.",
  "image": "http://placehold.it/300x300/999/CCC"
}, {
  "id": "12332466767",
  "name": "Product 2",
  "detail": "Drinks",
  "price": "99",
  "offer": "BOGOF",
  "image": ""
}, {
  "id": "19999",
  "name": "Product 3",
  "detail": "v",
  "price": "99",
  "image": "http://placehold.it/300x300/999/CCC"
}, {
  "id": "19996656",
  "name": "Product 4",
  "detail": "s",
  "price": "99",
  "offer": "No srsly GTFO",
  "image": "http://placehold.it/300x300/999/CCC"
}, {
  "id": "199955555",
  "name": "Product 5",
  "detail": "Drinks",
  "price": "99",
  "image": "http://placehold.it/300x300/999/CCC"
}, {
  "id": "12221111",
  "name": "Product 6",
  "detail": "Drinks",
  "price": "99",
  "info": "This is the latest and greatest product from Derp corp.",
  "offer": "info with offer",
  "image": "http://placehold.it/300x300/999/CCC"
}]


function AddProduct(props: { addProduct: Function }) {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")

  return <div className='mb-4'>
    <div className="input-group input-group-sm mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
      </div>
      <input type="text" onChange={(e) => { setName(e.target.value) }} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
    </div>

    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-sm">Category</span>
      </div>
      <input type="text" onChange={(e) => { setCategory(e.target.value) }} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
    </div>

    <div className="input-group input-group-sm">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-sm">Price</span>
      </div>
      <input type="text" onChange={(e) => { setPrice(e.target.value) }} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
    </div>
    <div className="input-group input-group-sm">
      <button className='btn btn-success' onClick={() => {
        props.addProduct({ name, price, detail: category, id: `${name}_${Math.ceil(Math.random() * 1000)}` })
      }} > add</button>
    </div>

  </div>
}

function SearchBy(props: { onSearchByChanage: Function }) {
  const { onSearchByChanage } = props;
  return (
    <select onChange={(e) => { onSearchByChanage(e.target.value) }} className={css.selectContainer} id="inputGroupSelect02">
      <option value="name" selected>Name</option>
      <option value="price">Price</option>
      <option value="detail">Category</option>
    </select>
  )
}

function Search(props: { onInputChange: Function }) {
  return (
    <input onChange={({ target }) => {
      // set your state to contain the target.value
      const { value } = target;
      props.onInputChange(value)
    }}
      type="text"
      className="form-control"
      placeholder="search"
      aria-label="Username"
      aria-describedby="basic-addon1" />
  )
}

function ViewButtons(props: { setIsTableView: Function }) {
  const { setIsTableView } = props
  return <>
    <button className='btn btn-success' onClick={() => { setIsTableView(true) }}><FcGrid /> </button>
    <button className='btn btn-success' onClick={() => { setIsTableView(false) }}><CgCardSpades /> </button>
  </>
}

function ProductsPage() {
  const initialState: boolean = false
  const [isTableView, setIsTableView] = useState(initialState)
  const [productsGlobal, setProductsGlobal] = useState(data)
  const [searchValue, setSearchValue] = useState("")
  const [searchBy, setSearchBy] = useState("")
  function _deleteCard(id: string) {
    if (!id) return;
    const newProducts = productsGlobal.filter(p => p.id !== id);
    setProductsGlobal([...newProducts])
  }

  function _filterProducts(s: string, searchBy: string, products: Array<any>) {
    if (!Array.isArray(products)) return products;
    if (!s) return products;
    const sToLower = s.toLowerCase()
    return products.filter(product => product[searchBy].toLowerCase().includes(sToLower))
  }

  const currentProducts = _filterProducts(searchValue, searchBy, productsGlobal) || productsGlobal
  return (
    <div className='container'>
      <div className="row mb-4">
        <div className={`col align-self-start ${css.searchContainer}`} >
          <div className="row">
            <div className='col-3'>
              <Search onInputChange={setSearchValue} />
            </div>
            <div className='col-3'>
              <SearchBy onSearchByChanage={setSearchBy} />
            </div>
          </div>
        </div>
        <div className={`col-1 align-self-end ${css.viewButtons}`} >
          <ViewButtons setIsTableView={setIsTableView} />
        </div>
      </div>
      <div className="row">
        <AddProduct addProduct={(productObject: any) => {
          console.log(productObject)
          setProductsGlobal([...productsGlobal, productObject])
        }} />
      </div>
      <div className="row" style={{ background: "red" }}>
        <TableView />
      </div>
    </div>
  )

  function TableView() {
    return isTableView ? <ProductsTable onDeleteFn={_deleteCard} products={currentProducts} /> : <ProductsCards onDeleteFn={_deleteCard} products={currentProducts} />
  }
}

function ProductsTable(props: { products: Array<any>, onDeleteFn: Function }) {
  // return <img src="https://www.patternfly.org/v3/pattern-library/content-views/table-view/img/table-overview.png" alt="" />
  return <div>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Category</th>
          <th scope="col">Image</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((p) => {
          return <ProductRow key={p.id} {...p}
            category={p.detail}
            imageUrl={p.image}
            onDeleteFn={props.onDeleteFn} />
        })}
      </tbody>
    </table>
  </div >
}
function ProductsCards(props: { products: Array<any>, onDeleteFn: Function }) {
  if (!Array.isArray(props.products)) return null;
  return (<div>
    {props.products.map((product) => {
      const { image, name, detail, price, id } = product
      return <Product onDeleteFn={(id: string) => { props.onDeleteFn(id) }} key={id} id={id} name={name}
        price={parseInt(price)}
        imageUrl={image}
        category={detail} />
    })}
  </div>)

}


function ProductRow(props: {
  name: string, price: number,
  imageUrl: string, category: string, id: string, onDeleteFn: Function
}) {
  const { name, price, category, imageUrl, id } = props;

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{category}</td>
      <td><ImageComponent imageUrl={imageUrl} /></td>
      <td>  <button className='btn btn-danger' onClick={() => {
        props.onDeleteFn(id)
      }}> <AiFillDelete /> </button></td>
    </tr>

  )
}




function MainSuperHeader() {
  const dateTime = new Date().toLocaleDateString()
  return <div > <h1> Mini Super {dateTime} </h1> </div>
}

interface ISuperHeaderProps {
  headerText: string
  textSizeUnitChange?: number
}



function SuperHeader(props: ISuperHeaderProps): any | undefined {
  // Hooks
  console.log("Component SuperHeader Render")
  const initialState: boolean = false;
  const initialSize: number = 35
  const [isSelected, setIsSelected] = useState(initialState)
  const [textSize, setTextSize] = useState(initialSize)

  console.log(`Component State value: ${isSelected}`)
  // setIsSelected(true) DONT DO THIS!!!!!
  const { headerText, textSizeUnitChange } = props
  const currentHeader = headerText || "Default_Mssing_Header"
  const dateTime = new Date().getTime()
  console.log(`After Date: ${dateTime}`)

  return <div style={{ cursor: "pointer" }} >
    <h1 onClick={() => {
      setIsSelected(!isSelected)
    }} style={{ color: "green", background: isSelected ? "yellow" : "white", fontSize: textSize }}> {currentHeader}
      {isSelected.toString()}</h1>
    <button onClick={() => {
      setTextSize(textSize + (textSizeUnitChange || DEFAULT_UNIT))
    }} className='btn btn-primary'>+</button>
    <button onClick={() => {
      setTextSize(textSize - (textSizeUnitChange || DEFAULT_UNIT))
    }} className='btn btn-primary'>-</button>
  </div>
}

interface IImageProps {
  imageUrl?: string,
  height?: number,
  width?: number
}

function ImageComponent(props: IImageProps) {
  const { imageUrl, height, width } = props;
  const defaultImage: string = "https://helios-i.mashable.com/imagery/articles/01eIvreZ9sXEnn1jUU6nyQM/images-93.fit_lim.size_2000x.v1628282411.jpg"
  const image = imageUrl || defaultImage
  return <img src={image} height={height || 150} width={width || 150} />
}
// interface IProductProps{}
function Product(props: {
  name: string, price: number,
  imageUrl: string, category: string, id: string, onDeleteFn: Function
}) {
  const { name, price, category, imageUrl, id } = props;

  return (
    <div style={{
      border: "solid 2px black",
      display: "inline-block", width: "400px", height: "400px"
    }}>
      <h1> {name} </h1>
      <HightPriceInPrivate price={price} />
      <h2> {category}  </h2>
      <ImageComponent imageUrl={imageUrl} />
      <div>
        <button className='btn btn-danger' onClick={() => {
          props.onDeleteFn(id)
        }}> <AiFillDelete /> </button>
      </div>
    </div>
  )

  function HightPriceInPrivate(props: { price: number }) {
    const showPrice = props.price < 1000;
    return (
      <>
        {showPrice ? <h2> $ {price}  </h2 > : <h2> In private </h2>}
      </>
    )
  }
}

const DEFAULT_UNIT: number = 2
function App() {
  const initialUnit: number = DEFAULT_UNIT
  const [unit, setUnit] = useState(initialUnit)

  return (
    <div className="App">
      <SuperHeader headerText='Mini Super' textSizeUnitChange={unit} />
      <ProductsPage />
      {false && <DontShowMe />}
    </div >
  );

  function DontShowMe() {
    return (
      <div>
        <div className=''>
          Unit <input onChange={(e) => {
            setUnit(parseInt(e.target.value));
          }} style={{ width: "100px", display: "inline-block" }} type="number" className='form-control' />
        </div>
        <SuperHeader headerText='Mini Super' textSizeUnitChange={unit} />
        <SuperHeader headerText='Products list' textSizeUnitChange={unit} />
        <h2> Hi i am the manager: </h2>
        <ImageComponent imageUrl='https://helios-i.mashable.com/imagery/articles/01eIvreZ9sXEnn1jUU6nyQM/images-93.fit_lim.size_2000x.v1628282411.jpg' height={400} width={500} />
      </div>
    )
  }
}

export default App;



// class User implements IUser { }
// interface IUser { }