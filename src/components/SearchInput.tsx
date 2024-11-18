import { Input, InputElement } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup
        className="search-input-group"
        flex="1"
        startElement={<BsSearch />}
      >
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant={"subtle"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;