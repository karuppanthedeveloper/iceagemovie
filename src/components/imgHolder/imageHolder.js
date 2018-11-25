import React, {Component} from "react";
const Imageholder= props =>  {
	return(
     <div className="col-sm-4 imgholder">{/* react fragment*/}
		  <p><img src="css/img/scrat2.png" className="rightimg"/></p>
		  <div className="footer">© 2018 Litmus7 Systems Consulting Ltd. All rights reserved</div>
    </div>
	)
}
export default Imageholder;