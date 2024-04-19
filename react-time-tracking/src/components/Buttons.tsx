import { ButtonsProps, DataItem } from "../types/Types";

const Buttons = ({ onClick }: ButtonsProps) => {
    const handleButtonClick = (timeframe: keyof DataItem['timeframes']) => {
        onClick(timeframe);
    };

    return (
        <div className=' py-[1.56rem] flex justify-around text-[1.12rem] lg:flex-col lg:items-start lg:pl-8 
            lg:gap-[1.313rem] lg:pt-[1.625rem] lg:pb-8'>
            <button className='text-soft-lavender-blue hover:text-white leading-[1.25rem]'
                onClick={() => handleButtonClick('daily')}>
                Daily
            </button>
            <button className='text-soft-lavender-blue hover:text-white leading-[1.25rem]'
                onClick={() => handleButtonClick('weekly')}>
                Weekly
            </button>
            <button className='text-soft-lavender-blue hover:text-white leading-[1.25rem]'
                onClick={() => handleButtonClick('monthly')}>
                Monthly
            </button>
        </div>
    );
};

export default Buttons;
