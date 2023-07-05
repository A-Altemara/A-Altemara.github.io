import {Link} from 'react-router-dom'

export function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container-fluid">
               <Link to="index.html" className="navbar-brand text-white">Airiel</Link>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{backgroundColor: "lightgray"}}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-underline">
                        <li className="nav-item">
                            <Link to="index.html" className="nav-link text-white active" aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="./projects.html" className="nav-link text-white" >Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="./contacts.html" className="nav-link text-white" >Contacts</Link>
                        </li>
                         {/* <li className="nav-item">
                            <a className="nav-link text-white disabled">Disabled</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;