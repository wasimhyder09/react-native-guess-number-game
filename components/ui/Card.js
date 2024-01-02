import { View, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../util/colors';

function Card(props) {
  return (
    <View style={styles.card}>{props.children}</View>
  );
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 24,
    marginTop: deviceWidth < 300 ? 18 : 36,
    backgroundColor: Colors.primary700,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  }
});