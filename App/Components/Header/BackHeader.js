//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { COLORS } from '../../Constants/Colors';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import NavigationService from '../../Services/Navigation';
import Icon, { IconType } from '../Icon';

// create a component
const BackHeader = ({ backgroundColor = COLORS.primaryThemeColor, tintColor = COLORS.secondaryThemeColor, title = '', 
barStyle = 'light-content', onBackPress, backIconName = 'arrowleft', backIconType = IconType.AntDesign, backIconSize = 22 }) => {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: backgroundColor }]}>
            <StatusBar
                backgroundColor={backgroundColor}
                barStyle={barStyle}
            />
            <View
                style={{
                    height: moderateScale(45),
                    // flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: moderateScale(10)
                }}
            >
                <TouchableOpacity
                    onPress={() => onBackPress ? onBackPress() : NavigationService.back()}
                >
                    <Icon
                        name={backIconName}
                        type={backIconType}
                        size={backIconSize}
                        color={tintColor}
                    />
                </TouchableOpacity>

                <View
                    style={{
                        flex: 1,
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{
                            fontFamily: FONTS.bold,
                            color: tintColor,
                            fontSize: 16
                        }}
                        allowFontScaling={false}
                    >{title}</Text>
                </View>
                <View
                    style={{
                        width: 25
                    }}
                />
            </View>

        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // height: moderateScale(60),
    },
});

//make this component available to the app
export default BackHeader;
