import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const IconType = {
    Fontisto: 'Fontisto',
    MaterialIcon: 'MaterialIcon',
    EvilIcon: 'EvilIcon',
    Feather: 'Feather',
    AntDesign: 'AntDesign',
    SimpleLineIcon: 'SimpleLineIcon',
    ZocialIcon: 'ZocialIcon',
    SimpleLineIcon: 'SimpleLineIcon',
    FoundationIcon: 'FoundationIcon',
    FontAwesome5: 'FontAwesome5',
    FontAwesome: 'FontAwesome',
    Ionicon: 'Ionicon',
    MaterialCommunityIcon: 'MaterialCommunityIcon',
    Entypo: 'Entypo',
    Octicons: 'Octicons'
}

const AppIcon = type => {
    switch (type) {
        case 'Fontisto':
            return Fontisto;
        case 'MaterialIcon':
            return MaterialIcon;
        case 'EvilIcon':
            return EvilIcon;
        case 'Feather':
            return Feather;
        case 'AntDesign':
            return AntDesign;
        case 'SimpleLineIcon':
            return SimpleLineIcon;
        case 'ZocialIcon':
            return ZocialIcon;
        case 'SimpleLineIcon':
            return SimpleLineIcon;
        case 'FoundationIcon':
            return FoundationIcon;
        case 'FontAwesome5':
            return FontAwesome5;
        case 'FontAwesome':
            return FontAwesome;
        case 'Ionicon':
            return Ionicon;
        case 'MaterialCommunityIcon':
            return MaterialCommunityIcon;
        case 'Entypo':
            return Entypo;
        case 'Octicons':
            return Octicons;
        default:
            return Ionicon;
    }
};

const Icon = ({ type = IconType.Ionicon, name, size = 20, ...props }) => {
    const FontIcon = AppIcon(type);

    return <FontIcon
        name={name}
        size={size}
        {...props}
    />;
};

export default Icon;
export {
    IconType
};
