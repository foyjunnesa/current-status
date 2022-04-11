import React from 'react';

type parentsProps = {
    children: React.ReactNode;
}
const Parents: React.FC<parentsProps> = ({ children }) => {
    return (
        <div>
            <h3>{children}</h3>
        </div>
    );
};

export default Parents;