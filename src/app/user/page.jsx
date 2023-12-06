import UserCard from '../../components/user/UserCard';
import React from 'react';

const UserPage = async () => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const res= await fetch(url, {
        next: {
            revalidate: 10
        }
    });
    const userData= await res.json();
    return (
        <div className='flex flex-wrap gap-8'>
            {
                userData.map((user)=>(
                    <UserCard key={user.id} user={user}/>
                ))
            }
        </div>
    );
};

export default UserPage;