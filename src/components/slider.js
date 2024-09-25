import React, { Component} from "react";
import { FlatList, Image, Text, View } from "react-native";
import grp from '../assets/images/grp.png'
import time from '../assets/images/time.png'
import jar from '../assets/images/jar.png'




const obj=[
    {
        iconname: grp,
        text1:'Aesthetical',
        text2:'Graphics',
    },
    {
        iconname: time,
        text1:'Real Time',
        text2:'statistics',
    },
    {
        iconname: jar,
        text1:'Track eco',
        text2:'Usage',
    },
]

export default class Slider extends Component{

    renderItem = ({ item }) =>{
        return(
            <View style={{margin:20,padding:5,borderRadius:20,flexDirection:'row'}}>
                <Image
                source={item.iconname}
                style={{height:20,width:20,marginTop:10}}/>  
                <View style={{marginStart:10}}>  
                    <Text style={{color:'white'}}>
                        {item.text1}
                    </Text>
            
                    <Text style={{color:'white'}}>
                        {item.text2}
                    </Text>
                </View>
            </View>
        )
    }

    render(){
        return(
            <FlatList
            data={obj}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={this.renderItem}
            />
        )
    }
}