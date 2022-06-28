
import {Pressable, Text, View, StyleSheet, ColorPropType} from 'react-native';

import { GlobalStyles } from '../../constants/styles';

const ManagerButton = ({children, onPress, mode, style}) => {
    
    return (
        <View style={style}>
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <View style={[styles.container, mode === 'flat' && styles.flat]}>
                <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
            </View>  
        </Pressable>
        </View> 
    );
}

export default ManagerButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.primary200,
    },
    container: {
        alignItems: 'center',
        borderRadius: 4,
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: GlobalStyles.colors.primary400,
    },
    flat: {
        backgroundColor: 'transparent',
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white'
    },
    flatText: {
        color: GlobalStyles.colors.primary200
    },
})
