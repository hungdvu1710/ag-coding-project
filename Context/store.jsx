import {
  createContext,
  useContext,
  useState,
} from "react";

const GlobalContext = createContext({
  name: "",
  setName: () => {},
  bio: "",
  setBio: () => {},
  phone: "",
  setPhone: () => {},
  email: "",
  setEmail: () => {},
  avatar: "",
  setAvatar: () => {},
});

export const GlobalContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  return (
    <GlobalContext.Provider
      value={{ name, setName, bio, setBio, phone, setPhone, email, setEmail, avatar, setAvatar }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);