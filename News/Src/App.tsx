import React from "react";
import {SafeAreaView,Text,View,FlatList, StyleSheet,ScrollView,Image, Dimensions} from "react-native";
import news_data from "./news_data.json"
import NewsCard from "./components/NewsCard"
import NewsBannerData from "./news_banner_data.json"
function App(){
  const RenderNews= ({item}) => <NewsCard news={item}/>;
return(
<SafeAreaView style={styles.container}>
    <Text style={styles.headerText}>News</Text>
    
    <FlatList
    ListHeaderComponent={()=>(
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {NewsBannerData.map(bannerNews => (
              <Image
                style={styles.bannerImage}
                source={{uri: bannerNews.imageUrl}}
              />
            ))}
          </ScrollView>
    )}
    keyExtractor={(item,index)=>item.u_id.toString()}
      data={news_data}
      renderItem={RenderNews}
      />

  
</SafeAreaView>
);
}
const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#eceff1"
  },
  bannerImage:{
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
    },
    headerText:{
      fontWeight:"bold",
      fontSize:50
      
    }
})
export default App;