import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  error: {
    borderColor: "#ff0000",
  },
  success: {
    borderColor: "#00ff00",
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  return <NativeTextInput style={styles.input} {...props} />;
};

export default TextInput;
