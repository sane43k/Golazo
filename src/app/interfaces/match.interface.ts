export interface ILiveMatchApiResponse {
    response: ILiveMatch[];
};

export interface ILiveMatch {
    fixture: {
        id: number;
        date: string;
        status: {
            long: string;
            elapsed: number;
        };
    };
    goals: {
        home: number;
        away: number;
    };
    league: {
        name: string;
        logo: string;
    };
    teams: {
        home: {
            name: string;
            logo: string;
        };
        away: {
            name: string;
            logo: string;
        };
    };
};
