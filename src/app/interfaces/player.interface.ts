export interface IPlayerPreview {
    id: number;
    name: string;
    age: number;
    number: number;
    position: string;
    photo: string;
};

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

export interface IPlayerStatsApiResponse {
    response: [
        {
            statistics: IPlayerStats[],
        }
    ];
};
export interface IPlayerStats {
    team: {
        id: number;
        name: string;
        logo: string;
    };
    league: {
        id: number;
        name: string;
        country: string;
        logo: string;
        flag: string;
        season: number;
    };
    games: {
        appearences: number;
        lineups: number;
        minutes: number;
        number: number | null;
        position: string;
        rating: string;
        captain: boolean;
    };
    substitutes: {
        in: number;
        out: number;
        bench: number;
    };
    shots: {
        total: number;
        on: number;
    };
    goals: {
        total: number;
        conceded: number | null;
        assists: number;
        saves: number;
    };
    passes: {
        total: number;
        key: number;
        accuracy: number;
    };
    tackles: {
        total: number;
        blocks: number;
        interceptions: number;
    };
    duels: {
        total: number | null;
        won: number | null;
    };
    dribbles: {
        attempts: number;
        success: number;
        past: number | null;
    };
    fouls: {
        drawn: number;
        committed: number;
    };
    cards: {
        yellow: number;
        yellowred: number;
        red: number;
    };
    penalty: {
        won: number;
        commited: number | null;
        scored: number;
        missed: number;
        saved: number | null;
    };
};
