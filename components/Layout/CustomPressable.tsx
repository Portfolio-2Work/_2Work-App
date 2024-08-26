import { GestureResponderEvent, Pressable, Text } from "react-native";
import { twMerge } from "tailwind-merge";

interface ICustomPressableProps {
  label?: string | undefined;
  classNameButton?: string | undefined;
  classNameLabel?: string | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  disabled?: boolean | undefined;
}

function CustomPressable({
  label,
  onPress,
  classNameButton,
  classNameLabel,
  disabled,
}: ICustomPressableProps) {
  return (
    <Pressable
      disabled={disabled || false}
      className={twMerge(
        `bg-blue-500 p-3 rounded`,
        classNameButton,
        disabled && "bg-gray-400"
      )}
      onPress={onPress}
    >
      <Text className={twMerge(`text-white text-center`, classNameLabel)}>
        {label}
      </Text>
    </Pressable>
  );
}

export default CustomPressable;
