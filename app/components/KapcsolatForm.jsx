'use client'

import MainButtonYellow from './UI/Buttons/MainButtonYellow'
import { useForm } from 'react-hook-form'
import mailFormSchema from '../utils/validation/main-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from 'sonner';

export default function KapcsolatForm({ sendMail }) {

    const { 
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isSubmitting }, // Destructure the formState object to get the errors and isSubmitting properties
      } = useForm({
        resolver: zodResolver(mailFormSchema),
      });
    
      const onSubmit = async (formData) => {
        console.log(formData);
        const result = await sendMail(formData);
        if (result.success) {
          toast.success("Az üzenetet sikeresen elküldtük!");
          reset();
        } else {  
          toast.error("Hiba történt az üzenet küldése során. Kérjük próbálja újra!");
        }
      };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 w-full z-10'>
        <div>
            <input 
                placeholder='Név'
                id='name'
                type='text'
                className='py-4 px-2 rounded-lg bg-[--white] shadow-md w-full'
                {...register('name')}
            />
            {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
        </div>
        <div>
            <input 
                placeholder='E-mail'
                id='email'
                type='email'
                className='py-4 px-2 rounded-lg bg-[--white] shadow-md w-full'
                {...register('email')}
            />
            {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
        </div>
        <div>
            <input 
                placeholder='Telefonszám'
                id='phone'
                type='phone'
                className='py-4 px-2 rounded-lg bg-[--white] shadow-md w-full'
                {...register('phone')}
            />
            {errors.phone && <span className='text-red-500'>{errors.phone.message}</span>}
        </div>
        <div>
            <input 
                placeholder='Tárgy'
                id='subject'
                type='text'
                className='py-4 px-2 rounded-lg bg-[--white] shadow-md w-full'
                {...register('subject')}
            />
            {errors.subject && <span className='text-red-500'>{errors.subject.message}</span>}
        </div>
        <div>
            <textarea 
                placeholder='Üzenet'
                id='message'
                type='text'
                rows={10}
                className='py-4 px-2 rounded-lg bg-[--white] shadow-md w-full'
                {...register('message')}
            />
            {errors.message && <span className='text-red-500'>{errors.message.message}</span>}
        </div>
        <div className='flex flex-nowrap gap-2 items-start'>
            <input
            type="checkbox"
            name="acceptance"
            id="acceptance"
            {...register("acceptance")}
            className="p-4 text-lg bg-[--white] mt-1"
            />
            <label htmlFor="acceptance">
            Elolvastam, megértettem, és elfogadom az{" "}
            <a
                href={"/adatkezelesi-tajekoztato"} className='underline'
            >adatkezelési tájékoztatóban</a>
            {" "}foglaltakat.*
            </label>
        </div>
        {errors.acceptance && <span className='text-red-500'>{errors.acceptance.message}</span>}
        <div className='flex flex-col items-center'>
            <MainButtonYellow>{isSubmitting ? 'Küldés...' : 'Küldés'}</MainButtonYellow>
        </div>
    </form>
  )
}
