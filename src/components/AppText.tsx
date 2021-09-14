import React from 'react'
import { Platform, StyleSheet, Text, TextProps } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import theme from '@config/theme'

// HEADINGS

type HeadingProps = TextProps & { children: React.ReactNode }

export function Heading1(props: HeadingProps) {
  return <Text {...props} style={[textStyles.heading1, props.style]} />
}

export function Heading2(props: HeadingProps) {
  return <Text {...props} style={[textStyles.heading2, props.style]} />
}

export function Heading3(props: HeadingProps) {
  return <Text {...props} style={[textStyles.heading3, props.style]} />
}

export function Heading4(props: HeadingProps) {
  return <Text {...props} style={[textStyles.heading4, props.style]} />
}

export function Heading5(props: HeadingProps) {
  return <Text {...props} style={[textStyles.heading5, props.style]} />
}
export function Heading6(props: HeadingProps) {
  return <Text {...props} style={[textStyles.heading6, props.style]} />
}
// BODY

type BodyProps = TextProps & { children: React.ReactNode }

export function Body20(props: BodyProps) {
  return <Text {...props} style={[textStyles.body20, props.style]} />
}

export function Body20Bold(props: BodyProps) {
  return <Text {...props} style={[textStyles.body20Bold, props.style]} />
}
export function Body19(props: BodyProps) {
  return <Text {...props} style={[textStyles.body19, props.style]} />
}

export function Body19Bold(props: BodyProps) {
  return <Text {...props} style={[textStyles.body19Bold, props.style]} />
}
export function Body17(props: BodyProps) {
  return <Text {...props} style={[textStyles.body17, props.style]} />
}

export function Body17Bold(props: BodyProps) {
  return <Text {...props} style={[textStyles.body17Bold, props.style]} />
}
export function Body16(props: BodyProps) {
  return <Text {...props} style={[textStyles.body17, props.style]} />
}

export function Body16Bold(props: BodyProps) {
  return <Text {...props} style={[textStyles.body16Bold, props.style]} />
}
export function Body15(props: BodyProps) {
  return <Text {...props} style={[textStyles.body15, props.style]} />
}

export function Body15Bold(props: BodyProps) {
  return <Text {...props} style={[textStyles.body15Bold, props.style]} />
}
export function Body14(props: BodyProps) {
  return <Text {...props} style={[textStyles.body14, props.style]} />
}
export function Body13(props: BodyProps) {
  return <Text {...props} style={[textStyles.body13, props.style]} />
}
export function Body12(props: BodyProps) {
  return <Text {...props} style={[textStyles.body12, props.style]} />
}
export function Body11(props: BodyProps) {
  return <Text {...props} style={[textStyles.body11, props.style]} />
}

// LABEL

type LabelProps = TextProps & { children: React.ReactNode }
export function Label32(props: LabelProps) {
  return <Text {...props} style={[textStyles.label32, props.style]} />
}
export function Label22(props: LabelProps) {
  return <Text {...props} style={[textStyles.label22, props.style]} />
}
export function Label22Light(props: LabelProps) {
  return <Text {...props} style={[textStyles.label22Light, props.style]} />
}
export function Label20(props: LabelProps) {
  return <Text {...props} style={[textStyles.label20, props.style]} />
}
export function Label19(props: LabelProps) {
  return <Text {...props} style={[textStyles.label19, props.style]} />
}
export function Label17(props: LabelProps) {
  return <Text {...props} style={[textStyles.label17, props.style]} />
}
export function Label17Light(props: LabelProps) {
  return <Text {...props} style={[textStyles.label17Light, props.style]} />
}
export function Label16(props: LabelProps) {
  return <Text {...props} style={[textStyles.label16, props.style]} />
}
export function Label16Light(props: LabelProps) {
  return <Text {...props} style={[textStyles.label16Light, props.style]} />
}
export function Label15(props: LabelProps) {
  return <Text {...props} style={[textStyles.label15, props.style]} />
}
export function Label15Light(props: LabelProps) {
  return <Text {...props} style={[textStyles.label15Light, props.style]} />
}
export function Label14(props: LabelProps) {
  return <Text {...props} style={[textStyles.label14, props.style]} />
}
export function Label14Light(props: LabelProps) {
  return <Text {...props} style={[textStyles.label14Light, props.style]} />
}
export function Label13(props: LabelProps) {
  return <Text {...props} style={[textStyles.label13, props.style]} />
}
export function Label13Light(props: LabelProps) {
  return <Text {...props} style={[textStyles.label12Light, props.style]} />
}
export function Label12(props: LabelProps) {
  return <Text {...props} style={[textStyles.label12, props.style]} />
}
export function Label12Light(props: LabelProps) {
  return <Text {...props} style={[textStyles.label13Light, props.style]} />
}
export function Label11(props: LabelProps) {
  return <Text {...props} style={[textStyles.label11, props.style]} />
}
export function Label11Light(props: LabelProps) {
  return <Text {...props} style={[textStyles.label11Light, props.style]} />
}
export function Label10(props: LabelProps) {
  return <Text {...props} style={[textStyles.label10, props.style]} />
}
export function Label10Light(props: LabelProps) {
  return <Text {...props} style={[textStyles.label10, props.style]} />
}
export function Label9(props: LabelProps) {
  return <Text {...props} style={[textStyles.label9, props.style]} />
}
export function Label9Light(props: LabelProps) {
  return <Text {...props} style={[textStyles.label9, props.style]} />
}
export function Label8(props: LabelProps) {
  return <Text {...props} style={[textStyles.label8, props.style]} />
}
export function Label8Light(props: LabelProps) {
  return <Text {...props} style={[textStyles.label8, props.style]} />
}
export function Label(props: LabelProps) {
  return <Text {...props} style={[textStyles.label, props.style]} />
}

export function NumberText(props: BodyProps) {
  return <Text {...props} style={[textStyles.numbers, props.style]} />
}

export const getFontSize = (fontSize) => RFValue(fontSize)
export const textStyles = StyleSheet.create({
  heading1: {
    fontSize: getFontSize(34),
    color: theme.text.heading,
  },
  heading2: {
    fontSize: getFontSize(28),
    color: theme.text.heading,
  },
  heading3: {
    fontSize: getFontSize(24),
    color: theme.text.heading,
  },
  heading4: {
    fontSize: getFontSize(20),
    color: theme.text.heading,
  },
  heading5: {
    fontSize: getFontSize(16),
    color: theme.text.heading,
  },
  heading6: {
    fontSize: getFontSize(14),
    color: theme.text.heading,
  },
  body20: {
    fontSize: getFontSize(20),
    color: theme.text.primaryBody,
  },
  body20Bold: {
    fontSize: getFontSize(20),
    color: theme.text.primaryBody,
  },
  body19: {
    fontSize: getFontSize(19),
    color: theme.text.primaryBody,
  },
  body19Bold: {
    fontSize: getFontSize(19),
    color: theme.text.primaryBody,
  },
  body16: {
    fontSize: getFontSize(16),
    color: theme.text.primaryBody,
  },
  body16Bold: {
    fontSize: getFontSize(16),
    color: theme.text.primaryBody,
  },
  body17: {
    fontSize: getFontSize(17),
    color: theme.text.primaryBody,
  },
  body17Bold: {
    fontSize: getFontSize(17),
    color: theme.text.primaryBody,
  },
  body15: {
    fontSize: getFontSize(15),
    color: theme.text.primaryBody,
  },
  body15Bold: {
    fontSize: getFontSize(15),
    color: theme.text.primaryBody,
  },
  body14: {
    fontSize: getFontSize(14),
    color: theme.text.primaryBody,
  },
  body13: {
    fontSize: getFontSize(13),
    color: theme.text.primaryBody,
  },
  body12: {
    fontSize: getFontSize(12),
    color: theme.text.primaryBody,
  },
  body11: {
    fontSize: getFontSize(11),
    color: theme.text.primaryBody,
  },
  label50: {
    fontSize: getFontSize(50),
    color: theme.text.label,
  },
  label32: {
    fontSize: getFontSize(32),
    color: theme.text.label,
  },
  label20: {
    fontSize: getFontSize(20),
    color: theme.text.label,
  },
  label22: {
    fontSize: getFontSize(22),
    color: theme.text.label,
  },
  label22Light: {
    fontSize: getFontSize(22),
    color: theme.text.label,
  },
  label19: {
    fontSize: getFontSize(19),
    color: theme.text.label,
  },
  label17: {
    fontSize: getFontSize(17),
    color: theme.text.label,
  },
  label17Light: {
    fontSize: getFontSize(17),
    color: theme.text.label,
  },
  label16: {
    fontSize: getFontSize(16),
    color: theme.text.label,
  },
  label16Light: {
    fontSize: getFontSize(16),
    color: theme.text.label,
  },
  label15: {
    fontSize: getFontSize(15),
    color: theme.text.label,
  },
  label15Light: {
    fontSize: getFontSize(15),
    color: theme.text.label,
  },
  label14: {
    fontSize: getFontSize(14),
    color: theme.text.label,
  },
  label14Light: {
    fontSize: getFontSize(14),
    color: theme.text.label,
  },
  label13: {
    fontSize: getFontSize(13),
    color: theme.text.label,
  },
  label13Light: {
    fontSize: getFontSize(13),
    color: theme.text.label,
  },
  label12: {
    fontSize: getFontSize(12),
    color: theme.text.label,
  },
  label12Light: {
    fontSize: getFontSize(12),
    color: theme.text.label,
  },
  label11Light: {
    fontSize: getFontSize(11),
    color: theme.text.label,
  },
  label11: {
    fontSize: getFontSize(11),
    color: theme.text.label,
  },
  label10: {
    fontSize: getFontSize(10),
    color: theme.text.label,
  },
  label10Light: {
    fontSize: getFontSize(10),
    color: theme.text.label,
  },
  label9: {
    fontSize: getFontSize(9),
    color: theme.text.label,
  },
  label9Light: {
    fontSize: getFontSize(9),
    color: theme.text.label,
  },
  label8: {
    fontSize: getFontSize(8),
    color: theme.text.label,
  },
  label8Light: {
    fontSize: getFontSize(8),
    color: theme.text.label,
  },
  label: {
    color: theme.text.label,
  },
  numbers: {
    fontSize: getFontSize(22),
    color: theme.text.label,
  },
})
