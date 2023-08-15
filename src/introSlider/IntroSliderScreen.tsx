import React, { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useDispatch } from 'react-redux';
import { APPROX_ECLIPSE, EERIE_BLACK, EXTRA_LIGHTGREY, LIGHTGREY, LIGHT_SILVER, WHITE } from '../shared/constants/color';
import CustomFontText from '../shared/fontfamily/CustomFontText';
import CustomButton from '../components/buttons/CustomButton';
import SlideImage1 from '../svg/SlideImage1';
import SlideImage2 from '../svg/SlideImage2';
import SlideImage3 from '../svg/Slideimage3';
import { FONT_EIGHTEEN, FONT_TWENTYTWO } from '../shared/constants/FontConstant';
import { AUTH_TYPE } from '../redux/action/authAction';

type Slide = {
    key: string;
    title: string;
    text: string;
    image: any;
};

const slides: Slide[] = [
    {
        key: 'slide1',
        title: 'Master Your Inventory with Precision and Ease',
        text: 'Manage your sales and product with ease',
        image: <SlideImage1 />,
    },
    {
        key: 'slide2',
        title: 'For Smarter Stock Control and Growth',
        text: 'Navigating your Business Growth through our seamless solution',
        image: <SlideImage2 />,
    },
    {
        key: 'slide3',
        title: 'All you need is one in the dashboard',
        text: 'Choose from 10,000 online video courses with new edition',
        image: <SlideImage3 />,
    },
];

const IntroSliderScreen: React.FC = () => {
    const dispatch = useDispatch()
    const [index, setIndex] = useState()
    const renderSlide = ({ item }: { item: Slide }) => (
        <View style={styles.slide}>
            {item?.image}
            <CustomFontText style={styles.title}>{item.title}</CustomFontText>
            <CustomFontText style={styles.text}>{item.text}</CustomFontText>
        </View>
    );

    const onDone = () => {
        dispatch({ type: AUTH_TYPE.INTROSLIDER })
    };
    return (
        <SafeAreaView style={styles.container}>
            <>
                <StatusBar backgroundColor={WHITE} barStyle="dark-content" />
                <AppIntroSlider
                    data={slides}
                    renderItem={renderSlide}
                    dotStyle={styles.dot}
                    activeDotStyle={styles.activeDot}
                    onSlideChange={((index: any) => setIndex(index))}
                />
                {index != 2 ? <CustomButton label='Skip' style={styles.buttonSkipStyle} onPress={onDone} /> :
                    <CustomButton label='Let’s Get Started' style={styles.buttonStartedStyle} onPress={onDone} />}
            </>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
    },
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: WHITE,
    },
    title: {
        fontSize: FONT_TWENTYTWO,
        marginHorizontal: 20,
        fontWeight: '900',
        lineHeight: 30,
        marginVertical: 16,
        textAlign: 'center',
        color: EERIE_BLACK
    },
    text: {
        fontSize: FONT_EIGHTEEN,
        textAlign: 'center',
        marginHorizontal: 30,
        lineHeight: 20,
        fontWeight: '300',
        color: APPROX_ECLIPSE
    },
    dot: {
        backgroundColor: LIGHT_SILVER,
        height: 8
    },
    activeDot: {
        backgroundColor: EERIE_BLACK,
        width: 23,
        height: 8
    },
    button: {
        color: LIGHTGREY,
        fontSize: FONT_EIGHTEEN,
        lineHeight: 20,
        paddingHorizontal: 5,
        fontWeight: 'bold',
    },
    buttonCircle: {
        width: 44,
        height: 44,
        backgroundColor: EXTRA_LIGHTGREY,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSkipStyle: {
        height: 40,
        width: '30%',
        alignSelf: 'flex-end',
        marginBottom: 30
    },
    buttonStartedStyle: {
        height: 40,
        width: '40%',
        alignSelf: 'flex-end',
        marginBottom: 30
    },

});

export default IntroSliderScreen;
