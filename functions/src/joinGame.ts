import * as admin from "firebase-admin";

const joinGame = async (userId: string, display_name: string, gameId: number) => {
  const db = admin.database();
  
  let ref = db.ref('game-'+gameId + '/players/' + userId);
  await ref.set({
    display_name: display_name,
    image_data: null,
    location: null,
    status: null
  });
}

export default joinGame;
