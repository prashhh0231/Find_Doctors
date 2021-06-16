import React from 'react'
import Doctorinfo from './Doctorinfo';
import { Redirect } from 'react-router';
const Info = ({val}) => {
    document.title="Find Your Doctor"
    return (
        <div>
          {val?<Doctorinfo/>:
          <center>
              {alert("Login First")}
              <Redirect to="/"/>
         </center>}
        </div>
    )
}

export default Info;
