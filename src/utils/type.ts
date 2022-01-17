export interface IPlanetary {
    title: string;
    url: string;
    date: string | number;
    explanation: string;
    copyright: string;
    hdurl?: string;
}

export interface BtnStateProps {
    count: number | null;
    liked: boolean;
}

export interface BtnActionProps{
    count: number | null;
    liked: boolean;
    type: string | number;
}