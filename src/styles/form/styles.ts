import styled, { css } from "styled-components/native";

export const StyledViewForm = styled.View`
  background-color: #23354a;
  letter-spacing: 0.5px;
  padding: 32px 16px;
  width: 90%;
  margin-bottom: 32px;
`;

export const StyledTitleForm = styled.Text`
  width: 90%;
  font-size: 44px;
  color: #fff;
  margin: 16px 0px;
  padding: 0px 10px;
  font-weight: 600;
  letter-spacing: 16px;
`;

interface ButtonProps {
  disabled?: boolean;
}

export const StyledButton = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  background-color: #23354a;
  height: 64px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: 4px;
  align-items: center;
  justify-content: center;
  border: solid 3px #fff;

  ${(props) =>
    props.disabled &&
    css`
      background-color: gray;
      opacity: 0.25;
    `}
`;

export const StyledButtonText = styled.Text`
  color: #ffffff;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.8px;
`;
