import * as functions from 'firebase-functions';
import authenticateUser from './authenticateUser';
import createGameFunc from './createGame';
import { defaultDatabase } from 'firebase-functions/lib/providers/firestore';
import { string } from 'prop-types';
import { object } from 'firebase-functions/lib/providers/storage';

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
function getTargetYawPitchRoll(x: number, y: number, z: number, 
  targetX: number, targetY: number, targetZ: number) {
    
}