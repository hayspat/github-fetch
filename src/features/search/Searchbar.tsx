import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchAsync } from "../../app/searchSlice";

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // 500ms timeout

    const timer = setTimeout(() => {
      if (inputRef && inputRef.current) {
        if (searchValue && searchValue === inputRef.current.value) {
          dispatch(searchAsync(searchValue));
        }
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchValue, inputRef, dispatch]);

  return (
    <div className="bg-indigo-dark h-50 p-8">
      <div className="container mx-auto py-8">
        <input
          ref={inputRef}
          className="w-full h-16 px-3 rounded mb-8 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg"
          type="search"
          placeholder="Search..."
          onChange={e => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </div>
    </div>
  );
};

export default Searchbar;
