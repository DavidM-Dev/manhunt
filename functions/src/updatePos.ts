import * as functions from 'firebase-functions';
import admin = require('firebase-admin');

export async function updatePosFunc(request: functions.https.Request) {
  const gameId = request.body['gameId'];
  const userId = request.body['userId'];
  const location = request.body['location'];
  const db = admin.database();
  await db.ref('/' + gameId + '/players/' + userId + '/location').set(location);
}
