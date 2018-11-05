import React from 'react'
import { saveUserBook } from '../../../../services/utility/helpers'
import {ToastContainer, ToastStore} from 'react-toasts';

const saveBook = (result, id) => {
    ToastStore.success("Yay, book saved!");

    let description;
    if(result.description !== undefined){
        description = result.description.slice(0,150);
    }
    else description = null;

    saveUserBook(
        id,
        result.title,
        result.authors, 
        description, 
        result.publisher,
        result.imageLinks.smallThumbnail,
        result.infoLink 
    ).then(console.log("saving book"));
}

const SaveButton = ({result, isAuthenticated, id}) => (
    <div>
        { isAuthenticated ? 
            <div>
                <button className="save-btn" onClick={()=>saveBook(result, id)}>save</button>
                <ToastContainer store={ToastStore} position={ToastContainer.POSITION.TOP_RIGHT}/>
            </div>
        : null }
    </div>
)

export default SaveButton;