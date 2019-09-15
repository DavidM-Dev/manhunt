import * as admin from "firebase-admin";
import * as functions from 'firebase-functions';


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

export async function checkTags(request: functions.https.Request) {
  admin.initializeApp();
  const gameId = request.body['gameId'];
  const userId = request.body['userId'];
  const gameObj = (await admin.database().ref('/' + gameId).once('value')).val();
  const tagger = gameObj.players[userId];

  let newlyTaggedPlayers: string[] = [];
  gameObj.players.forEach((taggee: any, taggeeId: string) => {
    if (getTargetIsTagged(tagger.location.x, tagger.location.y, tagger.location.z, 
      taggee.location.x, taggee.location.y, taggee.location.z, tagger.location.rotation.yaw, tagger.location.rotation.pitch)) {
      newlyTaggedPlayers.push(taggeeId);
    }
  });

  newlyTaggedPlayers.forEach(async (taggeeId: string) => {
    admin.database().ref('/' + gameId + '/' + taggeeId + '/status').set('it');
  });
  return newlyTaggedPlayers;
}

