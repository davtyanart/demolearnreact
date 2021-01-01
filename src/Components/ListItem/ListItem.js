import React from "react";

import "./ListItem.css";



function ListItem({ data }) {
    return (
        <div className="ListItem">
            <img src={data.img} alt="img" />
            <div>
                <div>
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                </div>
                <button>Watch online</button>
            </div>
        </div>
    );
}

export default ListItem;