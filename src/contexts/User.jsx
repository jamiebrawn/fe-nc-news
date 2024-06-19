import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('grumpy19');
  const [userVotes, setUserVotes] = useState(() => {
    const savedVotes = localStorage.getItem('userVotes');
    return savedVotes ? JSON.parse(savedVotes) : {};
  })

  useEffect(() => {
    localStorage.setItem('userVotes', JSON.stringify(userVotes));
  }, [userVotes]);

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