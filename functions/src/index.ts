import * as functions from 'firebase-functions';
import authenticateUser from './authenticateUser';
import createGameFunc from './createGame';
import { defaultDatabase } from 'firebase-functions/lib/providers/firestore';
import { string } from 'prop-types';
import { object } from 'firebase-functions/lib/providers/storage';
import { firebaseConfig } from 'firebase-functions';
import * as admin from 'firebase-admin';

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


export const tag = functions.https.onRequest(async (request, response) => {
  admin.initializeApp(); // TODO: import
  const gameId = request.body['gameId'];
  const userId = await authenticateUser(request);
  const gameObj = (await admin.database().ref('/' + gameId).once('value')).val();
  const tagger = gameObj.players[userId];

  let newlyTaggedPlayers: string[] = [];
  gameObj.players.forEach((taggee: any, taggeeId: string) => {
    if (getTargetIsTagged(tagger.location.x, tagger.location.y, tagger.location.z, 
      taggee.location.x, taggee.location.y, taggee.location.z, tagger.location.rotation.yaw, tagger.location.rotation.pitch)) {
      newlyTaggedPlayers.push(taggeeId);
    }
  });

  await newlyTaggedPlayers.forEach((taggeeId: string) => {
    admin.database().ref('/' + gameId + '/' + taggeeId + '/status').set('it');
  });

  
  // write down what the request input needs -- for example:
  /* 
  {
    "location": {
      "x": 18.0,
      "y": 27.3,
      "z": 99.4,
      "rotation": {
        "yaw": 37.4,
        "pitch": 22.9
      }
    },
    "imageData": "64-bit serialized image here"
  }
  */

  // TODO: iterate through all the players in a game to see who just got tagged (they're within a certain proximity)
  // see the database in console.firebase.com if you need to know what format the data is in.


})


/**
 * 
 * Returns the necessary yaw, pitch and roll values for the user to aim
 * directly at the target. This will be used to determine if the target
 * is within the user's field of view.
 * 
 * @param x the user's X-coordinate
 * @param y the user's Y-coordinate
 * @param z the user's Z-coordinate
 * @param targetX the target's X-coordinate
 * @param targetY the target's Y-coordinate
 * @param targetZ the target's Z-coordinate
 */
function getTargetYawPitch(x: number, y: number, z: number, 
  targetX: number, targetY: number, targetZ: number) {

    let deltaX = targetX - x;
    let deltaY = targetY - y;
    let deltaZ = targetZ - z;
 
    let targetYaw = Math.atan2(deltaZ, deltaX);
    let targetPitch = Math.atan2(Math.sqrt(deltaZ * deltaZ + deltaX * deltaX), deltaY) + Math.PI;

    return {targetYaw, targetPitch};
}

function getTargetIsTagged(x: number, y: number, z: number, 
  targetX: number, targetY: number, targetZ: number, yaw: number, pitch: number) {

    const {targetYaw, targetPitch} = getTargetYawPitch(x, y, z, targetX, targetY, targetZ);

    if (Math.abs(targetYaw - yaw) <= 15 && Math.abs(targetPitch - pitch) <= 15) {
      return true;
    } else {
      return false;
    }
}
