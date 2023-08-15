
import React from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { SvgXml } from 'react-native-svg';
import { JPURPLE } from '../shared/constants/color';


const HistoryIcon = ({  width = widthPercentageToDP(60), height = heightPercentageToDP(60),color=JPURPLE}) => {
    const svgLocation = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_12_5800" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_12_5800)">
    <path d="M8 12V10H16V12H8ZM8 8V6H16V8H8ZM6 14H13.5C13.9833 14 14.4333 14.1042 14.85 14.3125C15.2667 14.5208 15.6167 14.8167 15.9 15.2L18 17.95V4H6V14ZM6 20H17.05L14.325 16.425C14.225 16.2917 14.1042 16.1875 13.9625 16.1125C13.8208 16.0375 13.6667 16 13.5 16H6V20ZM18 22H6C5.45 22 4.97917 21.8042 4.5875 21.4125C4.19583 21.0208 4 20.55 4 20V4C4 3.45 4.19583 2.97917 4.5875 2.5875C4.97917 2.19583 5.45 2 6 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V20C20 20.55 19.8042 21.0208 19.4125 21.4125C19.0208 21.8042 18.55 22 18 22Z" fill="white"/>
    </g>
    </svg>
    `;
    return <SvgXml width={width} height={height} xml={svgLocation} />;
};

export default HistoryIcon;
