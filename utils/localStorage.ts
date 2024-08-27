import AsyncStorage from "@react-native-async-storage/async-storage";

export async function asyncStoreData(
  key: string,
  value: string
): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    return false;
  }
}

export async function asyncGetData(key: string): Promise<string | null> {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    return null;
  }
}

export async function asyncRemoveData(key: string): Promise<boolean> {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
}
