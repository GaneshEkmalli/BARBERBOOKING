
import React from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { SvgXml } from 'react-native-svg';

const DashboardIcon = ({ width = widthPercentageToDP(60), height = heightPercentageToDP(60) }) => {
    const svgLocation = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_32_1665" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
    <rect width="28" height="28" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_32_1665)">
    <path d="M15.1667 10.5V3.5H24.5V10.5H15.1667ZM3.5 15.1667V3.5H12.8333V15.1667H3.5ZM15.1667 24.5V12.8333H24.5V24.5H15.1667ZM3.5 24.5V17.5H12.8333V24.5H3.5ZM5.83333 12.8333H10.5V5.83333H5.83333V12.8333ZM17.5 22.1667H22.1667V15.1667H17.5V22.1667ZM17.5 8.16667H22.1667V5.83333H17.5V8.16667ZM5.83333 22.1667H10.5V19.8333H5.83333V22.1667Z" fill="white"/>
    </g>
    </svg>
    `;
    return <SvgXml width={width} height={height} xml={svgLocation} />;
};

export default DashboardIcon;