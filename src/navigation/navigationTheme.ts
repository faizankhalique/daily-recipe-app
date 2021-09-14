import theme from '@config/theme'
import {DefaultTheme} from '@react-navigation/native'
export const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.custom.black,
  },
}
