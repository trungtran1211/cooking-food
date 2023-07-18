import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiNoodles, GiChopsticks} from "react-icons/gi";
import { NavLink, useLocation } from "react-router-dom";
import { RiHome4Fill } from "react-icons/ri";
import "./sass/category.scss"

export const Category = () => {

  const location = useLocation();
  console.log(location);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="category">
        <NavLink className='category__item' to={'/'}>
          <RiHome4Fill />
          <h4>Home</h4>
        </NavLink>
        <NavLink className='category__item' to={'/cuisine/Italian'}>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </NavLink>
        <NavLink className='category__item' to={'/cuisine/American'}>
          <FaHamburger />
          <h4>American</h4>
        </NavLink>
        <NavLink className='category__item' to={'/cuisine/Thai'}>
          <GiNoodles />
          <h4>Thai</h4>
        </NavLink>
        <NavLink className='category__item' to={'/cuisine/Vietnamese'}>
          <GiChopsticks />
          <h4>Vietnamese</h4>
        </NavLink>
    </div>
  )
}
