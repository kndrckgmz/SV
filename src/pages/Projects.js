import React, { useState } from 'react';
import FileGrid from "./resource/FileGrid";
import {db, storage} from './resource/firebase_config';

const Projects = () => {

  const [docs, setDocs] = useState([]);
  const [fileupload, setFileUpload] = useState(null);
  const [progress, setProgress] = useState(0);

    const fileCheck = (e) => {
        if (e.target.files[0]){
            setFileUpload(e.target.files[0]);
            setProgress(0);           
            let x = document.getElementById("error");
            let y = document.getElementById("noterror");
            let z = document.getElementById("progress");
            if (z.style.opacity = 1)
              {
                z.style.opacity = 0;
              }           
            if (x.style.display = "block")
                {
                    x.style.display = "none";
                }
            if (y.style.display = "block")
              {
                y.style.display = "none";
              }
        }
    };

    const fileUpload = () => {

        if (fileupload === null)
          {
            let x = document.getElementById("error");
            let y = document.getElementById("noterror");
            if (x.style.display = "none")
              {
                y.style.display = "none";
                x.style.display = "block";
              }
            setTimeout(function() {
              let x = document.getElementById("error");
              x.style.display = "none";     
              }, 2000);  
          }
        else
        {   
          let x = document.getElementById("error");
          x.style.display = "none";
          let z = document.getElementById("progress");
          z.style.opacity=1;

          const uploadTask = storage.ref(`images/${fileupload.name}`);
          
          uploadTask.put(fileupload).on("state_changed",
          (snapshot) => 
            {
              const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
              setProgress(percent);
            },
          (error) => 
            {
              console.log(error);
            },
          async () => 
            {
              const urlput = await uploadTask.getDownloadURL();
              db.collection("FileUploads").add({
                  name: fileupload.name,
                  type: fileupload.type,
                  url: urlput,    
                });
              let y = document.getElementById("noterror");
                if (y.style.display = "none")
                  {
                    y.style.display = "block";
                  }
                else
                  {
                    y.style.display = "none"
                  }       
              setFileUpload(null);
              setTimeout(function() {
              let z = document.getElementById("progress");
                if (z.style.opacity = 1)
                  {
                    z.style.opacity = 0;
                  }
                let y = document.getElementById("noterror");
                y.style.display = "none";  
              }, 1000);      
            }         
          );  
        }
      };

    return (
      <div>
        <p className="error" id="error">Please select a file</p>
        <p className="noterror" id="noterror">File Uploaded Successfully</p>
            <div className="box" >
                <input type="file" id="fileinput" onChange={fileCheck} className="fileinput" ></input>
                <progress value={progress} max="100" className="progress"  id="progress" />
                <button className="filebtn" onClick={fileUpload}>Upload</button>               
            </div>
            <div className="filebox" >
                <FileGrid
                docs={docs}
                setDocs={setDocs}/>
            </div>
        </div>
        );
    };

export default Projects;