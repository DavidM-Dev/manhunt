import * as functions from 'firebase-functions';
import { v4 as uuid } from 'uuid';
import createGameFunc from './createGame';
import joinGameFunc from './joinGame';
import { checkTags } from './tag';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

export const createGame = functions.https.onRequest(async (request, response) => {
  const userId = uuid();
  const displayName: string = request.body['display_name'];
  await createGameFunc(userId, displayName);
})

export const joinGame = functions.https.onRequest(async (request, response) => {
  const userId = uuid();
  const gameId = request.body['game_id'];
  const displayName = request.body['display_name'];
  response.send(await joinGameFunc(userId, displayName, gameId));
})

export const tag = functions.https.onRequest(async (request, response) => {
  response.send(checkTags(request));
})
