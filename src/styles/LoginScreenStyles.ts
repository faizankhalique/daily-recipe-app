import {StyleSheet} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import theme from '@config/theme'
export const LoginScreenStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: wp(8),
  },
  logoContainerStyles: {
    marginTop: hp(14),
  },
  signInText: {
    top: hp(4),
    fontWeight: 'bold',
  },
  button: {
    paddingVertical: wp(4),
    marginTop: hp(6),
  },
  container: {
    width: '100%',
    paddingTop: wp(16),
  },
  bottomContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: hp(3),
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#128FAE',
  },
})
