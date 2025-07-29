import { StyledContainer } from "./StyledContainer";

export const Container = ({ className, children }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};