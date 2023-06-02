import React from "react";
import Header from "./components/header";
import Home from "./components/home/Home";
import {Route, Routes} from "react-router-dom";
import Basket from "./components/basket";
import Uncertain from "./components/uncertain";
import Create from "./components/create";


export const SearchContext = React.createContext();

function App() {
    const [search, setSearch] = React.useState('')
    return (
        <div className="App">
            <SearchContext.Provider value={{search, setSearch}}>
                <div className="container">
                    <Header/>
                    <Routes>
                        <Route path={`/`} element={<Home/>}/>
                        <Route path={`/basket`} element={<Basket/>}/>
                        <Route path={`/create`} element={<Create/>}/>
                        <Route path="*" element={<Uncertain/>}/>
                    </Routes>
                </div>
            </SearchContext.Provider>
        </div>
    );
}

export default App;
