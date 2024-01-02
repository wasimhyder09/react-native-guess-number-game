import { Text, View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../util/colors";

function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{props.children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondry500,
    padding: deviceWidth < 300 ? 12 : 24,
    margin: deviceWidth < 300 ? 12 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberText: {
    color: Colors.secondry500,
    fontSize: deviceWidth < 300 ? 28 : 36,
    fontFamily: 'open-sans-bold'
  }
});