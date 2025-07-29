import { useState } from "react";

import { Container } from "../../../../components/Container/Container";

//Furniture

//Beds
import { CanopyBed } from "./FurnitureCatalog/Furniture/Beds/CanopyBed";
import { FoldingBed } from "./FurnitureCatalog/Furniture/Beds/FoldingBed";
import { HammockBed } from "./FurnitureCatalog/Furniture/Beds/HammockBed";
import { MetalBed } from "./FurnitureCatalog/Furniture/Beds/MetalBed";
import { StorageBed } from "./FurnitureCatalog/Furniture/Beds/StorageBed";
import { TransformerBed } from "./FurnitureCatalog/Furniture/Beds/TransformerBed";

//Chairs
import { ClassicWoodChair } from "./FurnitureCatalog/Furniture/Chairs/ClassicWoodChair";
import { CocoonChair } from "./FurnitureCatalog/Furniture/Chairs/CocoonChair";
import { GamingChair } from "./FurnitureCatalog/Furniture/Chairs/GamingChair";
import { GardenChair } from "./FurnitureCatalog/Furniture/Chairs/GardenChair";
import { HangingChair } from "./FurnitureCatalog/Furniture/Chairs/HangingChair";
import { MeshChair } from "./FurnitureCatalog/Furniture/Chairs/MeshChair";
import { ModernChair } from "./FurnitureCatalog/Furniture/Chairs/ModernChair";
import { OfficeChair } from "./FurnitureCatalog/Furniture/Chairs/OfficeChair";
import { RockingChair } from "./FurnitureCatalog/Furniture/Chairs/RockingChair";
import { SimpleChair } from "./FurnitureCatalog/Furniture/Chairs/SimpleChair";

//Shelves
import { ClassicShelf } from "./FurnitureCatalog/Furniture/Shelves/ClassicShelf";
import { CornerShelf } from "./FurnitureCatalog/Furniture/Shelves/CornerShelf";
import { ModernShelf } from "./FurnitureCatalog/Furniture/Shelves/ModernShelf";

//Sofas
import { ClassicSofa } from "./FurnitureCatalog/Furniture/Sofas/ClassicSofa";
import { CornerSofa } from "./FurnitureCatalog/Furniture/Sofas/CornerSofa";
import { FoldingSofa } from "./FurnitureCatalog/Furniture/Sofas/FoldingSofa";
import { ModernSofa } from "./FurnitureCatalog/Furniture/Sofas/ModernSofa";
import { SofaBed } from "./FurnitureCatalog/Furniture/Sofas/SofaBed";

//Tables
import { ClassicTable } from "./FurnitureCatalog/Furniture/Tables/ClassicTable";
import { CoffeeTable } from "./FurnitureCatalog/Furniture/Tables/CoffeeTable";
import { FoldingTable } from "./FurnitureCatalog/Furniture/Tables/FoldingTable";
import { ModernTable } from "./FurnitureCatalog/Furniture/Tables/ModernTable";
import { OfficeTable } from "./FurnitureCatalog/Furniture/Tables/OfficeTable";

//Wardrobes
import { Bookcase } from "./FurnitureCatalog/Furniture/Wardrobes/Bookcase";
import { ClassicWardrobe } from "./FurnitureCatalog/Furniture/Wardrobes/ClassicWardrobe";
import { ClosetWardrobe } from "./FurnitureCatalog/Furniture/Wardrobes/ClosetWardrobe";
import { ModernWardrobe } from "./FurnitureCatalog/Furniture/Wardrobes/ModernWardrobe";
import { ShelfWardrobe } from "./FurnitureCatalog/Furniture/Wardrobes/ShelfWardrobe";

//Gaming

//Arcades
import { ClassicArcade } from "./FurnitureCatalog/Gaming/Arcades/ClassicArcade";
import { RacingArcade } from "./FurnitureCatalog/Gaming/Arcades/RacingArcade";

//Poufs
import { RoundPouf } from "./FurnitureCatalog/Gaming/Poufs/RoundPouf";
import { SquarePouf } from "./FurnitureCatalog/Gaming/Poufs/SquarePouf";
import { StarPouf } from "./FurnitureCatalog/Gaming/Poufs/StarPouf";

//Wheels
import { RacingSteeringWheel } from "./FurnitureCatalog/Gaming/Wheels/RacingSteeringWheel";
import { SportSteeringWheel } from "./FurnitureCatalog/Gaming/Wheels/SportsSteeringWheel";

//Technology

//Computers
import { DesktopPC } from "./FurnitureCatalog/Technology/Computers/DesktopPC";
import { GamingPC } from "./FurnitureCatalog/Technology/Computers/GamingPC";
import { Laptop } from "./FurnitureCatalog/Technology/Computers/Laptop";

//Televisions
import { FlatTV } from "./FurnitureCatalog/Technology/Televisions/FlatTV";

//Lamps
import { DeskLamp } from "./FurnitureCatalog/Technology/Lamps/DeskLamp";
import { FloorLamp } from "./FurnitureCatalog/Technology/Lamps/FloorLamp";
import { ModernLamp } from "./FurnitureCatalog/Technology/Lamps/ModernLamp";

//Decor

//Plants
import { CactusPlant } from "./FurnitureCatalog/Decor/Plants/CactusPlant";
import { FloweringPlant } from "./FurnitureCatalog/Decor/Plants/FloweringPlant";
import { LeafyPlant } from "./FurnitureCatalog/Decor/Plants/LeafyPlant";

//Rugs
import { OrientalRug } from "./FurnitureCatalog/Decor/Rugs/OrientalRug";
import { ModernRug } from "./FurnitureCatalog/Decor/Rugs/ModernRug";

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
  FurnitureName,
  SubcategoryContent,
  SubcategoryHeader,
  SubcategoryName,
} from "./styles/FurniturePalette.styled";

import {
  LuSofa,
  LuTable2,
  LuDoorOpen,
  LuLibrary,
  LuLamp,
} from "react-icons/lu";
import {
  FaTv,
  FaGamepad,
  FaChevronDown,
  FaChevronUp,
  FaDesktop,
  FaChair,
} from "react-icons/fa";
import { RiPlantFill, RiPlantLine } from "react-icons/ri";
import {
  GiWoodenChair,
  GiSofa,
  GiBed,
  GiSteeringWheel,
} from "react-icons/gi";
import { PiRug } from "react-icons/pi";
import { SiApplearcade } from "react-icons/si";

export const FurniturePalette = ({ onSelectItem }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = {
    furniture: {
      name: "Меблі",
      icon: <LuSofa size={20} />,
      items: [
        {
          id: "bed",
          name: "Ліжка",
          icon: <GiBed size={20} />,
          components: [
            { name: "Ліжко-палац", component: <CanopyBed /> },
            { name: "Розкладне ліжко", component: <FoldingBed /> },
            { name: "Ліжко-гамак", component: <HammockBed /> },
            { name: "Металеве ліжко", component: <MetalBed /> },
            { name: "Ліжко з шухлядами", component: <StorageBed /> },
            { name: "Ліжко-трансформер", component: <TransformerBed /> },
          ],
        },
        {
          id: "sofa",
          name: "Дивани",
          icon: <GiSofa size={20} />,
          components: [
            { name: "Класичний диван", component: <ClassicSofa /> },
            { name: "Сучасний диван", component: <ModernSofa /> },
            { name: "Кутовий диван", component: <CornerSofa /> },
            { name: "Диван-ліжко", component: <SofaBed /> },
            { name: "Розкладний диван", component: <FoldingSofa /> },
          ],
        },
        {
          id: "chair",
          name: "Крісла",
          icon: <GiWoodenChair size={20} />,
          components: [
            { name: "Дерев'яне крісло", component: <ClassicWoodChair /> },
            { name: "Крісло-кокон", component: <CocoonChair /> },
            { name: "Геймерське крісло", component: <GamingChair /> },
            { name: "Садове крісло", component: <GardenChair /> },
            { name: "Крісло-підвіс", component: <HangingChair /> },
            { name: "Крісло-сітка", component: <MeshChair /> },
            { name: "Сучасне крісло", component: <ModernChair /> },
            { name: "Офісне крісло", component: <OfficeChair /> },
            { name: "Крісло-качалка", component: <RockingChair /> },
            { name: "Просте крісло", component: <SimpleChair /> },
          ],
        },
        {
          id: "desk",
          name: "Столи",
          icon: <LuTable2 size={20} />,
          components: [
            { name: "Дерев'яний стіл", component: <ClassicTable /> },
            { name: "Cкляний стіл", component: <ModernTable /> },
            { name: "Офісний стіл", component: <OfficeTable /> },
            { name: "Кавовий столик", component: <CoffeeTable /> },
            { name: "Складний стіл", component: <FoldingTable /> },
          ],
        },
        {
          id: "wardrobe",
          name: "Шафи",
          icon: <LuDoorOpen size={20} />,
          components: [
            { name: "Класична шафа", component: <ClassicWardrobe /> },
            { name: "Сучасна шафа", component: <ModernWardrobe /> },
            { name: "Книжкова шафа", component: <Bookcase /> },
            { name: "Шафа з полицями", component: <ShelfWardrobe /> },
            { name: "Шафа-гардероб", component: <ClosetWardrobe /> },
          ],
        },
        {
          id: "shelf",
          name: "Полиці",
          icon: <LuLibrary size={20} />,
          components: [
            { name: "Класична полиця", component: <ClassicShelf /> },
            { name: "Сучасна полиця", component: <ModernShelf /> },
            { name: "Кутова полиця", component: <CornerShelf /> },
          ],
        },
      ],
    },
    electronics: {
      name: "Техніка",
      icon: <FaTv size={20} />,
      items: [
        {
          id: "pc",
          name: "Комп'ютери",
          icon: <FaDesktop size={20} />,
          components: [
            { name: "Настільний ПК", component: <DesktopPC /> },
            { name: "Ноутбук", component: <Laptop /> },
            { name: "Геймерський ПК", component: <GamingPC /> },
          ],
        },
        {
          id: "tv",
          name: "Телевізори",
          icon: <FaTv size={20} />,
          components: [{ name: "Телевізор", component: <FlatTV /> }],
        },
        {
          id: "lamp",
          name: "Лампи",
          icon: <LuLamp size={20} />,
          components: [
            { name: "Настільна лампа", component: <DeskLamp /> },
            { name: "Сучасна LED лампа", component: <ModernLamp /> },
            { name: "Підлогова лампа", component: <FloorLamp /> },
          ],
        },
      ],
    },
    decor: {
      name: "Декор",
      icon: <RiPlantFill size={20} />,
      items: [
        {
          id: "plant",
          name: "Рослини",
          icon: <RiPlantLine size={20} />,
          components: [
            { name: "Кактус", component: <CactusPlant /> },
            { name: "Листяна рослина", component: <LeafyPlant /> },
            { name: "Квітуча рослина", component: <FloweringPlant /> },
          ],
        },
        {
          id: "rug",
          name: "Килими",
          icon: <PiRug size={20} />,
          components: [
            { name: "Орієнтальний килим", component: <OrientalRug /> },
            { name: "Сучасний килим", component: <ModernRug /> },
          ],
        },
      ],
    },
    gaming: {
      name: "Геймінг",
      icon: <FaGamepad size={20} />,
      items: [
        {
          id: "beanbag",
          name: "Пуфи",
          icon: <FaChair size={20} />,
          components: [
            { name: "Класичний круглий", component: <RoundPouf /> },
            { name: "Сучасний квадратний", component: <SquarePouf /> },
            { name: "Дизайнерський зірочка", component: <StarPouf /> },
          ],
        },
        {
          id: "wheel",
          name: "Кермо",
          icon: <GiSteeringWheel size={20} />,
          components: [
            { name: "Спортивне кермо", component: <SportSteeringWheel /> },
            { name: "Гоночне кермо", component: <RacingSteeringWheel /> },
          ],
        },
        {
          id: "arcade",
          name: "Аркади",
          icon: <SiApplearcade size={20} />,
          components: [
            { name: "Класичний автомат", component: <ClassicArcade /> },
            { name: "Гоночний автомат", component: <RacingArcade /> },
          ],
        },
      ],
    },
  };

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
    setActiveSubcategory(null);
  };

  const toggleSubcategory = (subcategoryId) => {
    setActiveSubcategory(activeSubcategory === subcategoryId ? null : subcategoryId);
  };

  const filteredCategories = Object.values(categories)
    .map((category) => {
      const filteredItems = category.items.filter((item) => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.components.some(comp => 
          comp.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      return { ...category, items: filteredItems };
    })
    .filter((category) => category.items.length > 0);

  return (
    <PaletteContainer>
      <PaletteHeader>Каталог меблів</PaletteHeader>

      <SearchInput
        placeholder="Пошук меблів..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <CategoryList>
        {filteredCategories.map((category) => (
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
              {category.items.map((item) => (
                <div key={item.id}>
                  <SubcategoryHeader
                    onClick={() => toggleSubcategory(item.id)}
                    $isActive={activeSubcategory === item.id}
                  >
                    <FurnitureIcon>{item.icon}</FurnitureIcon>
                    <SubcategoryName>{item.name}</SubcategoryName>
                    <CategoryArrow>
                      {activeSubcategory === item.id ? (
                        <FaChevronUp size={14} />
                      ) : (
                        <FaChevronDown size={14} />
                      )}
                    </CategoryArrow>
                  </SubcategoryHeader>

                  <SubcategoryContent $isOpen={activeSubcategory === item.id}>
                    {item.components.map((component, index) => (
                      <FurnitureItem
                        key={`${item.id}-${index}`}
                        onClick={() => onSelectItem({
                          ...item,
                          component: component.component,
                          name: component.name
                        })}
                      >
                        <FurnitureName>{component.name}</FurnitureName>
                      </FurnitureItem>
                    ))}
                  </SubcategoryContent>
                </div>
              ))}
            </CategoryContent>
          </CategoryItem>
        ))}
      </CategoryList>
    </PaletteContainer>
  );
};