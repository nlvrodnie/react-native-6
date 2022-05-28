import * as SecureStore from "expo-secure-store";

const user = "user";

const storeUser = async (data) => {
  try {
    await SecureStore.setItemAsync(user, JSON.stringify(data));
  } catch (error) {
    console.log("error while storing the user from storage", error);
  }
};
const getUser = async () => {
  try {
    return await SecureStore.getItemAsync(user);
  } catch (error) {
    console.log("error while getting the user from storage", error);
  }
};
const removeUser = async () => {
  try {
    await SecureStore.deleteItemAsync(user);
  } catch (error) {
    console.log("error while removing the user from storage", error);
  }
};

export default { getUser, storeUser, removeUser };
