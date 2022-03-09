# React Lesson

## Install react create app
`npm i create-react-app -g`

### create-react-app
1. create project
2. run project
3. build project

#### Create project
`npx create-react-app <AppName>`

-  adding typescript to existing project

#### Create project with Typescript
`npx create-react-app <AppName> --template typescript`
npx create-react-app pako --template typescript

### Using Libs/files in react
1. Install your lib
2. import your code


# Ex 1:
1. create react application
2. run the project
3. change the logo to your desired

# Ex 2: 
1. Create component which recieve image url, height, width
2. the Component will return the requested image OR the default image with the defaule size 
https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg


# Homework
Create A Product Component
1. Name h1
2. Price Span
3. Image - product image
4. category - h3 



# State
1. object
2. fully controlled by component
3. similiar to props BUT we can change it, props are readonly
4. reflects the application status/state/UI


# EX 3:
1. Create Increase decrease functionality to our Header component 


# Homework 16-02
1. Create Products Table View
2. Support delete row from product view
3. Advanced: Create Product Search Input



# EX 4
1. Try to seperate the Search input to another component
2. add DDL with Name,Category, price filtering 



# Homework
1. Create new react application
2. Add Form for creating your vacations album
3. Form will contain, vacation date, image, short description
4. Show all the images with the details in the main page + delete option



# Lifecycle 
1. Mounted
2. Updated
3. Unmounted


# useEffect
1. callback
2. deps

# EX useEffect
1. When search text is longer than 5 characters - pop up a alert - too long!
2. useEffect
3. dep = searchValue


# EX 2 useeffect
- api: https://newsapi.org/v2/top-headlines?country=il&apiKey=c4c1e614e6017
- create 3 buttons us, il ,uk
- show a preffered key from each article

# Homework
1. Create A Search Form by: https://newsapi.org/docs/endpoints/everything
- q - query search string
- from - date in specific format
- to - date in specific format 
- sort by - DDL  relevancy, popularity, publishedAt
GET https://newsapi.org/v2/everything?q=apple&from=2022-02-26&to=2022-02-26&sortBy=popularity&apiKey=API_KEY


# Date Input
1. native input
2. date picker from react bootstrap
3. range picker from react bootstrap / material
4. Take the relevant dates with the requested FORMAT - YYYY-MM-DD




# React router Dom
 - https://v5.reactrouter.com/web/guides/quick-start
 - `npm i react-router-dom --save @types/react-router-dom --save-dev`
 - Add your own Route into the application


 # Homework 2-3-2022
 1. Create new Route - Top headlines and Bring Top headlines sources with the following api
 - GET https://newsapi.org/v2/top-headlines/sources?apiKey=API_KEY
 2. Show the sources with all the patermetes ( country )
 3. country should be clickable link 
 4. country page will use the hook: useParams to fetch the country alpha 2 code
 5. use useEffect to fetch infromation about the relevant country by using - Countries Api 
 - https://restcountries.com/



# Homework 6-3-2022
1. Navigate from Topheadlines to country component - programatically! no Link component
2. When user arrived to NotFound page, Naviage top Tope headlines automatically after 5 sec
3. Convert NewsImage to Class component ( DONT USE IT - Only practice)


# React Current State
1. function components
2. state
3. props
4. Hooks - core( useState, useEffect - generate lifecycle: mount, update, unmount
 , useRef )
 5. customHook 
 6. class component - lifecycle 
 7. class - componentDidmount, didUpdate, didCatch, 



 # Ex useContext 
 1. Add theme functionality to your application 
 2. in the root - app component add dark/light buttons
 3. clicking on dark button will change the badge color to black ( page - topHeadlines)


 # HomeWork 
 1. Ex useContext from above.
 2. Support changing the userName from the decendant component (same like implemented at Father)
 