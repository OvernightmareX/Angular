export interface pokemon{
    name: string, 
    description: string, 
    types: typePokemon[], 
    attacks: attack[],
    zone: area
}

export interface area{
    areaName: string, 
    areaRegionName: string
}

export interface attack{
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