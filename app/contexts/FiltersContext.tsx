import {
  createContext,
  useState,
  FunctionComponent,
  useContext,
  ReactNode,
} from "react";

export interface FiltersContextValue {
  search: string | undefined;
  setSearch: (search: string | undefined) => void;
  sortBy: string | undefined;
  setSortBy: (sortBy: string | undefined) => void;
}

export const FiltersContext = createContext<FiltersContextValue | undefined>(
  undefined,
);

interface FiltersContextProps {
  children: ReactNode;
}

export const FiltersContextProvider: FunctionComponent<FiltersContextProps> = ({
  children,
}) => {
  const [search, setSearch] = useState<string | undefined>("");
  const [sortBy, setSortBy] = useState<string | undefined>("");

  return (
    <FiltersContext.Provider
      value={{
        search,
        setSearch: (_search) => setSearch(_search),
        sortBy,
        setSortBy: (_sortBy) => setSortBy(_sortBy),
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error(
      `useFiltersContext must be used inside FiltersContextProvider`,
    );
  }
  return context;
};
