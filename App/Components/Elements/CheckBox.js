//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale } from '../../Constants/PixelRatio';
import Icon, { IconType } from '../Icon';

// create a component
const CheckBox = ({ checked = false, activeColor = 'blue', inactiveColor = '#999', tintColor = '#fff', onChange }) => {
    return (
        <TouchableOpacity
            style={[styles.container, {
                backgroundColor: checked ? activeColor : null,
                borderColor: checked ? activeColor : inactiveColor
            }]}
            onPress={() => onChange ? onChange(!checked) : null}
        >
            {
                checked ?
                    <Icon
                        name='check'
                        type={IconType.Feather}
                        size={13}
                        color={tintColor}
                    />
                    :
                    null
            }
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: moderateScale(16),
        width: moderateScale(16),
        borderWidth: 2.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },
});

//make this component available to the app
export default CheckBox;
