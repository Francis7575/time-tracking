
type CardProps = {
    bgColor: string,
    iconSrc: string,
    title: string,
    hours?: string,
    lastWeekHours?: string,
    iconClass?: string,
}

const Cards = ({ bgColor, iconSrc, title, hours, lastWeekHours, iconClass, }: CardProps) => {
    return (
        <div className={`${bgColor} flex flex-col rounded-[.93rem] overflow-hidden relative`}>
            <div className="flex justify-end mr-[1.089rem]">
                <img src={iconSrc} alt="" className={`${iconClass} absolute`} />
            </div>
            <div className='bg-midnight-navy hover:bg-dark-blue cursor-pointer px-6 py-7 rounded-[.93rem] 
                mt-[2.37rem] z-10 h-full lg:mt-[2.875rem] xl:pl-[1.875rem] xl:pr-[2.188rem]'>
                <div className='flex justify-between'>
                    <p className='text-[1.12rem] text-white'>
                        {title}
                    </p>
                    <button>
                        <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                                fill="#BBC0FF"
                                fillRule="evenodd"
                                className='ellipsis-svg' />
                        </svg>
                    </button>
                </div>
                <div className='flex justify-between items-center mt-[.43rem] lg:flex-col lg:items-start 
                    lg:gap-[.5rem] xl:mt-5'>
                    <span className='text-[2rem] text-white xl:text-[3.5rem]'>
                        {hours}
                    </span>
                    <p className='text-baby-blue text-[.938rem]'>
                        Last Week - {lastWeekHours}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cards

const getCardBgColor = (index: number): string => {
    switch (index) {
        case 0:
            return "bg-vivid-orange";
        case 1:
            return "bg-cyan-blue";
        case 2:
            return "bg-fuchsia";
        case 3:
            return "bg-lime-green";
        case 4:
            return "bg-dark-purple";
        case 5:
            return "bg-honey";
        default:
            return "";
    }
};

const getCardIconSrc = (index: number): string => {
    switch (index) {
        case 0:
            return "/time-tracking/assets/icon-work.svg";
        case 1:
            return "/time-tracking/assets/icon-play.svg";
        case 2:
            return "/time-tracking/assets/icon-study.svg";
        case 3:
            return "/time-tracking/assets/icon-exercise.svg";
        case 4:
            return "/time-tracking/assets/icon-social.svg";
        case 5:
            return "/time-tracking/assets/icon-self-care.svg"
        default:
            return "";
    }
};

const getCardIconClass = (index: number): string => {
    switch (index) {
        case 0:
            return "-mt-3";
        case 1:
            return "-mt-[.3rem]";
        case 2:
            return "-mt-[.5rem]";
        case 3:
            return "";
        case 4:
            return "-mt-4";
        case 5:
            return "-mt-[.9rem]"
        default:
            return "";
    }
};

export { getCardBgColor, getCardIconSrc, getCardIconClass }