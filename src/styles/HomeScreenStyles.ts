import {StyleSheet} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import theme from '@config/theme'

export const HomeScreenStyles = StyleSheet.create({
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
    // marginVertical: hp(0.5),
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
  textContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: wp(1),
  },
  listContainer: {
    borderBottomWidth: 0.5,
    borderColor: theme.custom.medium_grey,
    paddingBottom: wp(4),
    // marginBottom: wp(4),
  },
  verticalListContainer: {
    flex: 1,
  },
})
export const RecipeDetailsScreenStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: hp(6),
    backgroundColor: theme.ui.background,
    paddingHorizontal: wp(7),
  },
  image: {
    height: wp(58),
    width: wp(58),
    position: 'absolute',
    top: hp(-5),
    right: wp(-5),
  },
  container: {
    paddingTop: hp(4),
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: hp(1),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'relative',
    paddingTop: hp(1),
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: wp(1.5),
    paddingRight: wp(5),
  },
  containerStyles: {
    paddingVertical: wp(5),
  },
  listContainer: {
    width: '100%',
    marginTop: hp(1),
  },
  ingredientImage: {
    height: wp(10),
    width: wp(10),
    marginRight: wp(4),
    borderRadius: wp(4),
    marginTop: wp(3),
  },
  bottomSwipeAblePanel: {
    alignItems: 'center',
    width: '100%',
    height: hp(5),
    backgroundColor: theme.custom.light_black,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    position: 'absolute',
    bottom: 1,
    paddingTop: 8,
  },
  pinContainer: {
    height: 5,
    backgroundColor: theme.custom.white,
    width: wp(30),
    borderRadius: 2,
  },
})
export const RecipeVerticalCardStyles = StyleSheet.create({
  card: {
    height: wp(50),
    width: wp(40),
    backgroundColor: theme.custom.light_black,
    borderRadius: wp(6),
    marginRight: wp(6),
    paddingVertical: wp(3),
    paddingLeft: wp(3),
  },
  image: {
    top: wp(-1),
    height: wp(22),
    width: wp(22),
    alignSelf: 'flex-end',
    position: 'absolute',
  },
  container: {
    paddingTop: wp(8),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: wp(1.5),
    paddingRight: wp(5),
  },
})

export const RecipeHorizontalCardStyles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    height: wp(32),
    width: '100%',
    backgroundColor: theme.custom.light_black,
    borderRadius: wp(6),
    marginVertical: wp(3),
    paddingVertical: wp(2),
  },
  image: {
    height: wp(24),
    width: wp(24),
  },
  container: {
    paddingHorizontal: wp(1.5),
    flex: 9,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: wp(1.5),
    paddingRight: wp(5),
  },
})
export const RatingStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: wp(1),
  },
  icon: {
    marginRight: wp(1),
  },
})
