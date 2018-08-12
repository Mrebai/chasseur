import React from 'react'
import LanguageContext from '../context/languageContext';
import MainNavBar from './home/headNavBar'
export default NotFound = () => {
    return  (
        <LanguageContext.Consumer>
            {
                lng => {
                    return (
                        <div>
                            <div className="Cont404">
                                <div>
                                    <h6 className='lead display-1'>
                                        404
                                    </h6>
                                    <p className={'display-4'}> PAGE NOT FOUND</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        </LanguageContext.Consumer>
        )
}