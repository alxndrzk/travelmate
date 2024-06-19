function SearchBar({keyword, keywordChange}){
    return(
        <section className="search-bar">
            <input id='search' className="search-bar" type="text" placeholder="Cari..." value={keyword} onChange={(event) => keywordChange(event.target.value)}/>
        </section>
    )
}

export default SearchBar;