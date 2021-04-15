import React from 'react';
import {db, storage} from './firebase_config';

const GridItem = ({id, name, url}) => {

    const deleteFile = () => {
        var desertRef = storage.ref(`images/${name}`);
        desertRef.delete()
        .then(() => {
            db.collection("FileUploads").doc(id).delete();
        }).catch((error) => {
            console.log(error);    
        });     
    };

    return(
        <div className="tdl" id="box" >
            <div className="grid-item" key={id}>
                <img src={url || "https://placeholder.com/200"} alt={name} className="img"/>         
                <p className="img-data">{name}</p>
                <button id="delete" onClick={deleteFile} className="img-btn">Delete</button>
                <a className="dllink" href={url}>
                <button id={id} className="dl-btn">Download</button>
                </a>                                       
            </div>            
        </div>
    );
};

export default GridItem;