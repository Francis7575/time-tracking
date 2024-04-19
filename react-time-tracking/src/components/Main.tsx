import avatar from '/assets/image-jeremy.png'
import Buttons from './Buttons'
import Cards from './Cards'
import data from '../data.json'
import { useState } from 'react'
import { DataItem } from '../types/Types'
import { getCardBgColor, getCardIconClass, getCardIconSrc } from './Cards'

const Main = () => {
    const [selectedTimeframe, setSelectedTimeframe] = useState<keyof DataItem['timeframes']>('weekly');

    const handleButtonClick = (timeframe: keyof DataItem['timeframes']) => {
        setSelectedTimeframe(timeframe);
    };

    return (
        <main className='my-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:min-w-[60rem] xl:min-w-[70rem]'>
            <section className='rounded-[.93rem] bg-midnight-navy md:col-span-full lg:col-span-1 
                    lg:row-span-2'>
                <div className="bg-dark-lavender-blue pl-[2rem] py-[2.2rem] flex items-center rounded-[1rem]
                lg:flex-col lg:items-start xl:pb-20 xl:pt-[2.313rem]">
                    <img src={avatar} alt="User image"
                        className='max-w-[4rem] rounded-full lg:max-w-[4.875rem]' style={{ border: '3px solid #fff' }} />
                    <div className='ml-[1.25rem] lg:ml-0 mt-8'>
                        <p className='text-baby-blue text-[.938rem] mb-[.25rem] mb-[.188rem]'>
                            Report for
                        </p>
                        <p className='text-[1.5rem] text-white font-light lg:text-[2.5rem]'>
                            Jeremy <span className='lg:block'>Robson</span>
                        </p>
                    </div>
                </div>
                <Buttons onClick={handleButtonClick} />
            </section>

            {data.map((item, index) => (
                <Cards
                    key={index}
                    bgColor={getCardBgColor(index)}
                    iconSrc={getCardIconSrc(index)}
                    title={item.title}
                    iconClass={getCardIconClass(index)}
                    hours={`${item.timeframes[selectedTimeframe].current}hrs`}
                    lastWeekHours={`${item.timeframes[selectedTimeframe].previous}hrs`}
                />
            ))}
        </main>
    )
}


export default Main