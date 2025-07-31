import {
  PanelContainer,
  PanelHeader,
  ControlButton,
  ButtonGroup,
  ThemeSelector,
  InstructionText
} from './styles/ManagmentPanel.styled';

export const ManagementPanel = ({
  mode,
  setMode,
  selectedItem,
  setSelectedItem,
  onDelete,
  floorTheme,
  setFloorTheme
}) => {
  return (
    <PanelContainer>
      <PanelHeader>Управління</PanelHeader>
      
      <ButtonGroup>
        <ControlButton
          $active={mode === 'add'}
          onClick={() => setMode('add')}
        >
          Додати
        </ControlButton>
        
        <ControlButton
          $active={mode === 'move'}
          onClick={() => setMode('move')}
          disabled={!selectedItem}
        >
          Перемістити
        </ControlButton>
        
        <ControlButton
          $active={mode === 'delete'}
          onClick={() => {
            if (selectedItem) {
              onDelete(selectedItem.id);
              setSelectedItem(null);
            }
            setMode('delete');
          }}
        >
          Видалити
        </ControlButton>
      </ButtonGroup>
      
      <ThemeSelector>
        <label>Тема підлоги:</label>
        <select 
          value={floorTheme} 
          onChange={(e) => setFloorTheme(e.target.value)}
        >
          <option value="light">Світла</option>
          <option value="dark">Темна</option>
          <option value="wood">Дерево</option>
          <option value="tile">Плитка</option>
        </select>
      </ThemeSelector>
      
      <InstructionText>
        {mode === 'add' && "1. Виберіть меблі з каталогу\n2. Клікніть на сітку для розміщення"}
        {mode === 'move' && "1. Виберіть меблі на сітці\n2. Клікніть на нову клітинку"}
        {mode === 'delete' && "Клікніть на меблі для видалення"}
      </InstructionText>
    </PanelContainer>
  );
};