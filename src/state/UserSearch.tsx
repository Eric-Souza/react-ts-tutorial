import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 25 },
  { name: 'Michael', age: 28 },
];

interface FoundUser {
  name: string;
  age: number;
}

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<FoundUser | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      User search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Search user</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
