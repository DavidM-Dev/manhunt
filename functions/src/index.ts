import * as functions from 'firebase-functions';
import authenticateUser from './authenticateUser';
import createGameFunc from './createGame';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

export const createGame = functions.https.onRequest(async (request, response) => {
  console.log('test');
  const userId = await authenticateUser(request);
  const display_name = request.body['display_name'];
  response.send(await createGameFunc(userId, display_name));
})
