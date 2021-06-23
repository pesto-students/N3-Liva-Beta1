import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import SearchBar from "../searchbar/SearchBar";
import style from "./Header.module.scss";
import { ShoppingCart, Notifications, Person } from "@material-ui/icons/";
import Button from "../button/Button";
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
            <div className="list-inline">
              <Button className={`btn ${style.header__btn}`}>
                <Notifications />
                
              </Button>
              <Button className={`btn ${style.header__btn}`}>
                <ShoppingCart />
              </Button>
              <Button className={`btn ${style.header__btn}`}>
                <Person />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
