import { Text, StyleSheet, Platform } from "react-native";
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
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    //There is an alternate way to implement above logic
    borderWidth: Platform.select({ android: 2, ios: 0 }),
    borderColor: Colors.secondry500,
    padding: 12,
    maxWidth: '80%',
    width: 300
  }
});