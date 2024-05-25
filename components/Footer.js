import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
const Footer = () => {
    return (
        <View style={styles.footer}>
            <View style={styles.icon}>
                <Ionicons name="logo-facebook" size={24} color={'blue'} style={{ padding: 10 }}></Ionicons>
                <Ionicons name="logo-twitter" size={24} color={'blue'} style={{ padding: 10 }}></Ionicons>
                <Ionicons name="logo-youtube" size={24} color={'red'} style={{ padding: 10 }}></Ionicons>
            </View>
            {/* <View style={{ color: 'black', fontSize: 15, flexDirection: 'row' }}>
                <Text>Tư vấn bán hàng</Text>
                <Text>1800.6068</Text>
            </View> */}
            <View>
                    <Image alt="Đã thông báo Bộ Công Thương" title="Đã thông báo Bộ Công Thương" source={{uri : "//cdn.kidsplaza.vn/media/images/logoSaleNoti.png"}}/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        marginTop : 20,
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default Footer;