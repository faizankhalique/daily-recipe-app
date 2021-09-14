import {StyleSheet} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import theme from '@config/theme'

const wrapper = {
  flex: 1,
  paddingTop: hp(6),
  backgroundColor: theme.ui.background,
  paddingHorizontal: wp(7),
}
export const SettingScreenStyles = StyleSheet.create({
  wrapper,
  nameText: {
    color: theme.custom.medium_grey,
  },
  title: {
    fontWeight: 'bold',
  },
  container: {
    paddingTop: hp(6),
  },
  lineContainer: {
    width: '100%',
    height: 0.5,
    backgroundColor: 'white',
    marginTop: hp(5),
    marginBottom: hp(1),
  },
})
export const SettingButtonStyles = StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(2),
    backgroundColor: theme.custom.light_black,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: wp(2),
  },
  name: {
    fontWeight: 'bold',
    left: 20,
  },
})
export const EditProfileStyles = StyleSheet.create({
  wrapper,
  cardStyles: {
    alignSelf: 'center',
    marginTop: hp(5),
    paddingHorizontal: wp(3),
  },
  buttonContainerStyles: {
    marginVertical: wp(4),
  },
})
export const ChangePasswordStyles = StyleSheet.create({
  wrapper,
  cardStyles: {
    alignSelf: 'center',
    marginTop: hp(5),
    paddingHorizontal: wp(3),
  },
  buttonContainerStyles: {
    marginVertical: wp(4),
  },
})
export const NotificationsStyles = StyleSheet.create({
  wrapper,
})
export const ChangeLanguageStyles = StyleSheet.create({
  wrapper,
})
