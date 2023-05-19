import {
  StyledErrorText,
  StyledTextInput,
  StyledTitleText,
  StyledView,
} from "./styles";

export const InputForm = ({
  onChange,
  onBlur,
  value,
  errors,
  title,
  placeholder,
}: any) => {
  return (
    <StyledView>
      <StyledTitleText>{title}</StyledTitleText>
      <StyledTextInput
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        secureTextEntry={title.toLowerCase().includes("password")}
      />
      {errors && <StyledErrorText>*{String(errors?.message)}</StyledErrorText>}
    </StyledView>
  );
};
