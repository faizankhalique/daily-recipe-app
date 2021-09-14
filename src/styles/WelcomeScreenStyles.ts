import {StyleSheet} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

export const WelcomeScreenStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(10),
  },
  textContainer: {
    alignItems: 'center',
  },
  smallText: {
    marginTop: wp(3),
    color: '#7B7B7B',
  },
  buttonContainerStyles: {
    width: '85%',
  },
  bottomContainer: {
    width: wp('100%'),
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
  signInText:{
      marginVertical:wp(12)
  }
})
