import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('window').width


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    slide: {
        width,
    },
    image: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
    },
    textContainer: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        paddingTop:120,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical:20,
        color: '#fff',
    },
    description: {
        fontSize: 18,
        textAlign:'center',
        lineHeight:25,
        color: '#fff',
    },
    paginationContainer: {
        position:'absolute',
        bottom:0,
        width:'100%',
        marginVertical:120,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    button: {
        backgroundColor: '#D9D9D92A',
        paddingHorizontal:30,
        paddingVertical: 10,
        borderRadius: 15,
        position:'absolute',
    },
    buttonText: {
        color: '#fff',
        fontWeight:'bold',
        fontSize: 16,
    },
    pagination: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#888',
        marginHorizontal: 4,
        marginBottom:10
    },
    activeDot: {
        backgroundColor: 'black',
    },
});
  
export default styles