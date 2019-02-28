import React, {useState} from 'react';
import ResourceList from "./ResourceList";
import UsersList from './UsersList';

const App = () => {
    const [resource, setResource] = useState('posts');

    return (
        <div>
            <UsersList/>
            <button className={'ui button primary'} onClick={() => setResource('posts')}>Posts</button>
            <button className={'ui button primary'} onClick={() => setResource('todos')}>Todos</button>
            <ResourceList resource={resource} />
        </div>
    );

}

export default App;
