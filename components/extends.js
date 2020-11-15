import React, { useEffect } from 'react';
import { StyleSheet, Image, View, Dimensions, Platform, Text, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const platform = Platform.OS;

const Width = platform == 'web' ? Dimensions.get('window').width*0.8: Dimensions.get('window').width;
const Height = platform == 'web' ? 40 : 40;
 
const images = [
    { title: require('../assets/images/tien-ich/luu-tru.jpg'),content: 'Tin đã lưu'},
    { title: require('../assets/images/tien-ich/nap-tien.jpg'),content: 'Nạp tiền'},
    { title: require('../assets/images/tien-ich/sao.jpg'),content: 'Ưu đãi'},
    { title: require('../assets/images/tien-ich/tin-dac-biet.jpg'),content: 'Tin đặc biệt'},
    { title: require('../assets/images/tien-ich/tin-quan-tam.jpg'),content: 'Tin quan tâm'}
];
// function renderPage(navigation, props) {
//     useEffect(()=> {
//         console.log(props)
//         // console.log(JSON.stringify(navigation))
//     })
//     return (
//         <View key={props.title} style={{  marginRight: platform=='web'? 100: 10, marginLeft: 10,  flexDirection: platform !='web' ? 'row' : '',}}>
//             <TouchableOpacity
//                 onPress={()=> navigation.navigate("Bookmarks")}
//             >
//                 <View style={styles.box}>
//                     <Image style={{ width: Height, height: Height, alignItems: 'center', justifyContent: 'center'}} source={props.title} />
//                     <Text style={styles.text}>{props.content}</Text>
//                 </View>
//             </TouchableOpacity>
//         </View>
//         // <Text>Hello</Text>
//     );
// }

export default function ExtendComponent ({navigation}) {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {images.map((x) => {
                    // console.log(x.title)
                    // renderPage(navigation, x)
                    <View key={x.title} style={{  marginRight: platform=='web'? 100: 10, marginLeft: 10,  flexDirection: platform !='web' ? 'row' : '',}}>
                        <TouchableOpacity
                            onPress={()=> navigation.navigate("Bookmarks")}
                        >
                            <View style={styles.box}>
                                <Image style={{ width: Height, height: Height, alignItems: 'center', justifyContent: 'center'}} source={x.title} />
                                <Text style={styles.text}>{x.content}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                })}
            </ScrollView>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: platform == 'web' ? 1200 : '100%',
        alignItems: 'center',
        paddingLeft: platform == 'web' ? Width*0.1 : 0,
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginBottom: 5
    },
    box: {
        height: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        width: 80,
        textAlign: 'center',
        marginTop: 2,
        height: 35
    }
});