// components/SearchBar.jsx
import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { ViewContext } from "../context/ViewContext";
import api from "../api";

const SearchBar = () => {
  const { darkMode } = useContext(ViewContext);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const debounceRef = useRef(null);
  const wrapperRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setOpen(false);
      return;
    }

    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const { data } = await api.get(`/search?q=${query.trim()}&limit=8`);
        setResults(data.data || []);
        setOpen(true);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 350); // 350ms debounce

    return () => clearTimeout(debounceRef.current);
  }, [query]);
  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (symbol) => {
    setQuery("");
    setResults([]);
    setOpen(false);
    navigate(`/instrument/${symbol}`);
  };

  const handleClear = () => {
    setQuery("");
    setResults([]);
    setOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative w-64 xl:w-80">
      <div
        className={`flex items-center gap-2 px-4 py-3 rounded-lg border transition-all duration-300
        ${
          darkMode
            ? "bg-white/10 border-white/20 text-white"
            : "bg-black/5 border-black/10 text-black"
        }`}
      >
        <Search size={15} className="opacity-50 shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search funds, stocks..."
          className="bg-transparent outline-none text-sm w-full placeholder:opacity-70"
        />
        {query && (
          <button onClick={handleClear}>
            <X
              size={14}
              className="opacity-50 hover:opacity-100 transition-opacity"
            />
          </button>
        )}
      </div>
      {open && (
        <div
          className={`absolute top-full left-0 right-0 mt-2 rounded-xl border shadow-2xl z-50 overflow-hidden
          ${
            darkMode
              ? "bg-secondaryTextColor border-white/10"
              : "bg-white border-black/10"
          }`}
        >
          {loading && (
            <div className="px-4 py-3 text-sm opacity-50">Searching...</div>
          )}
          {!loading && results.length === 0 && (
            <div className="px-4 py-3 text-sm opacity-50">No results found</div>
          )}
          {!loading &&
            results.map((item) => (
              <div
                key={item.symbol}
                onClick={() => handleSelect(item.symbol)}
                className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-all duration-200
                ${darkMode ? "hover:bg-white/10" : "hover:bg-black/5"}`}
              >
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs opacity-40 mt-0.5">{item.symbol}</p>
                </div>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium
                ${
                  item.type === "mf"
                    ? "bg-blue-500/20 text-blue-400"
                    : item.type === "stock"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-orange-500/20 text-orange-400"
                }`}
                >
                  {item.type.toUpperCase()}
                </span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
