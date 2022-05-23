import React, { useState } from 'react';

function Search ({SearchMovie}) {
    const [search, setSearch] = useState("panda")
    const [type, setType] = useState("all")


    const changeClick = (e) => {
        setSearch(e.target.value)
    }

    const handleClick = (e) => {
        if (e.key === "Enter") {
            SearchMovie(search, type)
        }
    }

    const handleFilter = (e) => {
        // this.setState({type: e.target.dataset.type}, () => {
        //     this.props.Search(this.state.search, this.state.type)
        // })
        setType(e.target.dataset.type)
        SearchMovie(search, type)
    }



        return (
            <div>
                <div className="Search">
                    <input
                        type="search"
                        onChange={changeClick}
                        value={search}
                        placeholder="Search..."
                        onKeyDown={handleClick}
                    />
                    <button className="btn_red" onClick={() => SearchMovie(search, type)}>Submit</button>
                </div>
                <div>
                    <label>
                        <input className="with-gap" type="radio" data-type="all" onChange={handleFilter} checked={type === "all"} />
                        <span>All</span>
                    </label>
                    <label>
                        <input className="with-gap" type="radio" data-type="movie" onChange={handleFilter} checked={type === "movie"} />
                        <span>Movie only</span>
                    </label>
                    <label>
                        <input className="with-gap" type="radio" data-type="series" onChange={handleFilter} checked={type === "series"} />
                        <span>Series only</span>
                    </label>
                </div>
            </div>
        );
}

export default Search;