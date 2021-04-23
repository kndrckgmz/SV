import React, {useEffect} from 'react';
import {db} from './firebase_config';
import GridItem from './GridItem';

const FileGrid = ({docs, setDocs, uid}) => {

    useEffect (()=>{
       const unmount = db.collection(`${uid}-FileUploads`)
       .orderBy("type")
       .onSnapshot((snap)=>{
         let documents=[];
         snap.forEach((doc)=>{
           documents.push({...doc.data(), id:doc.id});
            });
         setDocs(documents);
         });
         return unmount;      
    },[docs]);

    return(
        <div className="filegrid">
            {docs.map((doc) => (
                <GridItem
                key={doc.id}
                id={doc.id}
                uid={uid}
                url={doc.url}
                name={doc.name}
                type={doc.type}
                />
            ))}
        </div>
    )
}

export default FileGrid;