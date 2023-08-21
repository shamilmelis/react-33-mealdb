import React from "react";
import Cards from "./Cards";
import {Link} from "react-router-dom";

const MealsList = ({meals}) => {
    return (
        <div className={'row'}>
            {
                meals.map(meal => {
                    return (
                        <div className={'col'} key={meal.idMeal}>
                            <Link to={`/meal/${meal.idMeal}`} className={'navigation-links'}>
                                <Cards meal={meal}></Cards>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default MealsList