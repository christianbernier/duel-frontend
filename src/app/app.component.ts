import {Component} from '@angular/core';
import {Card, CardStage, CardType, FlippedCardType, LinkSymbol} from "../model/card.model";
import {BrownResource, GrayResource} from "../model/resource.model";
import {ScienceProgressToken, ScienceType} from "../model/science.model";
import {CommercialType} from "../model/commercial.model";
import {GuildType} from "../model/guild.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'duel';

  public get FlippedCardType() {
    return FlippedCardType;
  }

  public get ScienceProgressToken() {
    return ScienceProgressToken;
  }
  age1Cards: Card[] = [
    {
      name: 'Lumber Yard',
      resourceCost: [],
      coinCost: 0,
      cardType: CardType.BROWN_PRODUCTION,
      produces: [
        BrownResource.WOOD,
      ]
    },
    {
      name: 'Logging Camp',
      resourceCost: [],
      coinCost: 1,
      cardType: CardType.BROWN_PRODUCTION,
      produces: [
        BrownResource.WOOD,
      ]
    },
    {
      name: 'Clay Pool',
      resourceCost: [],
      coinCost: 0,
      cardType: CardType.BROWN_PRODUCTION,
      produces: [
        BrownResource.CLAY,
      ]
    },
    {
      name: 'Clay Pit',
      resourceCost: [],
      coinCost: 1,
      cardType: CardType.BROWN_PRODUCTION,
      produces: [
        BrownResource.CLAY,
      ]
    },
    {
      name: 'Quarry',
      resourceCost: [],
      coinCost: 0,
      cardType: CardType.BROWN_PRODUCTION,
      produces: [
        BrownResource.STONE,
      ]
    },
    {
      name: 'Stone Pit',
      resourceCost: [],
      coinCost: 1,
      cardType: CardType.BROWN_PRODUCTION,
      produces: [
        BrownResource.STONE,
      ]
    },
    {
      name: 'Glassworks',
      resourceCost: [],
      coinCost: 1,
      cardType: CardType.GRAY_PRODUCTION,
      produces: [
        GrayResource.GLASS,
      ]
    },
    {
      name: 'Press',
      resourceCost: [],
      coinCost: 1,
      cardType: CardType.GRAY_PRODUCTION,
      produces: [
        GrayResource.PAPYRUS,
      ]
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
      resourceCost: [
        BrownResource.WOOD,
      ],
      coinCost: 0,
      cardType: CardType.RED_ARMY,
      shields: 1,
      providesLink: LinkSymbol.HORSESHOE,
    },
    {
      name: 'Garrison',
      resourceCost: [
        BrownResource.CLAY,
      ],
      coinCost: 0,
      cardType: CardType.RED_ARMY,
      shields: 1,
      providesLink: LinkSymbol.SWORD,
    },
    {
      name: 'Palisade',
      resourceCost: [],
      coinCost: 2,
      cardType: CardType.RED_ARMY,
      shields: 1,
      providesLink: LinkSymbol.CASTLE,
    },
    {
      name: 'Workshop',
      resourceCost: [
        GrayResource.PAPYRUS,
      ],
      coinCost: 0,
      cardType: CardType.GREEN_SCIENCE,
      scienceType: ScienceType.PENDULUM,
      victoryPoints: 1,
    },
    {
      name: 'Apothecary',
      resourceCost: [
        GrayResource.GLASS,
      ],
      coinCost: 0,
      cardType: CardType.GREEN_SCIENCE,
      scienceType: ScienceType.WHEEL,
      victoryPoints: 1,
    },
    {
      name: 'Scriptorium',
      resourceCost: [],
      coinCost: 2,
      cardType: CardType.GREEN_SCIENCE,
      scienceType: ScienceType.QUILL,
      victoryPoints: 0,
      providesLink: LinkSymbol.BOOK,
    },
    {
      name: 'Pharmacist',
      resourceCost: [],
      coinCost: 2,
      cardType: CardType.GREEN_SCIENCE,
      scienceType: ScienceType.MORTAR,
      victoryPoints: 0,
      providesLink: LinkSymbol.GEAR,
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
      name: 'Clay Reserve',
      resourceCost: [],
      coinCost: 3,
      cardType: CardType.YELLOW_COMMERCIAL,
      commercialType: CommercialType.BROWN_RESOURCE_DISCOUNT,
      resource: BrownResource.CLAY,
    },
    {
      name: 'Wood Reserve',
      resourceCost: [],
      coinCost: 3,
      cardType: CardType.YELLOW_COMMERCIAL,
      commercialType: CommercialType.BROWN_RESOURCE_DISCOUNT,
      resource: BrownResource.WOOD,
    },
    {
      name: 'Tavern',
      resourceCost: [],
      coinCost: 0,
      cardType: CardType.YELLOW_COMMERCIAL,
      commercialType: CommercialType.COINS,
      coins: 4,
      providesLink: LinkSymbol.VASE,
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
    {
      name: 'Baths',
      resourceCost: [
        BrownResource.STONE,
      ],
      coinCost: 0,
      cardType: CardType.BLUE_VICTORY,
      victoryPoints: 3,
      providesLink: LinkSymbol.RAIN,
    },
  ]

  age2Cards: Card[] = [
    {
      name: 'Saw Mill',
      resourceCost: [],
      coinCost: 2,
      cardType: CardType.BROWN_PRODUCTION,
      produces: [
        BrownResource.WOOD,
        BrownResource.WOOD,
      ]
    },
    {
      name: 'Brickyard',
      resourceCost: [],
      coinCost: 2,
      cardType: CardType.BROWN_PRODUCTION,
      produces: [
        BrownResource.CLAY,
        BrownResource.CLAY,
      ]
    },
    {
      name: 'Shelf Quarry',
      resourceCost: [],
      coinCost: 2,
      cardType: CardType.BROWN_PRODUCTION,
      produces: [
        BrownResource.STONE,
        BrownResource.STONE,
      ]
    },
    {
      name: 'Glassblower',
      resourceCost: [],
      coinCost: 0,
      cardType: CardType.GRAY_PRODUCTION,
      produces: [
        GrayResource.GLASS,
      ]
    },
    {
      name: 'Drying Room',
      resourceCost: [],
      coinCost: 0,
      cardType: CardType.GRAY_PRODUCTION,
      produces: [
        GrayResource.PAPYRUS,
      ]
    },
    {
      name: 'Walls',
      resourceCost: [
        BrownResource.STONE,
        BrownResource.STONE,
      ],
      coinCost: 0,
      cardType: CardType.RED_ARMY,
      shields: 2,
    },
    {
      name: 'Horse Breeders',
      resourceCost: [
        BrownResource.CLAY,
        BrownResource.WOOD,
      ],
      coinCost: 0,
      cardType: CardType.RED_ARMY,
      shields: 1,
      buyWithLink: LinkSymbol.HORSESHOE,
    },
    {
      name: 'Barracks',
      resourceCost: [],
      coinCost: 3,
      cardType: CardType.RED_ARMY,
      shields: 1,
      buyWithLink: LinkSymbol.SWORD,
    },
    {
      name: 'Archery Range',
      resourceCost: [
        BrownResource.STONE,
        BrownResource.WOOD,
        GrayResource.PAPYRUS,
      ],
      coinCost: 0,
      cardType: CardType.RED_ARMY,
      shields: 2,
      providesLink: LinkSymbol.TARGET,
    },
    {
      name: 'Parade Ground',
      resourceCost: [
        BrownResource.CLAY,
        BrownResource.CLAY,
        GrayResource.GLASS,
      ],
      coinCost: 0,
      cardType: CardType.RED_ARMY,
      shields: 2,
      providesLink: LinkSymbol.HELMET,
    },
    {
      name: 'Library',
      resourceCost: [
        BrownResource.STONE,
        BrownResource.WOOD,
        GrayResource.GLASS,
      ],
      coinCost: 0,
      cardType: CardType.GREEN_SCIENCE,
      scienceType: ScienceType.QUILL,
      victoryPoints: 2,
      buyWithLink: LinkSymbol.BOOK,
    },
    {
      name: 'Dispensary',
      resourceCost: [
        BrownResource.CLAY,
        BrownResource.CLAY,
        BrownResource.STONE,
      ],
      coinCost: 0,
      cardType: CardType.GREEN_SCIENCE,
      scienceType: ScienceType.MORTAR,
      victoryPoints: 2,
      buyWithLink: LinkSymbol.GEAR,
    },
    {
      name: 'School',
      resourceCost: [
        BrownResource.WOOD,
        GrayResource.PAPYRUS,
        GrayResource.PAPYRUS,
      ],
      coinCost: 0,
      cardType: CardType.GREEN_SCIENCE,
      scienceType: ScienceType.WHEEL,
      victoryPoints: 1,
      providesLink: LinkSymbol.HARP,
    },
    {
      name: 'Laboratory',
      resourceCost: [
        BrownResource.WOOD,
        GrayResource.GLASS,
        GrayResource.GLASS,
      ],
      coinCost: 0,
      cardType: CardType.GREEN_SCIENCE,
      scienceType: ScienceType.PENDULUM,
      victoryPoints: 1,
      providesLink: LinkSymbol.TEA,
    },
    {
      name: 'Forum',
      resourceCost: [
        BrownResource.CLAY,
      ],
      coinCost: 3,
      cardType: CardType.YELLOW_COMMERCIAL,
      commercialType: CommercialType.ANY_GRAY_RESOURCE,
    },
    {
      name: 'Caravansery',
      resourceCost: [
        GrayResource.GLASS,
        GrayResource.PAPYRUS,
      ],
      coinCost: 2,
      cardType: CardType.YELLOW_COMMERCIAL,
      commercialType: CommercialType.ANY_BROWN_RESOURCE,
    },
    {
      name: 'Customs House',
      resourceCost: [],
      coinCost: 4,
      cardType: CardType.YELLOW_COMMERCIAL,
      commercialType: CommercialType.GRAY_RESOURCE_DISCOUNT,
      resources: [GrayResource.PAPYRUS, GrayResource.GLASS]
    },
    {
      name: 'Brewery',
      resourceCost: [],
      coinCost: 0,
      cardType: CardType.YELLOW_COMMERCIAL,
      commercialType: CommercialType.COINS,
      coins: 6,
    },
    {
      name: 'Tribunal',
      resourceCost: [
        BrownResource.WOOD,
        BrownResource.WOOD,
        GrayResource.GLASS,
      ],
      coinCost: 0,
      cardType: CardType.BLUE_VICTORY,
      victoryPoints: 5,
    },
    {
      name: 'Statue',
      resourceCost: [
        BrownResource.CLAY,
        BrownResource.CLAY,
      ],
      coinCost: 0,
      cardType: CardType.BLUE_VICTORY,
      victoryPoints: 4,
      providesLink: LinkSymbol.COLUMN,
      buyWithLink: LinkSymbol.MASK,
    },
    {
      name: 'Temple',
      resourceCost: [
        BrownResource.WOOD,
        GrayResource.PAPYRUS,
      ],
      coinCost: 0,
      cardType: CardType.BLUE_VICTORY,
      victoryPoints: 4,
      providesLink: LinkSymbol.SUN,
      buyWithLink: LinkSymbol.MOON,
    },
    {
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
    {
      name: 'Rostrum',
      resourceCost: [
        BrownResource.STONE,
        BrownResource.WOOD,
      ],
      coinCost: 0,
      cardType: CardType.BLUE_VICTORY,
      victoryPoints: 4,
      providesLink: LinkSymbol.BANK,
    },
  ];

  age3Cards: Card[] = [
    {
      name: 'Arsenal',
      resourceCost: [
        BrownResource.CLAY,
        BrownResource.CLAY,
        BrownResource.CLAY,
        BrownResource.WOOD,
        BrownResource.WOOD,
      ],
      coinCost: 0,
      cardType: CardType.RED_ARMY,
      shields: 3,
    },
    {
      name: 'Courthouse',
      resourceCost: [],
      coinCost: 8,
      cardType: CardType.RED_ARMY,
      shields: 3,
    },
    {
      name: 'Fortifications',
      resourceCost: [
        BrownResource.STONE,
        BrownResource.STONE,
        BrownResource.CLAY,
        GrayResource.PAPYRUS
      ],
      coinCost: 0,
      cardType: CardType.RED_ARMY,
      shields: 2,
      buyWithLink: LinkSymbol.CASTLE,
    },
    {
      name: 'Siege Workshop',
      resourceCost: [
        BrownResource.WOOD,
        BrownResource.WOOD,
        BrownResource.WOOD,
        GrayResource.GLASS
      ],
      coinCost: 0,
      cardType: CardType.RED_ARMY,
      shields: 2,
      buyWithLink: LinkSymbol.TARGET,
    },
    {
      name: 'Circus',
      resourceCost: [
        BrownResource.CLAY,
        BrownResource.CLAY,
        BrownResource.STONE,
        BrownResource.STONE,
      ],
      coinCost: 0,
      cardType: CardType.RED_ARMY,
      shields: 2,
      buyWithLink: LinkSymbol.HELMET,
    },
    {
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
    {
      name: 'Study',
      resourceCost: [
        BrownResource.WOOD,
        BrownResource.WOOD,
        GrayResource.GLASS,
        GrayResource.PAPYRUS,
      ],
      coinCost: 0,
      cardType: CardType.GREEN_SCIENCE,
      scienceType: ScienceType.SUN_DIAL,
      victoryPoints: 3,
    },
    {
      name: 'University',
      resourceCost: [
        BrownResource.CLAY,
        GrayResource.GLASS,
        GrayResource.PAPYRUS,
      ],
      coinCost: 0,
      cardType: CardType.GREEN_SCIENCE,
      scienceType: ScienceType.GYROSCOPE,
      victoryPoints: 2,
      buyWithLink: LinkSymbol.HARP,
    },
    {
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
    {
      name: 'Chamber of Commerce',
      resourceCost: [
        GrayResource.PAPYRUS,
        GrayResource.PAPYRUS,
      ],
      coinCost: 0,
      cardType: CardType.YELLOW_COMMERCIAL,
      commercialType: CommercialType.COINS_PER_CARD,
      coinsForCardType: CardType.GRAY_PRODUCTION,
      coinsPerCard: 3,
      victoryPoints: 3,
    },
    {
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
    {
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
    {
      name: 'Lighthouse',
      resourceCost: [
        BrownResource.CLAY,
        BrownResource.CLAY,
        GrayResource.GLASS,
      ],
      coinCost: 0,
      cardType: CardType.YELLOW_COMMERCIAL,
      commercialType: CommercialType.COINS_PER_CARD,
      coinsForCardType: CardType.YELLOW_COMMERCIAL,
      coinsPerCard: 1,
      victoryPoints: 3,
      buyWithLink: LinkSymbol.VASE,
    },
    {
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
    {
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
    {
      name: 'Town Hall',
      resourceCost: [
        BrownResource.STONE,
        BrownResource.STONE,
        BrownResource.STONE,
        BrownResource.WOOD,
        BrownResource.WOOD,
      ],
      coinCost: 0,
      cardType: CardType.BLUE_VICTORY,
      victoryPoints: 7,
    },
    {
      name: 'Obelisk',
      resourceCost: [
        BrownResource.STONE,
        BrownResource.STONE,
        GrayResource.GLASS,
      ],
      coinCost: 0,
      cardType: CardType.BLUE_VICTORY,
      victoryPoints: 5,
    },
    {
      name: 'Gardens',
      resourceCost: [
        BrownResource.CLAY,
        BrownResource.CLAY,
        BrownResource.WOOD,
        BrownResource.WOOD,
      ],
      coinCost: 0,
      cardType: CardType.BLUE_VICTORY,
      victoryPoints: 6,
      buyWithLink: LinkSymbol.COLUMN,
    },
    {
      name: 'Pantheon',
      resourceCost: [
        BrownResource.CLAY,
        BrownResource.WOOD,
        GrayResource.PAPYRUS,
        GrayResource.PAPYRUS,
      ],
      coinCost: 0,
      cardType: CardType.BLUE_VICTORY,
      victoryPoints: 6,
      buyWithLink: LinkSymbol.SUN,
    },
    {
      name: 'Senate',
      resourceCost: [
        BrownResource.CLAY,
        BrownResource.CLAY,
        BrownResource.STONE,
        GrayResource.PAPYRUS,
      ],
      coinCost: 0,
      cardType: CardType.BLUE_VICTORY,
      victoryPoints: 5,
      buyWithLink: LinkSymbol.BANK,
    },
    {
      name: 'Merchant\'s Guild',
      resourceCost: [
        BrownResource.CLAY,
        BrownResource.WOOD,
        GrayResource.GLASS,
        GrayResource.PAPYRUS,
      ],
      coinCost: 0,
      cardType: CardType.PURPLE_GUILD,
      guildType: GuildType.VICTORY_POINTS_AND_COINS_PER_CARD_TYPE,
      guildCardTypes: [
        CardType.YELLOW_COMMERCIAL,
      ],
      coins: 1,
      victoryPoints: 1,
    },
    {
      name: 'Shipowner\'s Guild',
      resourceCost: [
        BrownResource.CLAY,
        BrownResource.STONE,
        GrayResource.GLASS,
        GrayResource.PAPYRUS,
      ],
      coinCost: 0,
      cardType: CardType.PURPLE_GUILD,
      guildType: GuildType.VICTORY_POINTS_AND_COINS_PER_CARD_TYPE,
      guildCardTypes: [
        CardType.BROWN_PRODUCTION,
        CardType.GRAY_PRODUCTION,
      ],
      coins: 1,
      victoryPoints: 1,
    },
    {
      name: 'Builder\'s Guild',
      resourceCost: [
        BrownResource.STONE,
        BrownResource.STONE,
        BrownResource.CLAY,
        BrownResource.WOOD,
        GrayResource.GLASS,
      ],
      coinCost: 0,
      cardType: CardType.PURPLE_GUILD,
      guildType: GuildType.VICTORY_POINTS_PER_WONDER,
      victoryPoints: 2,
    },
    {
      name: 'Magistrate\'s Guild',
      resourceCost: [
        BrownResource.WOOD,
        BrownResource.WOOD,
        BrownResource.CLAY,
        GrayResource.PAPYRUS,
      ],
      coinCost: 0,
      cardType: CardType.PURPLE_GUILD,
      guildType: GuildType.VICTORY_POINTS_AND_COINS_PER_CARD_TYPE,
      guildCardTypes: [
        CardType.BLUE_VICTORY,
      ],
      coins: 1,
      victoryPoints: 1,
    },
    {
      name: 'Scientist\'s Guild',
      resourceCost: [
        BrownResource.CLAY,
        BrownResource.CLAY,
        BrownResource.WOOD,
        BrownResource.WOOD,
      ],
      coinCost: 0,
      cardType: CardType.PURPLE_GUILD,
      guildType: GuildType.VICTORY_POINTS_AND_COINS_PER_CARD_TYPE,
      guildCardTypes: [
        CardType.GREEN_SCIENCE,
      ],
      coins: 1,
      victoryPoints: 1,
    },
    {
      name: 'Moneylender\'s Guild',
      resourceCost: [
        BrownResource.STONE,
        BrownResource.STONE,
        BrownResource.WOOD,
        BrownResource.WOOD,
      ],
      coinCost: 0,
      cardType: CardType.PURPLE_GUILD,
      guildType: GuildType.VICTORY_POINTS_PER_COINS,
      coins: 3,
      victoryPoints: 1,
    },
    {
      name: 'Tactician\'s Guild',
      resourceCost: [
        BrownResource.STONE,
        BrownResource.STONE,
        BrownResource.CLAY,
        GrayResource.PAPYRUS,
      ],
      coinCost: 0,
      cardType: CardType.PURPLE_GUILD,
      guildType: GuildType.VICTORY_POINTS_AND_COINS_PER_CARD_TYPE,
      guildCardTypes: [
        CardType.RED_ARMY,
      ],
      coins: 1,
      victoryPoints: 1,
    },
  ];

  public cardStageCards: CardStage = [
    [{type: 'PLACEHOLDER'}, {type: 'PLACEHOLDER'}, {type: 'FACE_UP', faceUpCard: this.age1Cards[4]}, {type: 'FACE_UP', faceUpCard: this.age1Cards[17]}, {type: 'PLACEHOLDER'}, {type: 'PLACEHOLDER'}],
    [{type: 'PLACEHOLDER'}, {type: 'PLACEHOLDER'}, {type: 'FACE_DOWN', faceDownCard: FlippedCardType.AGE_1}, {type: 'FACE_DOWN', faceDownCard: FlippedCardType.AGE_1}, {type: 'FACE_DOWN', faceDownCard: FlippedCardType.AGE_1}, {type: 'PLACEHOLDER'}],
    [{type: 'PLACEHOLDER'}, {type: 'FACE_UP', faceUpCard: this.age1Cards[7]}, {type: 'FACE_UP', faceUpCard: this.age1Cards[3]}, {type: 'FACE_UP', faceUpCard: this.age1Cards[20]}, {type: 'FACE_UP', faceUpCard: this.age1Cards[16]}, {type: 'PLACEHOLDER'}],
    [{type: 'PLACEHOLDER'}, {type: 'FACE_DOWN', faceDownCard: FlippedCardType.AGE_1}, {type: 'FACE_DOWN', faceDownCard: FlippedCardType.AGE_1}, {type: 'FACE_DOWN', faceDownCard: FlippedCardType.AGE_1}, {type: 'FACE_DOWN', faceDownCard: FlippedCardType.AGE_1}, {type: 'FACE_DOWN', faceDownCard: FlippedCardType.AGE_1}],
    [{type: 'FACE_UP', faceUpCard: this.age1Cards[0]}, {type: 'FACE_UP', faceUpCard: this.age1Cards[9]}, {type: 'FACE_UP', faceUpCard: this.age1Cards[3]}, {type: 'FACE_UP', faceUpCard: this.age1Cards[22]}, {type: 'FACE_UP', faceUpCard: this.age1Cards[18]}, {type: 'FACE_UP', faceUpCard: this.age1Cards[7]}],
  ]
}
