import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className={'container-footer'}>
                <div className={'row-footer'}>
                    <div className={'col-footer'}>
                        <div>
                            <p className={'footer-title'}>TheMealDB</p>
                        </div>
                    </div>
                    <div className={'col-footer'}>
                        <div className={'box-footer'}>
                            <h1 className={'api-title'}>API's which used in project:</h1>
                            <p className={'api-values'}>www.themealdb.com/api.php</p>
                            <p className={'api-values'}>www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata</p>
                            <p className={'api-values'}>www.themealdb.com/api/json/v1/1/lookup.php?i=52772</p>
                            <p className={'api-values'}>www.themealdb.com/api/json/v1/1/random.php</p>
                            <p className={'api-values'}>www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast</p>
                            <p className={'api-values'}>www.themealdb.com/images/ingredients/Lime.png</p>
                        </div>
                    </div>
                    <div className={'col-footer'}>
                        <div className="box-footer">
                            <p className={'author-rights-title'}>Website made by <span>Shamil Melisov</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer