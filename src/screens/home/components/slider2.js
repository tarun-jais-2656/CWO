import React, { Component} from "react";
import { FlatList, Image, Text, View } from "react-native";
import mic from '../../../assets/images/mic.png'
import timer from '../../../assets/images/timer.png'




const obj=[
    {
        iconname: mic,
        text1:'Create',
        text2:'Campaign',
    },
    {
        iconname: timer,
        text1:'One time',
        text2:'Triger',
    },
    {
        iconname: mic,
        text1:'Create',
        text2:'Campaign',
    },
    {
        iconname: timer,
        text1:'One time',
        text2:'Triger',
    },
    
]

export default class Slider2 extends Component{

    renderItem = ({ item }) =>{
        return(
            <View style={{margin:10,padding:12,borderRadius:8,flexDirection:'row',backgroundColor:'white',}}>
                <View style={{backgroundColor: '#46A4BA',borderRadius:25,}}>
                <Image
                source={item.iconname}
                style={{height:24,width:24,margin:10,}}/>  
                </View>
                <View style={{marginStart:10,marginTop:5}}>  
                    <Text style={{color:'#0E1F2C',fontWeight:'600'}}>
                        {item.text1}
                    </Text>
            
                    <Text style={{color:'#0E1F2C',fontWeight:'600'}}>
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