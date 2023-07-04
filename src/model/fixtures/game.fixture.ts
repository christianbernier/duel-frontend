import { GameState } from '../game.model';
import { BrownResource, GrayResource } from '../resource.model';
import { CardType, FlippedCardType, LinkSymbol } from '../card.model';
import { CommercialType } from '../commercial.model';
import { ScienceProgressToken, ScienceType } from '../science.model';
import { GuildType } from '../guild.model';
import { WonderType } from '../wonder.model';

export const EXAMPLE_IN_PROGRESS_GAME_STATE: GameState = {
  inProgress: true,
  playerA: {
    player: 'A',
    name: 'Christian',
    cards: [
      {
        name: 'Stone Pit',
        resourceCost: [],
        coinCost: 1,
        cardType: CardType.BROWN_PRODUCTION,
        produces: [BrownResource.STONE],
      },
      {
        name: 'Clay Pool',
        resourceCost: [],
        coinCost: 0,
        cardType: CardType.BROWN_PRODUCTION,
        produces: [BrownResource.CLAY],
      },
      {
        name: 'Clay Pit',
        resourceCost: [],
        coinCost: 1,
        cardType: CardType.BROWN_PRODUCTION,
        produces: [BrownResource.CLAY],
      },
      {
        name: 'Theater',
        resourceCost: [],
        coinCost: 0,
        cardType: CardType.BLUE_VICTORY,
        victoryPoints: 3,
        providesLink: LinkSymbol.MASK,
      },
      {
        name: 'Altar',
        resourceCost: [],
        coinCost: 0,
        cardType: CardType.BLUE_VICTORY,
        victoryPoints: 3,
        providesLink: LinkSymbol.MOON,
      },
    ],
    coins: 13,
    scienceTokens: [],
    warLootingStatus: 2,
    wonders: [
      {
        type: WonderType.PIRAEUS,
        disabled: false,
        resourceCost: [
          BrownResource.CLAY,
          BrownResource.STONE,
          BrownResource.WOOD,
          BrownResource.WOOD,
        ],
        claimedWith: null,
      },
      {
        type: WonderType.THE_STATUE_OF_ZEUS,
        disabled: false,
        resourceCost: [
          GrayResource.PAPYRUS,
          GrayResource.PAPYRUS,
          BrownResource.CLAY,
          BrownResource.WOOD,
          BrownResource.STONE,
        ],
        claimedWith: FlippedCardType.AGE_1,
      },
      {
        type: WonderType.THE_PYRAMIDS,
        disabled: false,
        resourceCost: [
          GrayResource.PAPYRUS,
          BrownResource.STONE,
          BrownResource.STONE,
          BrownResource.STONE,
        ],
        claimedWith: FlippedCardType.AGE_3_PINK,
      },
      {
        type: WonderType.THE_GREAT_LIBRARY,
        disabled: false,
        resourceCost: [
          GrayResource.PAPYRUS,
          GrayResource.GLASS,
          BrownResource.WOOD,
          BrownResource.WOOD,
          BrownResource.WOOD,
        ],
        claimedWith: FlippedCardType.AGE_2,
      },
    ],
  },
  playerB: {
    player: 'B',
    name: 'Ben',
    cards: [
      {
        name: 'Baths',
        resourceCost: [BrownResource.STONE],
        coinCost: 0,
        cardType: CardType.BLUE_VICTORY,
        victoryPoints: 3,
        providesLink: LinkSymbol.RAIN,
      },
      {
        name: 'Stone Reserve',
        resourceCost: [],
        coinCost: 3,
        cardType: CardType.YELLOW_COMMERCIAL,
        commercialType: CommercialType.BROWN_RESOURCE_DISCOUNT,
        resource: BrownResource.STONE,
      },
      {
        name: 'Guard Tower',
        resourceCost: [],
        coinCost: 0,
        cardType: CardType.RED_ARMY,
        shields: 1,
      },
      {
        name: 'Stable',
        resourceCost: [BrownResource.WOOD],
        coinCost: 0,
        cardType: CardType.RED_ARMY,
        shields: 1,
        providesLink: LinkSymbol.HORSESHOE,
      },
    ],
    coins: 11,
    scienceTokens: [
      ScienceProgressToken.ECONOMY,
      ScienceProgressToken.STRATEGY,
    ],
    warLootingStatus: 5,
    wonders: [
      {
        type: WonderType.THE_HANGING_GARDENS,
        disabled: false,
        resourceCost: [
          GrayResource.PAPYRUS,
          GrayResource.GLASS,
          BrownResource.WOOD,
          BrownResource.WOOD,
        ],
        claimedWith: null,
      },
      {
        type: WonderType.THE_SPHINX,
        disabled: false,
        resourceCost: [
          GrayResource.GLASS,
          GrayResource.GLASS,
          BrownResource.CLAY,
          BrownResource.STONE,
        ],
        claimedWith: null,
      },
      {
        type: WonderType.THE_APPIAN_WAY,
        disabled: true,
        resourceCost: [
          GrayResource.PAPYRUS,
          BrownResource.CLAY,
          BrownResource.CLAY,
          BrownResource.STONE,
          BrownResource.STONE,
        ],
        claimedWith: null,
      },
      {
        type: WonderType.THE_TEMPLE_OF_ARTEMIS,
        disabled: false,
        resourceCost: [
          GrayResource.PAPYRUS,
          GrayResource.GLASS,
          BrownResource.STONE,
          BrownResource.WOOD,
        ],
        claimedWith: null,
      },
    ],
  },
  turn: 'A',
  cardStage: [
    [
      { type: 'PLACEHOLDER' },
      { type: 'PLACEHOLDER' },
      {
        type: 'FACE_UP',
        faceUpCard: {
          name: 'Port',
          resourceCost: [
            BrownResource.WOOD,
            GrayResource.GLASS,
            GrayResource.PAPYRUS,
          ],
          coinCost: 0,
          cardType: CardType.YELLOW_COMMERCIAL,
          commercialType: CommercialType.COINS_PER_CARD,
          coinsForCardType: CardType.BROWN_PRODUCTION,
          coinsPerCard: 2,
          victoryPoints: 3,
        },
      },
      {
        type: 'FACE_UP',
        faceUpCard: {
          name: "Merchant's Guild",
          resourceCost: [
            BrownResource.CLAY,
            BrownResource.WOOD,
            GrayResource.GLASS,
            GrayResource.PAPYRUS,
          ],
          coinCost: 0,
          cardType: CardType.PURPLE_GUILD,
          guildType: GuildType.VICTORY_POINTS_AND_COINS_PER_CARD_TYPE,
          guildCardTypes: [CardType.YELLOW_COMMERCIAL],
          coins: 1,
          victoryPoints: 1,
        },
      },
      { type: 'PLACEHOLDER' },
      { type: 'PLACEHOLDER' },
    ],
    [
      { type: 'PLACEHOLDER' },
      { type: 'PLACEHOLDER' },
      { type: 'FACE_DOWN', faceDownCard: FlippedCardType.AGE_1 },
      { type: 'FACE_DOWN', faceDownCard: FlippedCardType.AGE_1 },
      { type: 'FACE_DOWN', faceDownCard: FlippedCardType.AGE_1 },
      { type: 'PLACEHOLDER' },
    ],
    [
      { type: 'PLACEHOLDER' },
      {
        type: 'FACE_UP',
        faceUpCard: {
          name: 'Palace',
          resourceCost: [
            BrownResource.CLAY,
            BrownResource.STONE,
            BrownResource.WOOD,
            GrayResource.GLASS,
            GrayResource.GLASS,
          ],
          coinCost: 0,
          cardType: CardType.BLUE_VICTORY,
          victoryPoints: 7,
        },
      },
      {
        type: 'FACE_UP',
        faceUpCard: {
          name: 'Academy',
          resourceCost: [
            BrownResource.STONE,
            BrownResource.WOOD,
            GrayResource.GLASS,
            GrayResource.GLASS,
          ],
          coinCost: 0,
          cardType: CardType.GREEN_SCIENCE,
          scienceType: ScienceType.SUN_DIAL,
          victoryPoints: 3,
        },
      },
      {
        type: 'FACE_UP',
        faceUpCard: {
          name: 'Aqueduct',
          resourceCost: [
            BrownResource.STONE,
            BrownResource.STONE,
            BrownResource.STONE,
          ],
          coinCost: 0,
          cardType: CardType.BLUE_VICTORY,
          victoryPoints: 5,
          buyWithLink: LinkSymbol.RAIN,
        },
      },
      {
        type: 'FACE_UP',
        faceUpCard: {
          name: 'Forum',
          resourceCost: [BrownResource.CLAY],
          coinCost: 3,
          cardType: CardType.YELLOW_COMMERCIAL,
          commercialType: CommercialType.ANY_GRAY_RESOURCE,
        },
      },
      { type: 'PLACEHOLDER' },
    ],
    [
      { type: 'PLACEHOLDER' },
      { type: 'FACE_DOWN', faceDownCard: FlippedCardType.AGE_1 },
      { type: 'FACE_DOWN', faceDownCard: FlippedCardType.AGE_1 },
      { type: 'FACE_DOWN', faceDownCard: FlippedCardType.AGE_1 },
      { type: 'FACE_DOWN', faceDownCard: FlippedCardType.AGE_1 },
      { type: 'FACE_DOWN', faceDownCard: FlippedCardType.AGE_1 },
    ],
    [
      {
        type: 'FACE_UP',
        faceUpCard: {
          name: 'Glassblower',
          resourceCost: [],
          coinCost: 0,
          cardType: CardType.GRAY_PRODUCTION,
          produces: [GrayResource.GLASS],
        },
      },
      {
        type: 'FACE_UP',
        faceUpCard: {
          name: 'Barracks',
          resourceCost: [],
          coinCost: 3,
          cardType: CardType.RED_ARMY,
          shields: 1,
          buyWithLink: LinkSymbol.SWORD,
        },
      },
      {
        type: 'FACE_UP',
        faceUpCard: {
          name: 'Statue',
          resourceCost: [BrownResource.CLAY, BrownResource.CLAY],
          coinCost: 0,
          cardType: CardType.BLUE_VICTORY,
          victoryPoints: 4,
          providesLink: LinkSymbol.COLUMN,
          buyWithLink: LinkSymbol.MASK,
        },
      },
      {
        type: 'FACE_UP',
        faceUpCard: {
          name: 'Observatory',
          resourceCost: [
            BrownResource.STONE,
            GrayResource.PAPYRUS,
            GrayResource.PAPYRUS,
          ],
          coinCost: 0,
          cardType: CardType.GREEN_SCIENCE,
          scienceType: ScienceType.GYROSCOPE,
          victoryPoints: 2,
          buyWithLink: LinkSymbol.TEA,
        },
      },
      {
        type: 'FACE_UP',
        faceUpCard: {
          name: 'Armory',
          resourceCost: [
            BrownResource.STONE,
            BrownResource.STONE,
            GrayResource.GLASS,
          ],
          coinCost: 0,
          cardType: CardType.YELLOW_COMMERCIAL,
          commercialType: CommercialType.COINS_PER_CARD,
          coinsForCardType: CardType.RED_ARMY,
          coinsPerCard: 1,
          victoryPoints: 3,
        },
      },
      {
        type: 'FACE_UP',
        faceUpCard: {
          name: 'Arena',
          resourceCost: [
            BrownResource.CLAY,
            BrownResource.STONE,
            BrownResource.WOOD,
          ],
          coinCost: 0,
          cardType: CardType.YELLOW_COMMERCIAL,
          commercialType: CommercialType.COINS_PER_WONDER,
          victoryPoints: 3,
          coinsPerWonder: 2,
          buyWithLink: LinkSymbol.BARREL,
        },
      },
    ],
  ],
  warStatus: -2,
  scienceTokens: [
    ScienceProgressToken.URBANISM,
    null,
    ScienceProgressToken.MASONRY,
    ScienceProgressToken.AGRICULTURE,
    null,
  ],
};
