import styled from "styled-components";

export const LanguageSelectorWrapper = styled.div`
  position: relative;
  display: inline-block;
  z-index: 998;

  margin-top: 15px;

  @media screen and (min-width: 768px) {
    display: block;
    margin-top: 0;
  }
`;

export const LangButton = styled.button`
  background-color: white;
  color: black;
  font-size: 1rem;
  border: none;
  border-radius: 12px;
  padding: 6px 12px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background-color: #f0f0f0;
  }

  svg {
    font-size: 1rem;
  }
`;

export const LangButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const LangDropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 100px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  list-style: none;
  padding: 6px 0;
  margin: 4px 0 0 0;
  overflow: hidden;
  opacity: ${({ open }) => (open ? 1 : 0)};
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-5px)")};
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
  transition: opacity 0.25s ease, transform 0.25s ease;
`;

export const LangOption = styled.li`
  padding: 10px 16px;
  cursor: pointer;
  color: black;
  transition: background 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;
