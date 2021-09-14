import Toast from 'react-native-root-toast'

export const successToast = (message: string, color?: string) => {
  Toast.show(message, {
    duration: Toast.durations.SHORT,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    backgroundColor: color || 'green',
  })
}

export const errorToast = (errorMessage: string, color?: string) => {
  Toast.show(errorMessage, {
    duration: Toast.durations.SHORT,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    backgroundColor: color || 'red',
  })
}
