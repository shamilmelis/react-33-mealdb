import React from 'react'

const Cards = ({meal}) => {
    return (
            <div className={'box'}>
                <img src={meal.strMealThumb} alt={meal.strMeal} className={'cards-img'}/>
                <p className={'cards-title'}>{meal.strMeal}</p>
            </div>
    )
}

export default Cards