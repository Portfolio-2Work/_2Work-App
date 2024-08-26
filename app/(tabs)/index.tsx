import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Image,
  GestureResponderEvent,
} from "react-native";

import { Formik } from "formik";
import * as yup from "yup";

import TextField from "../../components/Fields/TextField";

export default function LoginScreen() {
  const handleLogin = (values: { email: string; password: string }) => {
    console.log(values);
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("Obrigatório"),
    password: yup.string().trim().required("Obrigatório"),
  });

  return (
    <>
      <Image
        source={require("@/assets/images/hard-working-team.png")}
        className="h-[300px]"
      />
      <Formik
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
              error={values.password}
              label="Senha"
              placeholder="Informe a sua senha"
              value={values.password}
              onChange={handleChange("password")}
              maxLength={30}
              autoCapitalize="none"
              secureTextEntry
            />
            <div className="flex-grow" />
            <Button title="Entrar" onPress={() => handleSubmit()} />
          </View>
        )}
      </Formik>
    </>
  );
}
