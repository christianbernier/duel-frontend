import {Component, Input} from '@angular/core';
import {ArmyStagePortion} from "../../../../../model/army.model";

@Component({
  selector: 'duel-army-stage',
  templateUrl: './army-stage.component.html',
  styleUrls: ['./army-stage.component.scss']
})
export class ArmyStageComponent {
  @Input() tokenPosition!: number | 'A_VICTORY' | 'B_VICTORY';
  @Input() lootingStatusA!: 5 | 2 | 0;
  @Input() lootingStatusB!: 5 | 2 | 0;

  public readonly ARMY_STAGE_PORTIONS: ArmyStagePortion[] = [
    {
      type: 'VICTORY',
      indices: ['A_VICTORY'],
    },
    {
      type: 'POINTS',
      side: 'A',
      victoryPoints: 10,
      coinPenalty: 5,
      indices: [-8, -7, -6],
    },
    {
      type: 'POINTS',
      side: 'A',
      victoryPoints: 5,
      coinPenalty: 2,
      indices: [-5, -4, -3],
    },
    {
      type: 'POINTS',
      side: 'A',
      victoryPoints: 2,
      coinPenalty: 0,
      indices: [-2, -1],
    },
    {
      type: 'CENTER',
      indices: [0],
    },
    {
      type: 'POINTS',
      side: 'B',
      victoryPoints: 2,
      coinPenalty: 0,
      indices: [1, 2],
    },
    {
      type: 'POINTS',
      side: 'B',
      victoryPoints: 5,
      coinPenalty: 2,
      indices: [3, 4, 5],
    },
    {
      type: 'POINTS',
      side: 'B',
      victoryPoints: 10,
      coinPenalty: 5,
      indices: [6, 7, 8],
    },
    {
      type: 'VICTORY',
      indices: ['B_VICTORY'],
    }
  ]

  public shouldShowBrokenCoin(portion: (ArmyStagePortion & {type: 'POINTS'})): boolean {
    return portion.coinPenalty !== 0 && (
      (portion.side === 'A'  && this.lootingStatusA < portion.coinPenalty) ||
      (portion.side === 'B'  && this.lootingStatusB < portion.coinPenalty))
  }
}
