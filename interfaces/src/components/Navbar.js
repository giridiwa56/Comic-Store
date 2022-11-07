import React from 'react';
import{ Link} from 'react-router-dom'

const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-white sticky-top shadow-sm py-3">
            <div className="container">
                <a className="navbar-brand" href="/">Lapak Comic</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="bi bi-list text-2x"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <li className="navbar-nav">
                            <Link className="nav-link active px-3" aria-current="page" to="/comics">Comic</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link px-3" to="/publishers">Publisher</Link>
                        </li>
                      
                       
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;