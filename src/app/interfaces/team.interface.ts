export interface ITeamInfoApiResponse {
    response: ITeamInfo[];
};
export interface ITeamInfo {
    team: {
        id: number;
        name: string;
        code: string;
        country: string;
        founded: number;
        national: boolean;
        logo: string;
    };
    venue: {
        id: number;
        name: string;
        address: string;
        city: string;
        capacity: number;
        surface: string;
        image: string;
    };
};

export interface ITeamStatsApiResponse {
    response: ITeamStats;
};
export interface ITeamStats {
    league: {
        id: number;
        name: string;
        country: string;
        logo: string;
        flag: string;
        season: number;
    };
    team: {
        id: number;
        name: string;
        logo: string;
    };
    form: string;
    fixtures: {
        played: {
            home: number;
            away: number;
            total: number;
        };
        wins: {
            home: number;
            away: number;
            total: number;
        };
        draws: {
            home: number;
            away: number;
            total: number;
        };
        loses: {
            home: number;
            away: number;
            total: number;
        };
    };
};