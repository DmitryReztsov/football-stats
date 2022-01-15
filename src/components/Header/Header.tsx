import React, {FC} from 'react';
import {Link} from "react-router-dom";

const Header: FC = () => {
    return (
        <div>
            <h1>Football Stats</h1>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/leagues"}>Leagues</Link>
                <Link to={"/teams"}>Teams</Link>
            </nav>
        </div>
    );
};

export default Header;