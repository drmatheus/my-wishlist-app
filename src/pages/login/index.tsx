import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  StyleSheet,
  View,
  Text,
  Button,
  StatusBar,
  ScrollView,
} from "react-native";
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

export const Login = ({ navigation }: any) => {
  const loginFormSchema = yup.object().shape({
    email: yup
      .string()
      .min(10, "Email must be at least 10 characters")
      .required("Email is required")
      .email("Invalid Email"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onBlur", resolver: yupResolver(loginFormSchema) });

  const onSubmit = async (data: any) => {
    try {
      const login = await api.post("login/", data);
      // localStorage.setItem("@TOKEN", JSON.stringify(login.data.token));
      // localStorage.setItem("@USERID", JSON.stringify(login.data.user.id));

      // setUserData(login.data.user);
      // showMessage({
      //   message: "Welcome!",
      //   description: "Register completed with success!",
      //   type: "success",
      // });

      navigation.navigate("Home");
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
        <StyledTitleForm>Login</StyledTitleForm>
        <StatusBar translucent />
        <StyledViewForm>
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

          <StyledButton
            onPress={handleSubmit(onSubmit)}
            disabled={!isDirty || !isValid}
          >
            <StyledButtonText>Sing in</StyledButtonText>
          </StyledButton>
        </StyledViewForm>

        <StyledViewForm>
          <StyledTitleText2>Don't have an account? </StyledTitleText2>
          <StyledTitleText2>Sign up now! </StyledTitleText2>
          <StyledButton
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <StyledButtonText>Register</StyledButtonText>
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
    // paddingTop: StatusBar.currentHeight,
  },
});
