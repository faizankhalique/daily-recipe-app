import theme from '@config/theme'
import React from 'react'
import {ViewStyle} from 'react-native'
import {SwipeablePanel} from 'rn-swipeable-panel'

interface Props {
  panelProps?: {
    fullWidth?: boolean
    openLarge?: boolean
    showCloseButton?: boolean
  }
  closePanel: () => void
  isPanelActive: boolean
  children: React.ReactNode
  barStyle?: any
}

function SwipeAblePanel({
  panelProps = {
    fullWidth: true,
    showCloseButton: true,
  },
  closePanel,
  isPanelActive,
  barStyle,
  children,
}: Props) {
  return (
    <SwipeablePanel
      onClose={() => closePanel()}
      onPressCloseButton={() => closePanel()}
      isActive={isPanelActive}
      barStyle={{width: 100}}
      closeRootStyle={{backgroundColor: 'red', marginTop: -5}}
      style={{backgroundColor: theme.custom.light_black}}
      {...panelProps}>
      {children}
    </SwipeablePanel>
  )
}

export default SwipeAblePanel
