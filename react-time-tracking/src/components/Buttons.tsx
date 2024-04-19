import { ButtonsProps, DataItem } from "../types/Types";

const Buttons = ({ onClick, selectedTimeframe }: ButtonsProps) => {
    const handleButtonClick = (timeframe: keyof DataItem['timeframes']) => {
        onClick(timeframe);
    };

    const isActive = (timeframe: keyof DataItem['timeframes']) => {
        return timeframe === selectedTimeframe ? 'text-white' : 'text-soft-lavender-blue';
    };

    return (
        <div className=' py-[1.56rem] flex justify-around text-[1.12rem] lg:flex-col lg:items-start lg:pl-8 
            lg:gap-[1.313rem] lg:pt-[1.625rem] lg:pb-8'>
            <button className={`${isActive('daily')} leading-[1.25rem] hover:text-white`}
                onClick={() => handleButtonClick('daily')}>
                Daily
            </button>
            <button className={`${isActive('weekly')} leading-[1.25rem] hover:text-white`}
                onClick={() => handleButtonClick('weekly')}>
                Weekly
            </button>
            <button className={`${isActive('monthly')} leading-[1.25rem] hover:text-white`}
                onClick={() => handleButtonClick('monthly')}>
                Monthly
            </button>
        </div>
    );
};

export default Buttons;
