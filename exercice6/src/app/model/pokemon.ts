export interface Pokemon{
    name: string, 
    description: string, 
    types: typePokemon[], 
    attacks: Attack[],
    zone: Area
}

export interface Area{
    areaName: string, 
    areaRegionName: string
}

export interface Attack{
    nameAttack: string, 
    descriptionAttack: string, 
    damage: number
}

export enum typePokemon{
    FEU = "Feu",
    EAU = "Eau",
    GLACE = "Glace",
    METAL = "Metal",
    SOL = "Sol",
    DRAGON = "Dragon",
    VOL = "Vol",
    PSY = "Psy",
    FEE = "Fee",
    FOUDRE = "Foudre",
    TENEBRE = "Tenebre",
  }