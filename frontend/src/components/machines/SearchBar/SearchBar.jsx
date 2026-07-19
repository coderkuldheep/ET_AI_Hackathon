export default function SearchBar({

    search,
    
    setSearch
    
    }){
    
    return(
    
    <input
    
    className="search-box"
    
    type="text"
    
    placeholder="Search Machine..."
    
    value={search}
    
    onChange={(e)=>setSearch(e.target.value)}
    
    />
    
    );
    
    }