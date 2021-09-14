import {CommonActions} from '@react-navigation/native'

let _navigator

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef
}

function navigate(routeName, params) {
  _navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  )
}

function goBack() {
  _navigator.dispatch(CommonActions.goBack())
}
function setParams(params) {
  _navigator.dispatch(CommonActions.setParams(params))
}
function reset() {
  _navigator.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: 'Home'}],
    }),
  )
}
export default {
  navigate,
  setTopLevelNavigator,
  goBack,
  setParams,
  reset,
}
