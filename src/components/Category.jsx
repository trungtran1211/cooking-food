import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiNoodles, GiChopsticks} from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components"

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

export const Category = () => {
  return (
    <List>
        <NavLink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </NavLink>
        <NavLink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </NavLink>
        <NavLink to={'/cuisine/Thai'}>
            <GiNoodles />
            <h4>Thai</h4>
        </NavLink>
        <NavLink to={'/cuisine/Vietnamese'}>
            <GiChopsticks />
            <h4>Vietnamese</h4>
        </NavLink>

    </List>
  )
}
