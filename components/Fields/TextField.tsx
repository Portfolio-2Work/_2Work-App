import React from "react";
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  Text,
} from "react-native";

interface ITextFieldProps {
  label?: string | undefined;
  placeholder?: string | undefined;
  error?: string | undefined;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  maxLength?: number | undefined;
  value?: string | undefined;
  secureTextEntry?: boolean | undefined;
  onChange?:
    | ((text: string) => void)
    | ((e: string | React.ChangeEvent<any>) => void)
    | undefined;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
}

function TextField({
  label,
  placeholder,
  onChange,
  onBlur,
  error,
  secureTextEntry,
  maxLength,
  autoCapitalize,
  value,
  keyboardType,
}: ITextFieldProps) {
  return (
    <>
      <Text className="text-gray-700 text-sm mb-2">{label}</Text>
      <TextInput
        className="placeholder-blue-500 h-10 border-gray-400 mb-1 mt-3 px-2 border-2 rounded-md"
        placeholder={placeholder || label}
        value={value}
        onChangeText={onChange}
        keyboardType={keyboardType || "default"}
        secureTextEntry={secureTextEntry || false}
        autoCapitalize={autoCapitalize || "none"}
        onBlur={onBlur}
        maxLength={maxLength}
      />
      {error && <Text className="text-red-600 text-sm mb-2">{error}</Text>}
    </>
  );
}

export default TextField;
