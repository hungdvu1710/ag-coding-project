import {
  createContext,
  useContext,
  useState,
} from "react";

const GlobalContext = createContext({
  firstName: "",
  setFirstName: () => {},
  lastName: "",
  setLastName: () => {},
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
  const [firstName, setFirstName] = useState("Hung");
  const [lastName, setLastName] = useState("Vu");
  const [bio, setBio] = useState("Full Stack Developer - Ready to serve");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("hung.d.vu1017@gmail.com");
  const [avatar, setAvatar] = useState("");

  return (
    <GlobalContext.Provider
      value={{ firstName, setFirstName, lastName, setLastName, bio, setBio, phone, setPhone, email, setEmail, avatar, setAvatar }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);