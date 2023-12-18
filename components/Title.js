import { Text, StyleSheet } from "react-native";
import Colors from "../util/colors";

function Title(props) {
  return (
    <Text style={styles.title}>{props.children}</Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.secondry500,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.secondry500,
    padding: 12
  }
});