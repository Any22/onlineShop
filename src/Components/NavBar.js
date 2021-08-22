import { Link } from 'react-router-dom';
import { navlinks } from '../utilities/links';
import { FaBars} from 'react-icons/fa';
import styled from 'styled-components';
import store from '../Images/store.jpg';
// import { CartBtn } from '../Components/CartBtn'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const divStyle = {
  color:'black',
};
export const NavBar = () => {
    return (
        <NavContainer>
         <div className="nav-center">
            <div className='nav-header'>
              <Link to ='/'>
               <img src={store} alt="fake-store"/> 
              </Link>
              <button type='button' className='nav-toggle' >
              <FaBars />
              </button> 
            </div>

            <ul className='nav-links'>
              {navlinks.map((navlink) => {
               const { id, text, url } = navlink;
                return (
                 <li key={id}>
                  <Link to={url}>{text}</Link>
                 </li>
                );
              })}
            </ul> 
            <Link to ='/cartpage'>
              <ShoppingCartIcon style={divStyle}/>{" "}
            </Link>
         </div>
       </NavContainer>
    )
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom:grey solid 1px;
  
  .nav-center {
    width: 90vw;
    margin: 40px 20px;
    color:black;
    max-width: var(--max-width);
    }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 70px;
      margin-left: -10px;
    }
    }
    .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-blue-1);
    cursor: pointer;
    }
    .nav-links {
    display: none;
    color:black;
    }
   @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content:left;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-1);
        font-size: 1rem;
        font-weight:bold;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
         display: grid;
      }
 }

  `
