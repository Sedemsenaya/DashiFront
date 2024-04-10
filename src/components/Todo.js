import React from 'react';
import Listi from "./Listi";
import AddFormBtn from "./AddFormBtn";

function Todo(props) {
    return (
                <div className="row">
                    <div className="col-10">
                        <h3>Member List</h3>
                    </div>
                    <div className="col-sm-1">
                        <AddFormBtn/>
                    </div>

             <Listi/>

        </div>
    );
}

export default Todo;