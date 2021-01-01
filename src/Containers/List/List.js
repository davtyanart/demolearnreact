import React from "react";

import ListItem from "../../Components/ListItem/ListItem";
import films from "../../data/data"



function List() {
    return (
        <div className="List">
            {films.map((film) => {
                return (
                    <div key={film.id}>
                        <ListItem data={film} />
                    </div>
                );
            })}
        </div>
    );
}

export default List;