import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('grumpy19');
  const [userVotes, setUserVotes] = useState({})

  const updateUserVotes = (articleId, voteDirection) => {
    setUserVotes((currentVotes) => {
      if (currentVotes.hasOwnProperty(articleId)) {
        return {
          ...currentVotes,
          [articleId]: currentVotes[articleId] + voteDirection,
        };
      } else {
        return {
          ...currentVotes,
          [articleId]: voteDirection,
        };
      }
    });
  };
  

  return (
    <UserContext.Provider value={{ user, setUser, userVotes, updateUserVotes }}>
      {children}
    </UserContext.Provider>
  );
};