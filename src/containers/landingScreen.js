import React, {memo} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  FlatList,
  ScrollView,
} from 'react-native';

const landingScreen = (props) => {
  const {push, navigate} = props.navigation;
  const array = [];

  return (
    <View style={styles.container}>
      <FlatList
        style={{borderWidth: 1}}
        data={array}
        keyExtractor={(e) => e.toString()}
        initialNumToRender={4}
        maxToRenderPerBatch={5}
        updateCellsBatchingPeriod={5}
        windowSize={1}
        renderItem={({item, index}) => <MemoText item={item} />}
        onEndReached={() => console.log('Have the end of the flatlist')}
        onEndReachedThreshold={0.2}
        ListEmptyComponent={() => <Text>Empty View!</Text>}
      />
    </View>
  );
};

export default landingScreen;

const MemoText = memo(({item}) => {
  console.log(`item: ${item} is rendering`);
  return (
    <View style={{borderWidth: 1, height: 450}}>
      <Text>{item}</Text>
    </View>
  );
});

const styles = {
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
};
