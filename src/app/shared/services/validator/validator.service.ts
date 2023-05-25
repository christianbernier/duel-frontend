import { Injectable } from '@angular/core';
import {GameState} from "../../../../model/game.model";
import {PlayerState} from "../../../../model/player.model";

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  private static validate<T>(object: unknown, assertion: (object: unknown) => asserts object is T): object is T {
    try {
      assertion(object);
    } catch (e) {
      return false;
    }

    return true;
  }

  public static assertPlayerState(object: unknown): asserts object is PlayerState {
    if (object === undefined) throw new Error('Undefined.');
    if (object === null) return; // Non-player value.
    if (typeof object !== 'object') throw new Error('Not an object.');

    if (! ('player' in object)) throw new Error('Missing expected field player.');
    if (typeof object.player !== 'string') throw new Error('Player is not string.');
    if (object.player !== 'A' && object.player !== 'B') throw new Error('Invalid player.');

    if (! ('cards' in object)) throw new Error('Missing expected field cards.');
    // Assume cards are good. Maybe work on this later?

    if (! ('coins' in object)) throw new Error('Missing expected field coins.');
    if (typeof object.coins !== 'number') throw new Error('Coins is not number.');
    if (object.coins < 0) throw new Error('Cannot have negative coins.');

    if (! ('scienceTokens' in object)) throw new Error('Missing expected field scienceTokens.');
    // Assume scienceTokens are good. Maybe work on this later?

    if (! ('warLootingStatus' in object)) throw new Error('Missing expected field warLootingStatus.');
    if (typeof object.warLootingStatus !== 'number') throw new Error('warLootingStatus is not number.');
    if (object.warLootingStatus !== 0 && object.warLootingStatus !== 2 && object.warLootingStatus !== 5) throw new Error('warLootingStatus must be 0, 2, or 5.');
  }

  public static assertWarStatus(object: unknown): asserts object is number | 'A_VICTORY' | 'B_VICTORY' {
    if (object === null || object === undefined) throw new Error('Null or undefined.');
    if (typeof object === 'number') {
      if (object < 0 || object > 8) throw new Error('Status out of range');
    } else if (typeof object === 'string') {
      if (object !== 'A_VICTORY' && object !== 'B_VICTORY') throw new Error('Invalid string.');
    } else {
      throw new Error('Unexpected type.');
    }
  }

  public static assertGameState(object: unknown): asserts object is GameState {
    if (!object) throw new Error('Falsy.');
    if (typeof object !== 'object') throw new Error('Not an object.');

    if (! ('inProgress' in object)) throw new Error('Missing expected field inProgress.');
    if (typeof object.inProgress !== 'boolean') throw new Error('inProgress is not boolean.');

    if (! ('playerA' in object)) throw new Error('Missing expected field playerA.');
    this.assertPlayerState(object.playerA);

    if (! ('playerB' in object)) throw new Error('Missing expected field playerB.');
    this.assertPlayerState(object.playerB);

    if (! ('cardStage' in object)) throw new Error('Missing expected field cardStage.');
    // Assume cardStage is good. Maybe work on this later?

    if (! ('warStatus' in object)) throw new Error('Missing expected field warStatus.');
    this.assertWarStatus(object.warStatus);

    if (! ('scienceTokens' in object)) throw new Error('Missing expected field scienceTokens.');
    // Assume scienceTokens are good. Maybe work on this later?
  }

  public static validatePlayerState(object: unknown): object is PlayerState {
    return this.validate(object, this.assertPlayerState);
  }

  public static validateGameState(object: unknown): object is GameState {
    return this.validate(object, this.assertGameState);
  }
}
