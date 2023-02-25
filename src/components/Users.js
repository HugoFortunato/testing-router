import React from 'react';
import { useLocation } from "react-router-dom";

// Query Params
// Caso queira pegar dados do query params, como por exemplo nesse caso eu peguei o name
// doc: https://v5.reactrouter.com/web/example/query-parameters  


// URL Parameters
// Se quiser pegar somente a id, usar outro hook conforme a linha 26 que está comentada.
// Não esquecer de configurar as rotas no './App.js' e passar a sintaxe correta '/:id' <Route path="/users/:id" element={<Users />} />
// Além de no './Dashboard' depois do .map passar somente a id <Link to={`/users/${id}`}> 
// doc: https://v5.reactrouter.com/web/example/url-params 

function useQuery() {
  const { search }= useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Users() {
  // Query Params
  const query = useQuery()
  const name = query.get('name')

  // URL Parameters 
  // const { id } = useParams()

  return (
    <div>
     {name}
    </div>
  );
}

export default Users;