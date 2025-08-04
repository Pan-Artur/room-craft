import {
  PanelContainer,
  PanelHeader,
  ControlButton,
  ButtonGroup,
  ThemeSelector,
  InstructionText,
} from "./styles/ManagmentPanel.styled";
import { useTranslation } from "react-i18next";

export const ManagementPanel = ({
  mode,
  setMode,
  selectedItem,
  setSelectedItem,
  onDelete,
  floorTheme,
  setFloorTheme,
}) => {
  const { t } = useTranslation();

  return (
    <PanelContainer>
      <PanelHeader>{t("managmentPanel.title")}</PanelHeader>

      <ButtonGroup>
        <ControlButton $active={mode === "add"} onClick={() => setMode("add")}>
          {t("managmentPanel.button1")}
        </ControlButton>

        <ControlButton
          $active={mode === "move"}
          onClick={() => setMode("move")}
          disabled={!selectedItem}
        >
          {t("managmentPanel.button2")}
        </ControlButton>

        <ControlButton
          $active={mode === "delete"}
          onClick={() => {
            if (selectedItem) {
              onDelete(selectedItem.id);
              setSelectedItem(null);
            }
            setMode("delete");
          }}
        >
          {t("managmentPanel.button3")}
        </ControlButton>
      </ButtonGroup>

      <ThemeSelector>
        <label>{t("managmentPanel.subtitle")}</label>
        <select
          value={floorTheme}
          onChange={(e) => setFloorTheme(e.target.value)}
        >
          <option value="light"> {t("managmentPanel.theme1")}</option>
          <option value="dark">{t("managmentPanel.theme2")}</option>
          <option value="wood">{t("managmentPanel.theme3")}</option>
          <option value="tile">{t("managmentPanel.theme4")}</option>
        </select>
      </ThemeSelector>

      <InstructionText>
        {mode === "add" &&
          `${t("managmentPanel.text1-1")}\n${t("managmentPanel.text1-2")}`}
        {mode === "move" &&
          `${t("managmentPanel.text2-1")}\n${t("managmentPanel.text2-2")}`}
        {mode === "delete" && `${t("managmentPanel.text3")}`}
      </InstructionText>
    </PanelContainer>
  );
};
