import React from 'react';
import {Link, useLocation} from "react-router-dom";


export default function User(props) {

    // console.log(useLocation);
    // const location = useLocation();

    let {item} = props;

    console.log(props);

    return (
        <div>
            {item.id}. {item.name} - <Link to={`${item.id}`}>Details</Link>
        </div>
    );
};
