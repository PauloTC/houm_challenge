export interface Location {
  name: string,
  url: string
}

export interface ICharacter {
  character: {
    created: string,
    episode: string[],
    gender: string,
    id: number,
    image: string,
    location: Location,
    name: string,
    origin: Location,
    species: string,
    status: string,
    type: string,
    url: string
  }
}

export interface ICharacters {
  characters: ICharacter[]
}

export interface IInfo {
  count: number,
  next: string,
  pages: number,
  prev: any
}

export interface IData {
  data: {
    info: IInfo,
    results: ICharacter[]
  }
}