import styled from "styled-components";

export const PaletteContainer = styled.div`
  width: 300px;
  background: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  overflow-y: auto;
  padding: 15px;
  height: 100%;
`;

export const PaletteHeader = styled.h3`
  color: #616161;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #E0E0E0;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1.5rem;
  border: 1px solid #E0E0E0;
  border-radius: 6px;
  font-size: 0.875rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #4DB6AC;
    box-shadow: 0 0 0 2px rgba(77, 182, 172, 0.2);
  }
`;

export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CategoryItem = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  background: ${props => props.$isActive ? '#F5F5F5' : '#FAFAFA'};
  cursor: pointer;
  user-select: none;
  transition: all 0.2s;

  &:hover {
    background: #F0F0F0;
  }
`;

export const CategoryTitle = styled.div`
  font-weight: bold;
  margin-top: 12px;
  cursor: pointer;
`;

export const CategoryIcon = styled.div`
  margin-right: 10px;
  color: #616161;
`;

export const CategoryName = styled.span`
  flex: 1;
  font-size: 15px;
  font-weight: 500;
  color: #424242;
`;

export const CategoryArrow = styled.div`
  color: #9E9E9E;
  font-size: 12px;
`;

export const CategoryContent = styled.div`
  max-height: ${props => props.$isOpen ? '1000px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: #FFFFFF;
`;

export const FurnitureItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.2s;
`;

export const FurnitureIcon = styled.div`
  margin-right: 10px;
  color: #4DB6AC;
`;

export const FurnitureName = styled.span`
  font-size: 14px;
  color: #616161;
`;

export const SubcategoryContent = styled.div`
  display: ${props => props.$isOpen ? 'block' : 'none'};
  padding-left: 32px;
  background-color: #fafafa;
`;

export const SubcategoryHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  background-color: ${props => props.$isActive ? '#f0f0f0' : 'transparent'};
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const SubcategoryName = styled.span`
  flex-grow: 1;
  margin-left: 8px;
  font-size: 14px;
`;


export const VariantWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px 16px 12px 36px;
`;

export const VariantBox = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: white;
  transition: all 0.2s;
  overflow: hidden;
  position: relative;

  &:hover {
    border-color: #4DB6AC;
    box-shadow: 0 0 0 2px rgba(77, 182, 172, 0.2);
  }

  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: ${props => `rotate(${props.$rotation || 0}deg)`};
    transform-origin: center;
  }
`;