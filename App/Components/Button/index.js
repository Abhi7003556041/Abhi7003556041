//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { COLORS } from '../../Constants/Colors';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';

// create a component
const Button = ({ loader = false, title = '', style = {}, textStyle = {}, loaderColor = COLORS.primaryFontColor, onPress }) => {
    return (
        <TouchableOpacity
            disabled={loader}
            style={[styles.btnStyle, style]}
            onPress={onPress ? onPress : null}
        >
            {
                loader ?
                    <ActivityIndicator
                        size="small"
                        color={loaderColor}
                    />
                    :
                    <Text
                        style={[styles.btnText, textStyle]}
                        allowFontScaling={false}
                    >{title}</Text>
            }
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    btnStyle: {
        height: moderateScale(45),
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(20),
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryThemeColor,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    btnText: {
        fontSize: 14,
        fontFamily: FONTS.bold,
        color: COLORS.secondaryThemeColor,
    },
});

//make this component available to the app
export default Button;
