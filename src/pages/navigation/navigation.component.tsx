import { Fragment } from "react";
import {Outlet,Link} from 'react-router-dom';
import './navigation.styles.scss';

const Navigation=()=>{
    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo__container" to="/">
                </Link>
                <div className="nav__links-container">
                <Link className="nav__link" to="/">
                    Home
                    </Link>
                    <Link className="nav__link" to="/monsters">
                    Monsters
                    </Link>
                    <Link className="nav__link" to="/test-view">
                    Test View
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
};


export default Navigation;