import s from "./SearchBox.module.css";

const SearchBox = ({ changeFilter, filter }) => {
  const handleChange = (e) => {
    changeFilter(e.target.value);
  };
  return (
    <div>
      <input
        className={s.searchInput}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
