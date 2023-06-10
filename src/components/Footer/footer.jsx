import React from "react";


export const Footer = () => {

    return(
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        {/* columna 1 */}
                        <div className="col">
                            <h4>Dr. Adriane Boyle</h4>
                        </div>
                        
                        {/* columna 2 */}
                        <div className="col">
                            <h4>Oakland, California</h4>
                        </div>
                    {/* Columna 3 */}
                        <div className="col">
                            <h4>Contact Information</h4>
                            <ul className="list-unstyled">
                                <li>(619)507-5685</li>
                                <li>adriane.boyle@gmail.com</li>
                                
                            </ul>
                        </div>







                    </div>
                 </div>
            </div>

    )

}