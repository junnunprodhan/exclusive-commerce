"use client";
import { toggleMobileMenu } from "@/slices/toggleSlice";
import Link from "next/link";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { IconSearch } from "../assets/globalIcons";
import TextInput from "../global/textInput";

function MobileSearch() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  const ref = useRef<HTMLAnchorElement>(null);

  function actionSearch() {
    if (searchText.trim()) {
      dispatch(toggleMobileMenu());
      ref.current?.click();
    }
  }
  return (
    <div className="relative mt-3 md:hidden">
      {/* Mobile Search Input */}
      <button
        onClick={actionSearch}
        className="absolute bg-primary hover:brightness-90 text-xl text-white inset-y-0 right-0 rounded-r flex items-center px-5"
      >
        <IconSearch />
      </button>
      <Link
        href={{ pathname: "/search", query: { keyword: searchText.trim() } }}
        hidden
        ref={ref}
      />

      <TextInput
        value={searchText}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            actionSearch();
          }
        }}
        onChange={({ target }) => setSearchText(target.value)}
        name="search"
        placeholder="What your are looking for ?"
      />
    </div>
  );
}

export default MobileSearch;
