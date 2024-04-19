type Timeframe = {
    current: number;
    previous: number;
}

export type DataItem = {
    title: string;
    timeframes: {
        daily: Timeframe;
        weekly: Timeframe;
        monthly: Timeframe;
    }
}

export type ButtonsProps = {
    onClick: (timeframe: keyof DataItem['timeframes']) => void;
}
