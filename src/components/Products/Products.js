import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)
const Products = () => {
const [user] = useAuthState(auth)
    return (
        <div>
            <h2>Knock Knock ! who's there? </h2>
            <p>{user? user.displayName : "Ami Vuuuuuuut"}</p>
        </div>
    );
};

export default Products;