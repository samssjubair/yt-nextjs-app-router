import React from 'react';

const page = ({params, searchParams}) => {
    return (
        <div>
            Football Article No: {params.articleId}
            <h2>Age: {searchParams.age}</h2>
            <h2>Ballon D Or: {searchParams.ballon}</h2>
        </div>
    );
};

export default page;

