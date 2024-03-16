import './styles.css';

function Search(){
    return (
        <form className="search">
            <input type="text" placeholder="Search for a Recipe" id="search" />
            <button type="sumbit">Search</button>
        </form>
    )
}

export default Search;