//@ts-nocheck
import Link from 'next/link';
import {useState} from 'react'


const Header = () => {

  const [isActive, setActive] = useState(false)

  return (
    <div className="hero-head">
       <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <div
           className={`navbar-burger navbar-burger--color burger ${isActive ? "is-active" : ""}`}
          data-target="navbarExampleTransparentExample"
            onClick={()=>setActive(!isActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample"
       className={`navbar-menu ${isActive?"is-active":""}`}>
        <div className="navbar-end">
          <Link href="/">
          <a className="navbar-item">INICIO</a>
          </Link>
          <Link href="/sobremi">
          <a className="navbar-item">SOBRE MI</a>
          </Link>
          <Link href="/contacto">
          <a className="navbar-item">CONTACTO</a>
          </Link>
        </div>
      </div>
    </nav>
    </div>
   
  );
};
export default Header;
