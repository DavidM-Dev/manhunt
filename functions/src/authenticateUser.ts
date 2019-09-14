import * as functions from 'firebase-functions';

const authenticateUser = async (request: functions.https.Request) => {
  const providedToken = request.headers['token'];
  if(typeof(providedToken) !== 'string') throw new Error('no token provided');
  return providedToken;
  // TODO: authentication stuff -- might change, idk
  // try {
  //   return (await admin.auth().verifyIdToken(providedToken)).uid;
  // } catch(e) {
  //   throw new Error('authentication invalid');
  // }
}

export default authenticateUser;
