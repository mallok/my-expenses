const unprotectedPaths = [
  {
    path: '/api',
    method: '*'
  },
  {
    path: '/api/login',
    method: '*'
  },
  {
    path: '/api/user',
    method: 'POST'
  },
  {
    path: '/favicon.ico',
    method: '*'
  }
];

const isUnprotectedResource = (path, method) => {
  return unprotectedPaths.find( p => {
    if (p.path === path) {
      if (p.method === '*') {
        return true;
      } else {
        return method === p.method;
      }
    }
  })
}


module.exports = (req, res, next) => {
  console.log('PATH', req.path, req.method);
  if (isUnprotectedResource(req.path, req.method)) {
    console.log('Unprotected Path');
    next();
  } else {//Check token
    res.status(401).json({error: 'Restricted Area. You need credentials'});
    console.log('Protected Resource');
  }
}
