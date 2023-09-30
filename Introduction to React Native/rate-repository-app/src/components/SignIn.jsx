import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import { Alert, Button, Pressable, StyleSheet, View } from "react-native";
import * as yup from "yup";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
  },
  signUpButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "blue",
    borderRadius: 5,
    alignItems: "center",
  },
  signUpText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});
const SignIn = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={() => Alert.alert("Sign In")}
      validationSchema={validationSchema}
    >
      {(props) => (
        <View style={styles.container}>
          <Text>Username</Text>
          <FormikTextInput name='username' label='username' />
          <Text>Password</Text>
          <FormikTextInput name='password' label='Password' secureTextEntry />
          <Pressable style={styles.signUpButton} onPress={props.handleSubmit}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;
