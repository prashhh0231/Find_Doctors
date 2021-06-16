import React from 'react'
import './card.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
const Card = ({val,i}) => {
    return (
        <div className="card" >
            {/* <img src="https://toppng.com/uploads/preview/doctor-symbol-11552760933piwfjbowrl.png"/> */}
            <h1 key={i}>Dr.{val.first_name} {val.last_name}</h1>
            <h3>{val.specilization}</h3>
            <p className="email"><MailOutlineIcon /> {val.email}</p>
        </div>
    )
}

export default Card;
