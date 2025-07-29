import styled from 'styled-components';

export const PanelContainer = styled.div`
  width: 250px;
  background: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PanelHeader = styled.h3`
  color: #616161;
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #E0E0E0;
`;

export const ControlButton = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  background: ${props => props.$active ? '#4DB6AC' : '#F5F5F5'};
  color: ${props => props.$active ? '#FFFFFF' : '#616161'};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  width: 100%;
  
  &:hover {
    background: ${props => props.$active ? '#3DA89D' : '#E0E0E0'};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ThemeSelector = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  label {
    font-size: 0.875rem;
    color: #616161;
  }
  
  select {
    padding: 0.5rem;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    background: #FFFFFF;
  }
`;

export const InstructionText = styled.div`
  background: #F5F5F5;
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  color: #616161;
  white-space: pre-line;
`;