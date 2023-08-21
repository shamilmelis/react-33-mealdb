import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import axios from "axios";
import MealsList from "../components/MealsList";
import Footer from "../components/Footer";
const SearchPage = () => {
    const {name} = useParams()
    const [meals, setMeals] = useState([])
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
            .then(res => {
                setMeals(res.data.meals)
            })
    }, [meals])
    const navigate = useNavigate()
    return (
        <>
            <section className={'descr-section'}>
                <div className={'container-back'}>
                    <div className={'box-back'}>
                        <div>
                            <button className={'go-back-button'} onClick={() => navigate('/')}>Back</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={'meals-section'}>
                <div className={'container'}>
                    <MealsList meals={meals}></MealsList>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default SearchPage