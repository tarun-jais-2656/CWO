import React, { Component } from 'react';
import {
    Dimensions,
    Text,
    View,
    ImageBackground,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import bg from "../../assets/images/bg.png"
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

const data = [
    {
        title: 'Hey...I am Tutorial Screen1.',
        description: '',
        image: bg,
        tit: 'Get Started'
    },
    {
        title: 'Hey...I am Tutorial Screen2.',
        description: '',
        image: bg,
        tit: 'Next'
    },
    {
        title: 'Hey...I am Tutorial Screen3.',
        description: '',
        image: bg,
        tit: 'Finish'
    },
];

export class TutorialScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
        };
    }
    _storeData = async () => {
        try {
            await AsyncStorage.setItem('isTutorial', 'true');
        } catch (error) {
            Error
            console.log('error');
        }
    };

    componentDidMount() {
        this._storeData();
    }

    goToNext = () => {
        this.setState(prevState => ({
            currentIndex: this.state.currentIndex + 1,
        }));
        if (this.state.currentIndex < data.length - 1) {
            this.flatListRef.scrollToIndex({ index: this.state.currentIndex + 1 });
        } else {
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'Signin' }]
            })
        }
    };

    renderItems = ({ item }) => {
        return (
            <View style={styles.slide}>
                <ImageBackground source={item.image} style={styles.image}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', bottom: 60, right: 30 }}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.goToNext}
                        >
                            <Text style={styles.buttonText}>{item.tit}</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    };
    render() {
        const { tit } = this.state;
        return (
            <View style={styles.container}>
                <FlatList
                    ref={ref =>
                        this.flatListRef = ref
                    }
                    data={data}
                    renderItem={this.renderItems}
                    keyExtractor={item => item.title}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    onMomentumScrollEnd={event => {
                        const index = Math.floor(event.nativeEvent.contentOffset.x / width);
                        this.setState({ currentIndex: index });
                    }}
                />
                <View style={styles.paginationContainer}>

                    <View style={styles.pagination}>
                        {
                            data.map((_, index) => (
                                <View
                                    key={index}
                                    style={[
                                        styles.paginationDot,
                                        this.state.currentIndex === index && styles.activeDot,
                                    ]}
                                />
                            ))
                        }
                    </View>

                </View>
            </View>
        );
    }
}

export default TutorialScreen;