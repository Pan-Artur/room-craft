import styled from "styled-components";

export const PaletteContainer = styled.div`
  width: 280px;
  background: #FFFFFF;
  border-right: 1px solid #E0E0E0;
  overflow-y: auto;
  padding: 16px;
  box-shadow: 2px 0 8px rgba(0,0,0,0.05);
  position: fixed;
  left: 50%;
  top: 80px;
  bottom: 20px;
  transform: translateX(-50%);
  border-radius: 8px;
  height: calc(100vh - 100px); 

  @media (max-width: 767px) {
    width: 250px;
  }

  @media (max-width: 480px) {
    position: relative;
    width: 100%;
    height: auto;
    max-height: 400px;
    border-right: none;
    border-bottom: 1px solid #E0E0E0;
    top: auto;
    bottom: auto;
    left: auto;
    transform: none;
    margin: 20px auto;
  }
`;

export const PaletteHeader = styled.h3`
  color: #616161;
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 600;
  padding: 0 8px;
  text-align: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  margin-bottom: 16px;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  transition: border 0.2s;

  &:focus {
    border-color: #4DB6AC;
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
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const FurniturePreview = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border: 1px solid #eee;
  border-radius: 4px;
  background-color: white;
  
  svg {
    width: 30px;
    height: 30px;
  }
`;

export const FurnitureIcon = styled.div`
  margin-right: 10px;
  color: #4DB6AC;
`;

export const FurnitureName = styled.span`
  font-size: 14px;
  color: #616161;
`;