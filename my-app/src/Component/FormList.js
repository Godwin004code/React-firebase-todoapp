import React from "react";
import "./Styles/Formlist.style.css"
import {FaTrash} from "react-icons/fa"

const FormList = ({item, deleteTodo}) => {
    return (
        <div>
        
                  
                      <div className="item">
                        <div className="flex-item-1">
                      <h2>{item.TodoValue}</h2>
                      <h3>{item.TodoDate}</h3>
                      </div>
                      <div className="flex-item-2">
                        <FaTrash onClick={deleteTodo} />
                      </div>
                      </div>
                  
        </div>
    )
}

export default FormList