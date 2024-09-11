import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"



const Categories = () => {
    const myCategories = [
        {
            name: 'Chase Bank',
        },
        {
            name: 'Hurlington Bank',
        },
        {
            name: 'Co-op Bank',
        },
        {
            name: 'Citi Bank',
        },
        {
            name: 'Co-op Bank',
        },
        {
            name: 'Boa Bank',
        },
        {
            name: 'Co-op Bank',
        },
        {
            name: 'Barclays Bank',
        },

    ]
    return (
        <div className='flex'>
            <Carousel>
                <CarouselContent>
                    
                        {myCategories.map((bank) => (
                            <CarouselItem key={bank.name} className='md:basis-1/5 basis-1/2'> 
                            <div className=' m-2'>
                                
                                {bank.name}
  
                            </div>
                            </CarouselItem>
                        ))}

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>


        </div>
    )
}

export default Categories
