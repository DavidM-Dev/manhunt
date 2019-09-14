import * as admin from "firebase-admin";


async function fetchGameId(db: admin.database.Database) {
  let ref = db.ref('gameCounter');
  let res;
  try {
    const snapshot = await ref.once("value");
    res = 'game-' + snapshot.val() + 1;
  } catch(e) {
    res = 'game-1';
  }
  await ref.set(res);
  return res;
}

function generateGameStructure(userId: string, display_name: string) {
  let players: any = {};
  players[userId] = {
    display_name: display_name,
    image_data: null,
    location: null,
    status: null
  }
  
  return {
    owner: userId,
    players: players,
    start_time: null
  }
}

const createGame = async (userId: string, display_name: string) => {
  admin.initializeApp();

  const db = admin.database();

  const gameId = await fetchGameId(db);
  
  const gameObj = generateGameStructure(userId, display_name);
  let ref = db.ref(gameId);
  await ref.set(gameObj);
}

export default createGame;

