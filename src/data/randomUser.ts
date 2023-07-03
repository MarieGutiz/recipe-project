import data from "../data/users.json";
const randomUser = () => {
  const num = data.random_users.length;
  const rand =Math.floor(Math.random()*(num-1) )
  
  return data.random_users[+rand];
};

export default randomUser;
