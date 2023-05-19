import React from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputForm } from "../../components/input";
import {
  StyledButton,
  StyledButtonText,
  StyledTitleForm,
  StyledViewForm,
} from "../../styles/form/styles";
import { StyledTitleText2 } from "../../components/input/styles";
import { api } from "../../services";
import { showMessage } from "react-native-flash-message";

export const Register = ({ navigation }: any) => {
  const registerFormSchema = yup.object().shape({
    email: yup
      .string()
      .min(10, "Email must be at least 10 characters")
      .required("Email is required")
      .email("Invalid Email"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match"),
    first_name: yup
      .string()
      .min(2, "First name must be at least 2 characters")
      .required("First name is required"),
    last_name: yup
      .string()
      .min(2, "Last name must be at least 2 characters")
      .required("Last name is required"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onBlur", resolver: yupResolver(registerFormSchema) });

  const onSubmit = async (data: any) => {
    try {
      await api.post("users/", data);

      setTimeout(() => {
        navigation.navigate("Login");
      }, 3500);

      showMessage({
        message: "Registered",
        description: "Redirecting to login...",
        type: "success",
        duration: 3300,
      });
    } catch (error: any) {
      showMessage({
        message: "Something go wrong :(",
        description: error.response.data.message,
        type: "warning",
        duration: 3300,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{
          width: "100%",
          alignSelf: "center",
          paddingTop: 0,
          marginTop: 0,
        }}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 0,
          marginTop: 0,
        }}
      >
        <StyledTitleForm>Register</StyledTitleForm>
        <StatusBar translucent />
        <StyledViewForm>
          <Controller
            control={control}
            name="first_name"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputForm
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                errors={errors.first_name}
                title="First name"
                placeholder="First name"
              />
            )}
          />

          <Controller
            control={control}
            name="last_name"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputForm
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                errors={errors.last_name}
                title="Last name"
                placeholder="Last name"
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputForm
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                errors={errors.email}
                title="Email"
                placeholder="Email"
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputForm
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                errors={errors.password}
                title="Password"
                placeholder="Password"
              />
            )}
          />

          <Controller
            control={control}
            name="password_confirmation"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputForm
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                errors={errors.password_confirmation}
                title="Password confirmation"
                placeholder="Password confirmation"
              />
            )}
          />

          <StyledButton
            onPress={handleSubmit(onSubmit)}
            disabled={!isDirty || !isValid}
          >
            <StyledButtonText>Sing Up</StyledButtonText>
          </StyledButton>
        </StyledViewForm>

        <StyledViewForm>
          <StyledTitleText2>Already have an account? </StyledTitleText2>
          <StyledTitleText2>Sign in! </StyledTitleText2>
          <StyledButton
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <StyledButtonText>Login</StyledButtonText>
          </StyledButton>
        </StyledViewForm>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#23354A",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingHorizontal: 0,
    // paddingTop: StatusBar.currentHeight,
  },
});
