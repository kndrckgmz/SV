import React,{useEffect} from 'react';
import {db} from './firebase_config';
import GridItem from './GridItem';

const FileGrid = ({docs, setDocs}) => {

    useEffect (()=>{

       const unmount = db.collection("FileUploads")
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
                id={doc.id}
                url={doc.url}
                name={doc.name}
                type={doc.type}
                />
            ))}
        </div>
    )
}

export default FileGrid;