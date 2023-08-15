import React, { useCallback, useState } from 'react'
import { FlatList, Image, RefreshControl, SafeAreaView, View } from 'react-native'
import DashboardStyle from './DashboardStyle'
import AlertModal from '../../shared/components/AlertModal'
import { useDispatch, useSelector } from 'react-redux'
import TopHeaderFixed from '../../shared/components/TopHeaderFixed'
import PullToRefresh from '../../components/PullToRefresh/PullToRefresh'
import NoRecordFound from '../../shared/constants/NoRecordFound'
import CustomTextInput from '../../components/inputs/CustomTextInput'
import CustomFontText from '../../shared/fontfamily/CustomFontText'
import { LoaderScreen } from '../../components/LoaderView/LoaderScreen'
import { AUTH_TYPE } from '../../redux/action/authAction'
import { useFocusEffect } from '@react-navigation/native'

const Dashboard = () => {
  const { userInfo } = useSelector((state: any) => state.auth) || {};
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [text, setText] = useState('');
  // const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const data = [
    { id: 1, image: require('../../assets/image1.jpg'), name: 'FASHION HOUSE', address: 'New sangvi MK Chowk pune New sangvi MK Chowk pune New sangvi MK Chowk pune' },
    { id: 2, image: require('../../assets/image2.jpg'), name: 'The Barber House', address: 'New sangvi MK Chowk pune New sangvi MK Chowk pune New sangvi MK Chowk pune' },
    { id: 3, image: require('../../assets/image3.jpg'), name: 'Noir Barbers', address: 'New sangvi MK Chowk pune New sangvi MK Chowk pune New sangvi MK Chowk pune' },
    { id: 4, image: require('../../assets/image4.jpg'), name: 'Blade Barbershop', address: 'New sangvi MK Chowk pune New sangvi MK Chowk pune New sangvi MK Chowk pune' }
  ]

  const renderItem = ({ item }: any) => (
    <View style={DashboardStyle.renderItemView}>
      <View>
        <Image source={item?.image} resizeMode='cover' style={DashboardStyle.image} />
      </View>
      <View style={DashboardStyle.textView}>
        <CustomFontText style={DashboardStyle.textStyle}>{item?.name}</CustomFontText>
        <CustomFontText style={DashboardStyle.textStyle1}>{item?.address}</CustomFontText>
      </View>
    </View>
  );

  useFocusEffect(
    useCallback(() => {
      getDashboardDetails();
    }, [text])
  );

  const getDashboardDetails = () => {
    setLoader(true);
  };
  const handleTextChange = (inputText: string) => {
    setText(inputText);
  };
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }
  const onProceed = () => {
    dispatch({ type: AUTH_TYPE.LOGOUT })
    setModalVisible(false)
  }
  const onCancel = () => {
    setModalVisible(false)
  }
  return (
    <SafeAreaView style={DashboardStyle.mainContainer}>
      <TopHeaderFixed
        headerTxt={`Welcome, ${userInfo?.name}`}
        topHeight={100}
        logoutIcon="logout"
        logoutIconType="antdesign"
        logoutIconSize={22}
        logoutNavigation={() => setModalVisible(true)}
      />
      <View style={DashboardStyle.mainView}>
        <CustomTextInput value={text}
          onChangeText={handleTextChange}
          placeholder='Search Your Salone'
          style={DashboardStyle.inputText1}
          showCalander={text}
          right="close"
          onOpenCalender={() => setText('')}
        />
        {loader ? <>
          {data?.length === 0 ?
            <PullToRefresh onRefresh={onRefresh} style={DashboardStyle.loaderView}>
              <NoRecordFound />
            </PullToRefresh>
            :
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item: any) => item?.id}
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              }
            />}</> :
          <LoaderScreen />
        }
      </View>
      <AlertModal modalVisible={modalVisible} setModalVisible={setModalVisible}
        firstLineContent="Are you sure to logout?"
        btn="Logout"
        no="Cancel"
        btnCancel="Cancel"
        onProceed={() => onProceed()}
        onCancel={() => onCancel()}
        showCancelButton={true}
      ></AlertModal>
    </SafeAreaView>
  )
}

export default Dashboard
