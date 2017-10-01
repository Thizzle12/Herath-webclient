function get(url, cb){
  return fetch(url , {
    method: "GET",
    accept: 'application/json',
    headers: {
        },
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function post(url, objectBody, cb){
  return fetch(url , {
    method: "POST",
    accept: 'application/json',
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
        },
    body:JSON.stringify(objectBody)
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb);

}


function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}

function getTeams(cb){
  return get('/api/team', cb);
}

function sendDrivingCommand(command, cb){
  var objectBody = {
    'command' : command
  };
  return post('/api/driving/', objectBody, cb);
}

function connectToMalcolm(ip, cb){
  var objectBody = {
    'command' : ip
  };
  return post("/api/connectToMalcolm/", objectBody, cb);
}


const ServerCalls = { getTeams, sendDrivingCommand, connectToMalcolm};

export default ServerCalls;
