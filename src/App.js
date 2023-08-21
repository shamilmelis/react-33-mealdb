import React from 'react'
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import DescrPage from "./pages/DescrPage";
import SearchPage from "./pages/SearchPage";
import IngredientPage from "./pages/IngredientPage";
function App() {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage />}/>
            <Route path={'/meal/:id'} element={<DescrPage/>}/>
            <Route path={'/meal/search/:name'} element={<SearchPage/>}/>
            <Route path={'/meal/main-ingredient/:name'} element={<IngredientPage/>}></Route>
        </Routes>
    )
}

export default App;
