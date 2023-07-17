import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiNoodles, GiChopsticks} from "react-icons/gi";
import { NavLink, useLocation } from "react-router-dom";
import "./sass/category.scss"

export const Category = () => {

  const location = useLocation();
  console.log(location);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="category">
        <NavLink className={`category__item ${isActive('/cuisine/Italian') ? 'category__active' : ''}`} to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink className={`category__item ${isActive('/cuisine/American') ? 'category__active' : ''}`} to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink className={`category__item ${isActive('/cuisine/Thai') ? 'category__active' : ''}`} to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>
      <NavLink className={`category__item ${isActive('/cuisine/Vietnamese') ? 'category__active' : ''}`} to={'/cuisine/Vietnamese'}>
        <GiChopsticks />
        <h4>Vietnamese</h4>
      </NavLink>
    </div>
  )
}
