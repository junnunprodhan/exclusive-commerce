"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { IconSearch } from "../assets/globalIcons";
import TextInput from "../global/textInput";

function DesktopSearch() {
  const [searchText, setSearchText] = useState("");

  const ref = useRef<HTMLAnchorElement>(null);

  function changeHandler() {
    if (searchText.trim()) {
      ref.current?.click();
    }
  }

  return (
    <>
      <TextInput
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            changeHandler();
          }
        }}
        value={searchText}
        onChange={({ target }) => setSearchText(target.value)}
        name="search"
        placeholder="What your are looking for ?"
      />
      <div className="absolute text-gray-500 inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <IconSearch />
        <span className="sr-only">Search icon</span>
        <Link
          href={{ pathname: "/search", query: { keyword: searchText.trim() } }}
          hidden
          ref={ref}
        />
      </div>
    </>
  );
}

export default DesktopSearch;
