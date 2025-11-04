import React from 'react';
// import logo from '../assets/images'
import studentData from '../assets/data/fakedata.json'


export const Media = () => {

    console.log(studentData)
    return (
        <div>
            <p>Media Files</p>

            <ol>{studentData.map((element, index) =><li key={index}><p>student name</p> {element.name}  class {element.class}</li>

            )}
            </ol>
        </div>
    )
}
