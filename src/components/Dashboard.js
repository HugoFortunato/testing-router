import React from 'react';
import { Link } from 'react-router-dom';

const users = [
  {
    id: 1,
    name: 'hugo',
    age: 27,
    email: 'hugo@hugo.com'
  },
  {
    id: 2,
    name: 'catarina',
    age: 27,
    email: 'catarina@catarina.com'
  },
  {
    id: 3,
    name: 'felipe',
    age: 27,
    email: 'felipe@felipe.com'
  },
  {
    id: 4,
    name: 'marcelo',
    age: 27,
    email: 'marcelo@marcelo.com'
  }
]

//Query params

// Caso queira passar somente id do usuário, ir na configuração de rotas lá no './App.js'
// E passar a sintaxe correta '/:id' <Route path="/users/:id" element={<Users />} />

function Dashboard() {
  return (
    <div>
      {users.map(({ id, email, name}) => (
       <Link to={`/users?id=${id}&email=${email}&name=${name}`}>
        <span>
          {email}
        </span>        
       </Link>
      ))}
    </div>
  );
}

export default Dashboard;