import {StyleSheet} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import {getFontSize} from '@components/AppText'
import theme from '@config/theme'

export const AppButtonStyles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: wp(3),
    backgroundColor: '#F55A00',
    borderRadius: wp(4),
  },
})

export const AppTextInputStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: wp(2),
    marginVertical: wp(3),
    borderBottomColor: '#A0A0A0',
    borderBottomWidth: 1,
  },
  icon: {
    marginRight: 12,
    color: '#A0A0A0',
  },
  textInput: {
    flex: 1,
    color: '#A0A0A0',
  },
  eyeIcon: {
    marginLeft: 12,
    color: '#A0A0A0',
  },
})

export const AppHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
})
export const CardStyles = StyleSheet.create({
  cardContainer: {
    backgroundColor: theme.custom.light_black,
    width: '100%',
    borderRadius: wp(2),
    padding: wp(2),
  },
})
