const requests = {
    fetchCollections : `/type/<collection>`,
    fetchMovies : `/type/<movie>`,
    fetchSeries: `/type/<series>`,
    fetchGenre: `/type/<genre>`,
    fetchAction: `/genre?genres[]=action`,
    fetchAdventure: `/genre?genres[]=adventure`,
    fetchAnimation: `/genre?genres[]=animation`,
    
}

export default requests
