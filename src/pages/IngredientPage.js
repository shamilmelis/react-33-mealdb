import React from 'react'
import {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import MealsList from "../components/MealsList";
import {useNavigate} from "react-router-dom";
import Footer from "../components/Footer";
const IngredientPage = () => {
    const navigate = useNavigate()
    const [ingr, setIngr] = useState([])
    const {name} = useParams()
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`)
            .then(res => {
                    setIngr(res.data.meals)
                console.log(name)
                }
            )
    }, [])
    return (
        <>
            <section className={'descr-section'}>
                <div className={'container-back'}>
                    <div className={'box-back'}>
                        <div>
                            <button className={'go-back-button'} onClick={() => navigate(-1)}>Back</button>
                        </div>
                        <div>
                            <button className={'go-back-button'} onClick={() => navigate('/')}>Home</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={'ingr-section'}>
                <div className={'container-ingr'}>
                    <div className={'row-ingr'}>
                        <div className={'col-ingr'}>
                            <div className={'box-ingr-info'}>
                                <img src={`https://www.themealdb.com/images/ingredients/${name}.png`} alt={name} className={'ingr-img'}/>
                                <p className={'ingr-name'}>{name}</p>
                            </div>
                        </div>
                        <div className={'col-ingr'}>
                            <p className={'ingr-meals'}>Meals where <span className={'ingr-meals-hightligth'}>«{name}»</span> is using:</p>
                            <div className={'box-ingr-meals'}>
                                <MealsList meals={ingr}></MealsList>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </>
    )
}

export default IngredientPage