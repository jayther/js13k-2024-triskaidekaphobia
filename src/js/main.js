
import { controllerMap } from './game/controllers';
import { stateManager } from './game/state-mgr';

const viewport = { width: 680, height: 940 };

function gameInit() {
  resize();
  stateManager.init(controllerMap);
  // stateManager.setGameState(GameState.MainMenu);
  // stateManager.setGameState(GameState.Leaderboard, {
  //   score: randInt(1, 100),
  //   timestamp: Date.now(),
  //   roadCount: randInt(1, 20),
  //   totalMaxScore: 100,
  // });
}

function gameUpdate() {
  stateManager.gameUpdate();
}

function gameUpdatePost() {
}

function gameRender() {
  stateManager.gameRender();
}

function gameRenderPost() {
}

// engineInit(gameInit, gameUpdate, gameUpdatePost, gameRender, gameRenderPost, 't.png');

let resizeTimeout = null;
function debouncedResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(resize, 200);
}

function resize() {
  const targetAspectRatio = viewport.width / viewport.height;
  const currentAspectRatio = innerWidth / innerHeight;
  const scale = targetAspectRatio > currentAspectRatio ?
    (innerWidth / viewport.width) :
    (innerHeight / viewport.height);
  // setCameraScale(standardScale * scale);
}

window.addEventListener('resize', debouncedResize, false);
