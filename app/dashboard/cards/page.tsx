import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cardContent } from '@/lib/constants';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Separator } from '@/components/ui/separator';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";



const Cards = () => {
  return (
    <div className='mx-12 md:ml-[50px] w-100 '>
      <h1 className='text-center font-bold p-3'>
        Available Cards
      </h1>

      <Carousel className=''>
        <CarouselContent className=''>
          {cardContent.map((card) => (
            <CarouselItem className='md:basis-1/5 basis-1/2'>
              <div className='p-2 bg-slate-600 rounded-xl'>
                <Image
                  src={card.image}
                  width={250}
                  height={250}
                  alt={card.name}
                  className='rounded-t-xl' />
                <div className='text-sm p-3'>
                  {card.name}
                </div>

                <Separator className='bg-slate-400' />
                <div className='text-xs text-center p-2 flex justify-around'>
                  <div>
                    <h1 className='text-red-400'> Balance</h1>
                    {card.balance}

                  </div>
                  <div>
                    <h1 className='text-red-400'> Price</h1>
                    {card.balance}
                  </div>


                </div>
                <Separator className='bg-slate-400' />
                <div className='text-center flex justify-between mt-3'>
                  <AlertDialog>
                    <AlertDialogTrigger><h2 className='text-sm p-3 bg-blue-950 rounded-xl'> View Details</h2></AlertDialogTrigger>
                    <AlertDialogContent className='bg-slate-500'>
                      <AlertDialogHeader>
                        <AlertDialogTitle>{card.name}</AlertDialogTitle>
                        <Separator className='bg-slate-400' />
                        <AlertDialogDescription>
                          {card.description}
                          <div className='flex p-3'>
                            <h1 className='text-red-400 font-bold'> Balance</h1>{card.balance}
                          </div>
                          <div className='flex p-3'>
                            <h1 className='text-red-400 font-bold'> Price</h1>{card.cost}

                          </div>


                          <Separator className='bg-slate-400' />
                          <Image
                            src={card.image}
                            width={250}
                            height={250}
                            alt={card.name}
                            className='rounde-lg' />
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction><Link href="/send">Continue</Link></AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>



                 
                  <Link href="/send"> <h1 className='text-sm p-3 bg-green-500 rounded-xl'> Buy</h1></Link>


                </div>


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

export default Cards
