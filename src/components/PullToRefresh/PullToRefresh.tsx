import React, { useState } from 'react';
import { View, RefreshControl } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { pullRefreshCommonStyle } from '../../shared/commonStyle/pullRefreshCommonStyle';
const PullToRefresh = ({ children, onRefresh, style }: any) => {
    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = () => {
        setRefreshing(true);
        if (onRefresh) {
            onRefresh();
        }
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    };

    return (
        <View style={{ flex: 1 }}>
            <KeyboardAwareScrollView style={pullRefreshCommonStyle.pullRefreshMainContainer}
                contentContainerStyle={style}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                    />
                }
            >
                {children}
            </KeyboardAwareScrollView>
        </View>
    );
};

export default PullToRefresh;