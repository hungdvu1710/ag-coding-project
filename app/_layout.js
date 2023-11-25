import { Stack } from "expo-router";
import { GlobalContextProvider } from "../Context/store";

const Layout = () => {
  return (
    <GlobalContextProvider>
      <Stack />
    </GlobalContextProvider>
  );
};

export default Layout;