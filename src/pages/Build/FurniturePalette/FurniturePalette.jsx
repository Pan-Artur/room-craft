import { useState } from "react";

import { Container } from "../../../components/Container/Container";

import {
  PaletteContainer,
  PaletteHeader,
  SearchInput,
  CategoryList,
  CategoryItem,
  CategoryHeader,
  CategoryIcon,
  CategoryName,
  CategoryArrow,
  CategoryContent,
  FurnitureItem,
  FurnitureIcon,
  FurnitureName
} from './styles/FurniturePalette.styled';

import {
  LuSofa, LuTable2, LuDoorOpen, LuLibrary, LuLamp
} from "react-icons/lu";
import { 
  FaTv, FaGamepad, FaChevronDown, FaChevronUp,
  FaDesktop, FaLaptop, FaChair
} from "react-icons/fa";
import { 
  RiPlantFill, 
  RiPlantLine,
  RiGalleryLine
} from "react-icons/ri";
import { 
  GiWoodenChair,
  GiSofa,
  GiBed,
  GiSteeringWheel,
  GiConsoleController,
  GiVrHeadset
} from "react-icons/gi";
import { PiRug } from "react-icons/pi";
import { SiApplearcade } from "react-icons/si";

export const FurniturePalette = ({ onSelectItem }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = {
    furniture: {
      name: "Меблі",
      icon: <LuSofa size={20} />,
      items: [
        { id: "bed", name: "Ліжка", icon: <GiBed size={20} /> },
        { id: "sofa", name: "Дивани", icon: <GiSofa size={20} /> },
        { id: "chair", name: "Крісла", icon: <GiWoodenChair size={20} /> },
        { id: "desk", name: "Столи", icon: <LuTable2 size={20} /> },
        { id: "wardrobe", name: "Шафи", icon: <LuDoorOpen size={20} /> },
        { id: "bookshelf", name: "Полиці", icon: <LuLibrary size={20} /> },
      ],
    },
    electronics: {
      name: "Техніка",
      icon: <FaTv size={20} />,
      items: [
        { id: "pc", name: "Комп'ютери", icon: <FaDesktop size={20} /> },
        { id: "tv", name: "Телевізори", icon: <FaTv size={20} /> },
        { id: "console", name: "Консолі", icon: <GiConsoleController size={20} /> },
        { id: "laptop", name: "Ноутбуки", icon: <FaLaptop size={20} /> },
        { id: "lamp", name: "Лампи", icon: <LuLamp size={20} /> },
      ],
    },
    decor: {
      name: "Декор",
      icon: <RiPlantFill size={20} />,
      items: [
        { id: "plant", name: "Рослини", icon: <RiPlantLine size={20} /> },
        { id: "rug", name: "Килими", icon: <PiRug size={20} /> },
        { id: "collectible", name: "Колекції", icon: <RiGalleryLine size={20} /> },
      ],
    },
    gaming: {
      name: "Геймінг",
      icon: <FaGamepad size={20} />,
      items: [
        { id: "beanbag", name: "Пуфи", icon: <FaChair size={20} /> },
        { id: "wheel", name: "Кермо", icon: <GiSteeringWheel size={20} /> },
        { id: "arcade", name: "Аркади", icon: <SiApplearcade size={20} /> },
        { id: "vr_set", name: "VR-набори", icon: <GiVrHeadset size={20} /> },
      ],
    },
  };

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const filteredCategories = Object.values(categories)
    .map(category => {
      const filteredItems = category.items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...category, items: filteredItems };
    })
    .filter(category => category.items.length > 0);

  return (
    <PaletteContainer>
      <Container>
        <PaletteHeader>Каталог меблів</PaletteHeader>

        <SearchInput
          placeholder="Пошук меблів..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <CategoryList>
          {filteredCategories.map(category => (
            <CategoryItem key={category.name}>
              <CategoryHeader
                onClick={() => toggleCategory(category.name)}
                $isActive={activeCategory === category.name}
              >
                <CategoryIcon>{category.icon}</CategoryIcon>
                <CategoryName>{category.name}</CategoryName>
                <CategoryArrow>
                  {activeCategory === category.name ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </CategoryArrow>
              </CategoryHeader>

              <CategoryContent $isOpen={activeCategory === category.name}>
                {category.items.map(item => (
                  <FurnitureItem
                    key={item.id}
                    onClick={() => onSelectItem(item)}
                  >
                    <FurnitureIcon>{item.icon}</FurnitureIcon>
                    <FurnitureName>{item.name}</FurnitureName>
                  </FurnitureItem>
                ))}
              </CategoryContent>
            </CategoryItem>
          ))}
        </CategoryList>
      </Container>
    </PaletteContainer>
  );
};