import { Logo, List, Item, Link } from "./styles/Header.styled";

export const Header = () => {
  return (
    <> 
      <Logo>RoomCraft</Logo>

      <List>
        <Item>
          <Link>Головна</Link>
        </Item>
        <Item>
          <Link>Редактор</Link>
        </Item>
        <Item>
          <Link>Контакти</Link>
        </Item>
      </List>
    </>
  );
}
