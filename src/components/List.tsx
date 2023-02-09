/* eslint-disable react/no-unstable-nested-components */
import React, {useState, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Platform,
  FlatList,
  Alert,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
var dimWidth = Dimensions.get('window').width * 0.9;
import {API_KEY} from '../utils/constants';
import {CustomText} from './CustomText';
import ImagePreview from './ImagePreview';
const List = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);
  const baseUrl = 'http://api.giphy.com/v1/gifs';

  const fetchData = useCallback(
    async (off: number) => {
      try {
        const res = await axios(`${baseUrl}/trending`, {
          params: {
            api_key: API_KEY,
            offset: off,
            limit: 40,
          },
        });

        setData([...data, ...res?.data?.data]);
      } catch (error) {
        Alert.alert('Downtime');
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    },
    [data],
  );

  useEffect(() => {
    setLoading(true);
    fetchData(0);
  }, []);

  const renderItem = ({item}: {item: any; index: number}) => {
    return <ImagePreview data={item} />;
  };

  const ListHeaderComponent = () => {
    return (
      <View style={styles.header}>
        <CustomText variant="h4" text="Trending Gif's" medium />
      </View>
    );
  };
  const ListFooter = () => {
    return (
      <ActivityIndicator
        size={'small'}
        style={{
          marginTop: '10%',
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size={'small'} />
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          ListHeaderComponent={ListHeaderComponent}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={{
            paddingBottom: '3%',
          }}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={() => fetchData(0)}
            />
          }
          onEndReached={() => {
            setOffset(offset + 20);
            fetchData(offset + 20);
          }}
          ListFooterComponent={ListFooter}
        />
      )}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? '90%' : '82%',
    width: '100%',
  },

  header: {
    width: dimWidth,
    height: dimWidth / 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loader: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
