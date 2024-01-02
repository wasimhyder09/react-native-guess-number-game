import { Text, StyleSheet } from "react-native";
import Colors from "../../util/colors";

function Title(props) {
  return (
    <Text style={styles.title}>{props.children}</Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.secondry500,
    padding: 12,
    maxWidth: '80%',
    width: 300
  }
});