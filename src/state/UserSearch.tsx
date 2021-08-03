import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 22 },
  { name: 'Shapal', age: 29 },
  { name: 'Jose', age: 39 },
];
const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    setName('');
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  


  return (
    <div>
      <h3>find users</h3>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <h4>User</h4>
      <p>
        {user && user.name}
        {user && user.age}
      </p>
    </div>
  );
};

export default UserSearch;
