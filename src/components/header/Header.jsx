import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import SearchBar from "../searchbar/SearchBar";
import style from "./Header.module.scss";
<<<<<<< HEAD
import { ShoppingCart, Notifications, Person } from "@material-ui/icons/";
import Button from "../button/Button";
=======
import {ShoppingCart,Notifications,Person} from '@material-ui/icons/';
import Avatar from "../avatar/Avatar";
>>>>>>> 681e6a71e908defe2819233166487b3e0eadf956
const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={`row ${style.header__row}`}>
          <Link to="/">
            <Logo width={125} alt="Liva Logo" className={style.header__logo} />
          </Link>
          <div className="col-5">
            <SearchBar />
          </div>
          <div>
            <div  className="list-inline">
                <button className={`btn ${style.header__btn}`}>
                <ShoppingCart/>
                </button>
                <button className={`btn ${style.header__btn}`}>
                <Notifications/>
                </button>
                <button className={`btn ${style.header__btn}`}>
                <Avatar/>
                </button>
              
             
              <li>
               
                </li>
                <li>
               
                </li>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
