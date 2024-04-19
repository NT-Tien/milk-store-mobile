import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native'
import React from 'react'

const Category = () => {
    const types = [
        {
            id:"0",
            image:"https://www.moby.com.vn/data/bt4/sua-bau-similac-mom-eye-q-400g-huong-vani-1625398405.jpg",
            name:"Sữa bầu",
        },
        {
            id:"1",
            image:"https://dienmaythiennamhoa.vn/static/images/4.%20hinh%20sp/HinhSP2022/150020676.jpg",
            name:"Tả lót"
        },
        {
            id:"2",
            image:"https://thegioithoitrangbaby.com/wp-content/uploads/2021/12/hoa-tiet-phu-hop-danh-cho-do-so-sinh.jpg",
            name:"Đồ sơ sinh"
        },
    ]

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {types.map((item,index) => (
            <View style={{margin:10}} key={index}>
                <Image source={{uri:item.image}} style={{width:60,height:60,borderRadius:30}}/>
                <Text style={{marginTop:6,textAlign:"center"}}>{item.name}</Text>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({})