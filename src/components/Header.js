import React from 'react'
import {Link} from "react-router-dom";
import {useEffect, useState} from 'react'
import axios from "axios";
import MealsList from "./MealsList";
const Header = () => {
    const [meals, setMeals] = useState([])
    const [mealName, setMealName] = useState('')
    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(res => {
                setMeals(res.data.meals)
                console.log(res.data.meals)
            })
    }, [])

    const searchName = (event) => {
        setMealName(event.target.value)
        console.log(mealName)
    }
    return (
        <header className={'header'}>
            <div className={'container-menu'}>
                <div className={'inner-menu'}>
                    <div>
                        <Link to={'/'} className={'navigation-links navigation-logo'}>TheMealDB</Link>
                    </div>
                    <div className={'inner-search'}>
                        <input type="text" className={'search-input'} onChange={searchName}/>
                        <Link to={mealName ? `/meal/search/${mealName}` : '/'}>
                            <button className={'navigation-button'}>Search</button>
                        </Link>
                    </div>
                </div>
            </div>

            <section className={'meals-section'}>
                <div className={'container'}>
                    <MealsList meals={meals}></MealsList>
                </div>
            </section>
        </header>
    )
}

export default Header