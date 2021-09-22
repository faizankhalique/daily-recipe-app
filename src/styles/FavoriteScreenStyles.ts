import {StyleSheet} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import theme from '@config/theme'

export const FavoriteScreenStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: hp(6),
    backgroundColor: theme.ui.background,
    paddingHorizontal: wp(7),
  },
  nameText: {
    color: theme.custom.medium_grey,
  },
  title: {
    fontWeight: 'bold',
  },
  subTitle: {
    color: theme.custom.orange,
  },
  textInputContainer: {
    borderBottomWidth: 0,
    backgroundColor: theme.custom.light_black,
    borderRadius: 6,
    paddingHorizontal: wp(3),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: hp(0.5),
  },
  iconContainer: {
    backgroundColor: theme.custom.light_black,
    padding: wp(3),
    borderRadius: 6,
  },
  filterIcon: {
    height: wp(6),
    width: wp(6),
  },
  listContainer: {
    borderBottomWidth: 0.5,
    borderColor: theme.custom.medium_grey,
    paddingBottom: wp(4),
  },
  verticalListContainer: {
    flex: 1,
  },
})
