export interface IPlayerProfileApiResponse {
    response: IPlayerProfile[];
};
export interface IPlayerProfile {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    age: number;
    birth: {
        date: string;
        place: string;
        country: string;
    };
    nationality: string;
    height: string;
    weight: string;
    number: number;
    position: string;
    photo: string;
};

export interface IPlayerPreview {
    id: number;
    name: string;
    age: number;
    number: number;
    position: string;
    photo: string;
};