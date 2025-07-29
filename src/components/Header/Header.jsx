import { Link } from 'react-router-dom';

import { Logo, List } from "./styles/Header.styled";

export const Header = () => {
  return (
    <header> 
      <Logo>RoomCraft</Logo>

      <List>
        <Link to="/">Головна</Link>
        <Link to="/build">Редактор</Link>
        <Link to="/contacts">Контакти</Link>
      </List>
    </header>
  );
}
