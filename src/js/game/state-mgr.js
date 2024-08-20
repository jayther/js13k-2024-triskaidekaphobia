import { GameState } from '../consts';

class StateManager {
  constructor() {
    this.controllerMap = null;
    this.gameState = GameState.Idle;
  }
  init(controllerMap) {
    this.controllerMap = controllerMap;
  }
  setGameState(gameState, opts) {
    this.gameState = gameState;
    this.curController = this.controllerMap[gameState];
    this.curController.init(opts);
  }
  gameUpdate() {
    this.curController.gameUpdate();
  }
  gameRender() {
    this.curController.gameRender();
  }
}

export const stateManager = new StateManager();
