import React  from 'react'
import noImage from '../assets/no-image.png'
import {Link} from "react-router-dom";
const MealsInfo = ({info}) => {
   let videoLink;
   if (info.strYoutube) {
       videoLink = info.strYoutube.replace('watch?v=', 'embed/')
   }
    return (
        <>
            <section className={'info-section'}>
                <div className={'container-info'}>
                    <div className={'row-info'}>
                        <div className={'col-info'}>
                            <div className={'box-info'}>
                                <p className={'meal-descr-title'}>{info.strMeal}</p>
                                <div>
                                    <img src={info.strMealThumb} alt={info.strMeal} className={'meal-descr-img'}/>
                                </div>
                                <p className={'meal-country-discleimer'}>Country:</p>
                                <p className={'meal-country'}>{info.strArea}</p>
                                <p className={'meal-descr-discleimer'}>About Food:</p>
                                <p className={'meal-descr'}>{info.strInstructions}</p>
                                <p className={'meal-tags'}>Tags: <span className={'meal-tags-values'}>{info.strTags ? info.strTags.replaceAll(',', ', ') : 'No tags'}</span></p>
                            </div>
                        </div>
                        <div className={'col-info'}>
                            <p className={'meal-ingredients'}><span className={'ingr-meals-hightligth'}>«{info.strMeal}»</span> Ingredients:</p>
                            <div className={'meal-info'}>
                                <div className="col-4">
                                    <Link to={`/meal/main-ingredient/${info.strIngredient1}`} className={'navigation-links'}>
                                        <div className="box-ingredient">
                                            <div>
                                                <img src={info.strIngredient1 ? `https://www.themealdb.com/images/ingredients/${info.strIngredient1}.png` : noImage} alt={info.strIngredient1} className={'img-ingredient'}/>
                                            </div>
                                            <p className={'meal-ingredient'}>{info.strIngredient1}</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-4">
                                    <Link to={`/meal/main-ingredient/${info.strIngredient2}`} className={'navigation-links'}>
                                        <div className="box-ingredient">
                                            <div>
                                                <img src={info.strIngredient2 ? `https://www.themealdb.com/images/ingredients/${info.strIngredient2}.png` : noImage} alt={info.strIngredient2} className={'img-ingredient'}/>
                                            </div>
                                            <p className={'meal-ingredient'}>{info.strIngredient2}</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-4">
                                    <Link to={`/meal/main-ingredient/${info.strIngredient3}`} className={'navigation-links'}>
                                        <div className="box-ingredient">
                                            <div>
                                                <img src={info.strIngredient3 ? `https://www.themealdb.com/images/ingredients/${info.strIngredient3}.png` : noImage} alt={info.strIngredient3} className={'img-ingredient'}/>
                                            </div>
                                            <p className={'meal-ingredient'}>{info.strIngredient3}</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-4">
                                    <Link to={`/meal/main-ingredient/${info.strIngredient4}`} className={'navigation-links'}>
                                        <div className="box-ingredient">
                                            <div>
                                                <img src={info.strIngredient4 ? `https://www.themealdb.com/images/ingredients/${info.strIngredient4}.png` : noImage} alt={info.strIngredient4} className={'img-ingredient'}/>
                                            </div>
                                            <p className={'meal-ingredient'}>{info.strIngredient4}</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-4">
                                    <Link to={`/meal/main-ingredient/${info.strIngredient5}`} className={'navigation-links'}>
                                        <div className="box-ingredient">
                                            <div>
                                                <img src={info.strIngredient5 ? `https://www.themealdb.com/images/ingredients/${info.strIngredient5}.png` : noImage} alt={info.strIngredient5} className={'img-ingredient'}/>
                                            </div>
                                            <p className={'meal-ingredient'}>{info.strIngredient5}</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-4">
                                    <Link to={`/meal/main-ingredient/${info.strIngredient6}`} className={'navigation-links'}>
                                        <div className="box-ingredient">
                                            <div>
                                                <img src={info.strIngredient6 ? `https://www.themealdb.com/images/ingredients/${info.strIngredient6}.png` : noImage} alt={info.strIngredient6} className={'img-ingredient'}/>
                                            </div>
                                            <p className={'meal-ingredient'}>{info.strIngredient6}</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-4">
                                    <Link to={`/meal/main-ingredient/${info.strIngredient7}`} className={'navigation-links'}>
                                        <div className="box-ingredient">
                                            <div>
                                                <img src={info.strIngredient7 ? `https://www.themealdb.com/images/ingredients/${info.strIngredient7}.png` : noImage} alt={info.strIngredient7} className={'img-ingredient'}/>
                                            </div>
                                            <p className={'meal-ingredient'}>{info.strIngredient7}</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-4">
                                    <Link to={`/meal/main-ingredient/${info.strIngredient8}`} className={'navigation-links'}>
                                        <div className="box-ingredient">
                                            <div>
                                                <img src={info.strIngredient8 ? `https://www.themealdb.com/images/ingredients/${info.strIngredient8}.png` : noImage} alt={info.strIngredient8} className={'img-ingredient'}/>
                                            </div>
                                            <p className={'meal-ingredient'}>{info.strIngredient8}</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-4">
                                    <Link to={`/meal/main-ingredient/${info.strIngredient9}`} className={'navigation-links'}>
                                        <div className="box-ingredient">
                                            <div>
                                                <img src={info.strIngredient9 ? `https://www.themealdb.com/images/ingredients/${info.strIngredient9}.png` : noImage} alt={info.strIngredient9} className={'img-ingredient'}/>
                                            </div>
                                            <p className={'meal-ingredient'}>{info.strIngredient9}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={'video-section'}>
                <div className={'container-video'}>
                    <div className={'box-video'}>
                        <p className={'video-title'}>How to cook:</p>
                        <div className={'inner-video'}>
                            <iframe src={videoLink} width={'100%'} height={'100%'} frameBorder="0"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MealsInfo