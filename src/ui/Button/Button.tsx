import React, {ReactNode, FC} from 'react';
import {TouchableOpacity, View, Text, DimensionValue} from 'react-native';
import {styles} from './styles';

export enum ButtonType {
  Primary = 'Primary',
  Outlined = 'Outlined',
  Clear = 'Clear',
}

type ButtonProps = {
  title?: string;
  onPress: () => void;
  width?: DimensionValue;
  height?: DimensionValue;
  buttonType?: ButtonType;
  image?: ReactNode;
};

const Button: FC<ButtonProps> = props => {
  const {
    onPress,
    title,
    width = '100%',
    height = '100%',
    buttonType = ButtonType.Primary,
    image,
  } = props;

  const getButtonStyle = () => {
    if (buttonType === ButtonType.Primary) return styles.primary;
    if (buttonType === ButtonType.Outlined) return styles.outlined;
    if (buttonType === ButtonType.Clear) return styles.clear;
  };

  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyle(), {width, height}]}
      onPress={onPress}>
      <View style={styles.container}>
        {title ? <Text style={styles.text}>{title}</Text> : null}
        {image ? image : null}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
