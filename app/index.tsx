import { View, Image } from "react-native";

import { Formik } from "formik";
import * as yup from "yup";

import TextField from "@/components/Fields/TextField";
import CustomPressable from "@/components/Layout/CustomPressable";
import { asyncStoreData, asyncRemoveData } from "@/utils/localStorage";

import { login } from "@/api/login";

export default function LoginScreen() {
  const validationSchema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("Obrigatório"),
    password: yup.string().trim().required("Obrigatório"),
  });

  async function handleLogin(values: { email: string; password: string }) {
    const request = await login(values);

    if (!request.data.IsSuccess) {
      await asyncRemoveData("user");
    } else {
      await asyncStoreData("user", JSON.stringify(request.data.Data));
    }
  }

  return (
    <>
      <Image
        source={require("@/assets/images/hard-working-team.png")}
        className="!h-[300px]"
      />
      <Formik
        validateOnMount={false}
        enableReinitialize
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <View className="flex-1 p-4 bg-white">
            <TextField
              error={errors.email}
              label="E-mail"
              placeholder="Informe seu e-mail"
              value={values.email}
              onChange={handleChange("email")}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextField
              error={errors.password}
              label="Senha"
              placeholder="Informe a sua senha"
              value={values.password}
              onChange={handleChange("password")}
              maxLength={30}
              autoCapitalize="none"
              secureTextEntry
            />
            <div className="flex-grow" />
            <CustomPressable onPress={() => handleSubmit()} label="Entrar" />
          </View>
        )}
      </Formik>
    </>
  );
}
