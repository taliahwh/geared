import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Dennis Rodman',
    username: 'fab__five',
    email: 'toni@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Sara Thompson',
    username: '4crispcorners',
    email: 'sara@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
