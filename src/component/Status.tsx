import React from 'react';

type statusProps = {
    status: "success" | "error" | "Loading";
    data?: string;
};

const Status = (props: statusProps) => {
    return (
        <>
            <h1>your current status is {props.status}</h1>
            <h1>Your name is {props.data}</h1>
        </>
    );
};

export default Status;