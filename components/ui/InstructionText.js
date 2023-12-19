import { Text, StyleSheet } from "react-native";
import Colors from "../../util/colors";

function InstructionText(props) {
  return <Text style={[styles.instructionText, props.style]}>{props.children}</Text>
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.secondry500,
    fontSize: 24
  },
});