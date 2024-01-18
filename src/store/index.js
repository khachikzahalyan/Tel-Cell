import {
  useState,
  useContext,
  createContext,
  useMemo,
  useCallback,
} from "react";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [store, setStore] = useState({});

  const handleChangeStore = useCallback(
    (data, needToReset) =>
      setStore((prevStore) =>
        needToReset
          ? data
          : {
              ...prevStore,
              ...data,
            }
      ),
    []
  );

  const value = useMemo(
    () => ({ store, setStore: handleChangeStore }),
    [handleChangeStore, store]
  );

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

const useStore = () => {
  const store = useContext(StoreContext) || {};

  return store;
};

export { useStore, StoreProvider };
