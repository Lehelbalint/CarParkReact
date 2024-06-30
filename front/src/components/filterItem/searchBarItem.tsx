import { SetStateAction } from "react";

const SearchBarItem = ({ searchBarValue, setSearchBarValue, filteredCars }: {
    searchBarValue: string,
    setSearchBarValue: (value: SetStateAction<string>) => void,
    filteredCars: any[]
}) => {
   
    const handleSearchBarChange = (event: { target: { value: SetStateAction<string> } }) => {
           // console.log(event.target.value)
        setSearchBarValue(event.target.value);
    };

    return (
        <div className="searchFilter">
            <label htmlFor="searchInput">Search by manufacturer/model:</label>
                <input
                    type="text"
                    id="searchInput"
                    placeholder="Enter manufacturer or model..."
                    value={searchBarValue}
                    onChange={handleSearchBarChange}
                />
        </div>
    );
};

export default SearchBarItem