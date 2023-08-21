import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import MealsInfo from "../components/MealsInfo";
import Footer from "../components/Footer";
const DescrPage = () => {
    const [meals, setMeals] = useState([])
    const {id} = useParams()
    console.log(id)
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => {
                setMeals(res.data.meals[0])
                console.log(res.data.meals)
            })
    }, [])
    const navigate = useNavigate()
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
          <MealsInfo info={meals}></MealsInfo>
          <Footer></Footer>
      </>
    )
}

export default DescrPage