import { useState } from "react";

import { Container } from "../../../../components/Container/Container";

//Furniture

//Beds
import {
  CanopyBed,
  CanopyBedHorizontal,
  CanopyBedVertical,
  CanopyBedHorizontal180,
  CanopyBedVertical270,
} from "./FurnitureCatalog/Furniture/Beds/CanopyBed";
import {
  FoldingBed,
  FoldingBedHorizontal,
  FoldingBedVertical,
  FoldingBedHorizontal180,
  FoldingBedVertical270,
} from "./FurnitureCatalog/Furniture/Beds/FoldingBed";
import {
  MetalBed,
  MetalBedHorizontal,
  MetalBedVertical,
  MetalBedHorizontal180,
  MetalBedVertical270,
} from "./FurnitureCatalog/Furniture/Beds/MetalBed";
import {
  StorageBed,
  StorageBedHorizontal,
  StorageBedVertical,
  StorageBedHorizontal180,
  StorageBedVertical270,
} from "./FurnitureCatalog/Furniture/Beds/StorageBed";
import {
  TransformerBed,
  TransformerBedHorizontal,
  TransformerBedVertical,
  TransformerBedHorizontal180,
  TransformerBedVertical270,
} from "./FurnitureCatalog/Furniture/Beds/TransformerBed";

//Chairs
import {
  ClassicWoodChair,
  ClassicWoodChairHorizontal,
  ClassicWoodChairVertical,
  ClassicWoodChairHorizontal180,
  ClassicWoodChairVertical270,
} from "./FurnitureCatalog/Furniture/Chairs/ClassicWoodChair";
import {
  CocoonChair,
  CocoonChairHorizontal,
  CocoonChairVertical,
  CocoonChairHorizontal180,
  CocoonChairVertical270,
} from "./FurnitureCatalog/Furniture/Chairs/CocoonChair";
import {
  GamingChair,
  GamingChairHorizontal,
  GamingChairVertical,
  GamingChairHorizontal180,
  GamingChairVertical270,
} from "./FurnitureCatalog/Furniture/Chairs/GamingChair";
import {
  GardenChair,
  GardenChairHorizontal,
  GardenChairVertical,
  GardenChairHorizontal180,
  GardenChairVertical270,
} from "./FurnitureCatalog/Furniture/Chairs/GardenChair";
import { HangingChair } from "./FurnitureCatalog/Furniture/Chairs/HangingChair";
import { MeshChair } from "./FurnitureCatalog/Furniture/Chairs/MeshChair";
import { ModernChair } from "./FurnitureCatalog/Furniture/Chairs/ModernChair";
import { OfficeChair } from "./FurnitureCatalog/Furniture/Chairs/OfficeChair";
import { RockingChair } from "./FurnitureCatalog/Furniture/Chairs/RockingChair";
import { SimpleChair } from "./FurnitureCatalog/Furniture/Chairs/SimpleChair";

//Shelves
import { ClassicShelf } from "./FurnitureCatalog/Furniture/Shelves/ClassicShelf";
import { ModernShelf } from "./FurnitureCatalog/Furniture/Shelves/ModernShelf";

//Sofas
import { ClassicSofa, ClassicSofaHorizontal, ClassicSofaVertical, ClassicSofaHorizontal180, ClassicSofaVertical270 } from "./FurnitureCatalog/Furniture/Sofas/ClassicSofa";
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
// import { FlatTV } from "./FurnitureCatalog/Technology/Televisions/FlatTV";

//Lamps
// import { DeskLamp } from "./FurnitureCatalog/Technology/Lamps/DeskLamp";
// import { FloorLamp } from "./FurnitureCatalog/Technology/Lamps/FloorLamp";
// import { ModernLamp } from "./FurnitureCatalog/Technology/Lamps/ModernLamp";

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
  SubcategoryContent,
  SubcategoryHeader,
  SubcategoryName,
  FurnitureIcon,
  FurnitureName,
  FurnitureItem,
  VariantLabel,
  VariantOption,
  VariantOptions,
  VariantWrapper,
  DefaultVariantBox,
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
import { GiWoodenChair, GiSofa, GiBed, GiSteeringWheel } from "react-icons/gi";
import { PiRug } from "react-icons/pi";
import { SiApplearcade } from "react-icons/si";

import { useTranslation } from "react-i18next";

export const FurniturePalette = ({
  onAddToRoom,
}) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [activeModel, setActiveModel] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useTranslation();

  const [expandedCategory, setExpandedCategory] = useState(null);
  const [expandedSubcategory, setExpandedSubcategory] = useState(null);
  const [expandedFurniture, setExpandedFurniture] = useState(null);

  const categories = {
    furniture: {
      name: t("furniture.furnitureName"),
      icon: <LuSofa size={20} />,
      items: [
        {
          id: "bed",
          name: t("furniture.beds.name"),
          icon: <GiBed size={20} />,
          components: [
            {
              name: t("furniture.beds.bed1"),
              component: CanopyBed,
              positions: [
                { rotation: 0, component: CanopyBedHorizontal },
                { rotation: 90, component: CanopyBedVertical },
                { rotation: 180, component: CanopyBedHorizontal180 },
                { rotation: 270, component: CanopyBedVertical270 },
              ],
            },
            {
              name: t("furniture.beds.bed2"),
              component: FoldingBed,
              positions: [
                { rotation: 0, component: FoldingBedHorizontal },
                { rotation: 90, component: FoldingBedVertical },
                { rotation: 180, component: FoldingBedHorizontal180 },
                { rotation: 270, component: FoldingBedVertical270 },
              ],
            },
            {
              name: t("furniture.beds.bed4"),
              component: MetalBed,
              positions: [
                { rotation: 0, component: MetalBedHorizontal },
                { rotation: 90, component: MetalBedVertical },
                { rotation: 180, component: MetalBedHorizontal180 },
                { rotation: 270, component: MetalBedVertical270 },
              ],
            },
            {
              name: t("furniture.beds.bed5"),
              component: StorageBed,
              positions: [
                { rotation: 0, component: StorageBedHorizontal },
                { rotation: 90, component: StorageBedVertical },
                { rotation: 180, component: StorageBedHorizontal180 },
                { rotation: 270, component: StorageBedVertical270 },
              ],
            },
            {
              name: t("furniture.beds.bed6"),
              component: TransformerBed,
              positions: [
                { rotation: 0, component: TransformerBedHorizontal },
                { rotation: 90, component: TransformerBedVertical },
                { rotation: 180, component: TransformerBedHorizontal180 },
                { rotation: 270, component: TransformerBedVertical270 },
              ],
            },
          ],
        },
        {
          id: "sofa",
          name: t("furniture.sofas.name"),
          icon: <GiSofa size={20} />,
          components: [
            {
              name: t("furniture.sofas.sofa1"),
              component: ClassicSofa,
              positions: [
                { rotation: 0, component: ClassicSofaHorizontal },
                { rotation: 90, component: ClassicSofaVertical },
                { rotation: 180, component: ClassicSofaHorizontal180 },
                { rotation: 270, component: ClassicSofaVertical270 },
              ],
            },
            { name: t("furniture.sofas.sofa2"), component: ModernSofa },
            { name: t("furniture.sofas.sofa3"), component: CornerSofa },
            { name: t("furniture.sofas.sofa4"), component: SofaBed },
            { name: t("furniture.sofas.sofa5"), component: FoldingSofa },
          ],
        },
        {
          id: "chair",
          name: t("furniture.chairs.name"),
          icon: <GiWoodenChair size={20} />,
          components: [
            {
              name: t("furniture.chairs.chair1"),
              component: ClassicWoodChair,
              positions: [
                { rotation: 0, component: ClassicWoodChairHorizontal },
                { rotation: 90, component: ClassicWoodChairVertical },
                { rotation: 180, component: ClassicWoodChairHorizontal180 },
                { rotation: 270, component: ClassicWoodChairVertical270 },
              ],
            },
            {
              name: t("furniture.chairs.chair2"),
              component: CocoonChair,
              positions: [
                { rotation: 0, component: CocoonChairHorizontal },
                { rotation: 90, component: CocoonChairVertical },
                { rotation: 180, component: CocoonChairHorizontal180 },
                { rotation: 270, component: CocoonChairVertical270 },
              ],
            },
            {
              name: t("furniture.chairs.chair3"),
              component: GamingChair,
              positions: [
                { rotation: 0, component: GamingChairHorizontal },
                { rotation: 90, component: GamingChairVertical },
                { rotation: 180, component: GamingChairHorizontal180 },
                { rotation: 270, component: GamingChairVertical270 },
              ],
            },
            {
              name: t("furniture.chairs.chair4"),
              component: GardenChair,
              positions: [
                { rotation: 0, component: GardenChairHorizontal },
                { rotation: 90, component: GardenChairVertical },
                { rotation: 180, component: GardenChairHorizontal180 },
                { rotation: 270, component: GardenChairVertical270 },
              ],
            },
            { name: t("furniture.chairs.chair5"), component: HangingChair },
            { name: t("furniture.chairs.chair6"), component: MeshChair },
            { name: t("furniture.chairs.chair7"), component: ModernChair },
            { name: t("furniture.chairs.chair8"), component: OfficeChair },
            { name: t("furniture.chairs.chair9"), component: RockingChair },
            { name: t("furniture.chairs.chair10"), component: SimpleChair },
          ],
        },
        {
          id: "desk",
          name: t("furniture.desks.name"),
          icon: <LuTable2 size={20} />,
          components: [
            { name: t("furniture.desks.desk1"), component: ClassicTable },
            { name: t("furniture.desks.desk2"), component: ModernTable },
            { name: t("furniture.desks.desk3"), component: OfficeTable },
            { name: t("furniture.desks.desk4"), component: CoffeeTable },
            { name: t("furniture.desks.desk5"), component: FoldingTable },
          ],
        },
        {
          id: "wardrobe",
          name: t("furniture.wardrobe.name"),
          icon: <LuDoorOpen size={20} />,
          components: [
            {
              name: t("furniture.wardrobe.wardrobe1"),
              component: ClassicWardrobe,
            },
            {
              name: t("furniture.wardrobe.wardrobe2"),
              component: ModernWardrobe,
            },
            {
              name: t("furniture.wardrobe.wardrobe3"),
              component: Bookcase,
            },
            {
              name: t("furniture.wardrobe.wardrobe4"),
              component: ShelfWardrobe,
            },
            {
              name: t("furniture.wardrobe.wardrobe5"),
              component: ClosetWardrobe,
            },
          ],
        },
        {
          id: "shelf",
          name: t("furniture.shelfs.name"),
          icon: <LuLibrary size={20} />,
          components: [
            { name: t("furniture.shelfs.shelf1"), component: ClassicShelf },
            { name: t("furniture.shelfs.shelf2"), component: ModernShelf },
          ],
        },
      ],
    },
    electronics: {
      name: t("furniture.electronicsName"),
      icon: <FaTv size={20} />,
      items: [
        {
          id: "pc",
          name: t("furniture.pcs.name"),
          icon: <FaDesktop size={20} />,
          components: [
            { name: t("furniture.pcs.pc1"), component: DesktopPC },
            { name: t("furniture.pcs.pc2"), component: Laptop },
            { name: t("furniture.pcs.pc3"), component: GamingPC },
          ],
        },
        // {
        //   id: "tv",
        //   name: "Телевізори",
        //   icon: <FaTv size={20} />,
        //   components: [{ name: "Телевізор", component: <FlatTV /> }],
        // },
        // {
        //   id: "lamp",
        //   name: "Лампи",
        //   icon: <LuLamp size={20} />,
        //   components: [
        //     { name: "Настільна лампа", component: <DeskLamp /> },
        //     { name: "Сучасна LED лампа", component: <ModernLamp /> },
        //     { name: "Підлогова лампа", component: <FloorLamp /> },
        //   ],
        // },
      ],
    },
    decor: {
      name: t("furniture.decorName"),
      icon: <RiPlantFill size={20} />,
      items: [
        {
          id: "plant",
          name: t("furniture.plants.name"),
          icon: <RiPlantLine size={20} />,
          components: [
            { name: t("furniture.plants.plant1"), component: CactusPlant },
            { name: t("furniture.plants.plant2"), component: LeafyPlant },
            {
              name: t("furniture.plants.plant3"),
              component: FloweringPlant,
            },
          ],
        },
        {
          id: "rug",
          name: t("furniture.rugs.name"),
          icon: <PiRug size={20} />,
          components: [
            { name: t("furniture.rugs.rug1"), component: OrientalRug },
            { name: t("furniture.rugs.rug2"), component: ModernRug },
          ],
        },
      ],
    },
    gaming: {
      name: t("furniture.gamingName"),
      icon: <FaGamepad size={20} />,
      items: [
        {
          id: "beanbag",
          name: t("furniture.beanbags.name"),
          icon: <FaChair size={20} />,
          components: [
            {
              name: t("furniture.beanbags.beanbag1"),
              component: RoundPouf,
            },
            {
              name: t("furniture.beanbags.beanbag2"),
              component: SquarePouf,
            },
            { name: t("furniture.beanbags.beanbag3"), component: StarPouf },
          ],
        },
        {
          id: "wheel",
          name: t("furniture.wheels.name"),
          icon: <GiSteeringWheel size={20} />,
          components: [
            {
              name: t("furniture.wheels.wheel1"),
              component: SportSteeringWheel,
            },
            {
              name: t("furniture.wheels.wheel2"),
              component: RacingSteeringWheel,
            },
          ],
        },
        {
          id: "arcade",
          name: t("furniture.arcades.name"),
          icon: <SiApplearcade size={20} />,
          components: [
            {
              name: t("furniture.arcades.arcade1"),
              component: ClassicArcade,
            },
            {
              name: t("furniture.arcades.arcade2"),
              component: RacingArcade,
            },
          ],
        },
      ],
    },
  };

  const filteredCategories = Object.values(categories)
    .map((category) => {
      const filteredItems = category.items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.components.some((comp) =>
            comp.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
      return { ...category, items: filteredItems };
    })
    .filter((category) => category.items.length > 0);

  return (
    <PaletteContainer>
      <PaletteHeader>{t("catalog.title")}</PaletteHeader>
      <SearchInput
        placeholder={t("catalog.placeholder")}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <CategoryList>
        {filteredCategories.map((category) => (
          <CategoryItem key={category.name}>
            <CategoryHeader
              $isActive={expandedCategory === category.name}
              onClick={() =>
                setExpandedCategory(
                  expandedCategory === category.name ? null : category.name
                )
              }
            >
              <CategoryIcon>{category.icon}</CategoryIcon>
              <CategoryName>{category.name}</CategoryName>
              <CategoryArrow>
                {expandedCategory === category.name ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </CategoryArrow>
            </CategoryHeader>
            <CategoryContent $isOpen={expandedCategory === category.name}>
              {category.items.map((item) => (
                <div key={item.name}>
                  <SubcategoryHeader
                    $isActive={expandedSubcategory === item.name}
                    onClick={() =>
                      setExpandedSubcategory(
                        expandedSubcategory === item.name ? null : item.name
                      )
                    }
                  >
                    <FurnitureIcon>{item.icon}</FurnitureIcon>
                    <SubcategoryName>{item.name}</SubcategoryName>
                    <CategoryArrow>
                      {expandedSubcategory === item.name ? (
                        <FaChevronUp size={12} />
                      ) : (
                        <FaChevronDown size={12} />
                      )}
                    </CategoryArrow>
                  </SubcategoryHeader>
                  <SubcategoryContent
                    $isOpen={expandedSubcategory === item.name}
                  >
                    {item.components.map((component) => (
                      <div key={component.name}>
                        <FurnitureItem
                          onClick={() =>
                            setExpandedFurniture(
                              expandedFurniture === component.name
                                ? null
                                : component.name
                            )
                          }
                          $isActive={expandedFurniture === component.name}
                        >
                          <FurnitureName>{component.name}</FurnitureName>
                          <CategoryArrow>
                            {expandedFurniture === component.name ? (
                              <FaChevronUp size={12} />
                            ) : (
                              <FaChevronDown size={12} />
                            )}
                          </CategoryArrow>
                        </FurnitureItem>
                        {expandedFurniture === component.name && (
                          <VariantWrapper>
                            <DefaultVariantBox
                              onClick={(e) => {
                                e.stopPropagation();
                                onAddToRoom({
                                  id: item.id,
                                  name: component.name,
                                  component: component.component,
                                  positions: component.positions,
                                  rotation: 0,
                                });
                              }}
                            >
                              <div>
                                <component.component rotation={0} />
                              </div>
                            </DefaultVariantBox>
                          </VariantWrapper>
                        )}
                      </div>
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
