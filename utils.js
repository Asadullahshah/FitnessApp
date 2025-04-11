import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const pxToWidth = (px) => {
    return (px / 390) * SCREEN_WIDTH; // assuming 375px is your design width
}

export const pxToHeight = (px) => {
    return (px / 844) * SCREEN_HEIGHT; // assuming 812px is your design height
}
