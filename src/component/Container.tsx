import React from 'react';

type statusProps = {
    children: string;
}
const Container: React.FC<statusProps> = ({ children }) => {
    return (
        <div>
            <h4>{children}</h4>
        </div>
    );
};

export default Container;