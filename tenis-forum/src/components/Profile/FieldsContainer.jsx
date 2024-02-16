import React from "react";

const FieldsContainer = (props) => {
    return (
        <div className="w-full p-2 m-auto bg-gray rounded-md shadow-md ring-2 ring-white lg:max-w-xl">
            {props.children}
        </div>
    )
}

export default FieldsContainer