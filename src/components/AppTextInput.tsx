import React from 'react'
import {TextInput, View, ViewStyle, TextInputProps} from 'react-native'
import {MaterialCommunityIcons, Feather} from '@expo/vector-icons'

import {AppTextInputStyles as styles} from '@styles/ComponentStyles'
import theme from '@config/theme'
import {useState} from 'react'

interface Props extends TextInputProps {
  icon?: string
  iconSize?: number
  textInputContainerStyle?: ViewStyle
  textInputStyle?: ViewStyle
  textInputIconStyle?: ViewStyle
  password?: boolean
  value: string
  isSearch?: boolean
}
const AppTextInput: React.FC<Props> = ({
  icon,
  iconSize = 20,
  textInputContainerStyle,
  textInputIconStyle,
  textInputStyle,
  autoCapitalize,
  autoCorrect,
  keyboardType,
  placeholder,
  password,
  onChangeText,
  value,
  isSearch,
}) => {
  const [isSecure, setIsSecure] = useState<boolean>(password ? true : false)

  return (
    <View style={[styles.container, textInputContainerStyle]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={iconSize}
          style={[styles.icon, textInputIconStyle]}
        />
      )}
      {isSearch && (
        <Feather
          name={'search'}
          size={iconSize}
          style={[styles.icon, textInputIconStyle]}
        />
      )}
      <TextInput
        placeholderTextColor={theme.custom.light_grey}
        style={[styles.textInput, textInputStyle]}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={isSecure}
        value={value}
        onChangeText={onChangeText}
      />
      {password && (
        <MaterialCommunityIcons
          name={isSecure ? 'eye-off' : 'eye'}
          size={iconSize}
          style={styles.eyeIcon}
          onPress={() => setIsSecure(!isSecure)}
        />
      )}
    </View>
  )
}

export default AppTextInput
