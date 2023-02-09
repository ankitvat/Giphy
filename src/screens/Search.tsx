import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {CustomText} from '../components/CustomText';
import {CustomSearch} from '../components/CustomSearch';
import axios from 'axios';
import {API_KEY} from '../utils/constants';
import ImagePreview from '../components/ImagePreview';

const Search = () => {
  const [search, setSearch] = React.useState<string>('');
  const [data, setData] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const baseUrl = 'http://api.giphy.com/v1/gifs';
  const fetchData = async (input: string) => {
    setLoading(true);
    try {
      const res = await axios(`${baseUrl}/search`, {
        params: {api_key: API_KEY, q: input},
      });
      setData(res?.data?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  let debounceHandler: any = null;
  const searchFunc = (text: string) => {
    setSearch(text);
  };
  const didMount = React.useRef(false);

  //useDebounce
  React.useEffect(() => {
    if (didMount.current) {
      debounceHandler = setTimeout(() => {
        fetchData(search);
      }, 1000);
      //cleanUp function
      return () => {
        clearTimeout(debounceHandler);
      };
    } else {
      didMount.current = true;
    }
  }, [search]);

  const renderItem = ({item}: {item: any}) => {
    return <ImagePreview data={item} />;
  };

  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.container}>
        <CustomText variant="h3" text="Search" />
        <CustomSearch
          length={search.length}
          value={search}
          placeholder="Enter keyword ..."
          onClear={() => setSearch('')}
          autoFocus={true}
          onChangeText={text => searchFunc(text)}
        />
        <View style={styles.listContainer}>
          {loading ? (
            <View style={styles.loader}>
              <ActivityIndicator size={'small'} />
            </View>
          ) : (
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(_, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              contentContainerStyle={{
                paddingBottom: '3%',
              }}
              refreshControl={
                <RefreshControl
                  refreshing={loading}
                  onRefresh={() => fetchData('')}
                />
              }
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  container: {
    paddingHorizontal: '4%',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingTop: '3%',
  },
  listContainer: {
    width: '100%',
    height: '84%',
  },
  loader: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
