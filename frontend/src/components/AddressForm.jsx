import {useForm} from 'react-hook-form';
import Button from './elements/Button';
import icon5 from '../assets/icons/icon5.png'
import { useDispatch } from 'react-redux';
import { setAddress } from '../stores/userinfo/addressSlice';

const AddressForm = ({onTabSwitch}) => {
    const {register, handleSubmit}= useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(setAddress(data));
        onTabSwitch('Payment');
        console.log(data);
    }
    return (
        <form className='md:w-2/3 md:mx-auto px-3 pt-1 ' onSubmit={handleSubmit(onSubmit)}>
            <h3 className='pt-4 text-2xl md:text-center'> Address for the delivery</h3>
            <div className='mb-4'>
                <label className='block mb-2 text-sm font-bold text-gray-700' for='streetAddress'>Street Address</label>
                <input
                {...register('address')}
                className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline'
                id = 'street address'
                type = 'text'
                placeholder='Street Adress' />

            </div>

        <div className='mb-4 md:flex md:justify-between'>
            <div className='mb-4 md:mr-2 md:mb-0 flex-1'>
                <label className='block mb-2 text-sm font-bold text-gray-700' for='city'>City</label>
                <input
                {...register('city')}
                className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline'
                id = 'city'
                type = 'text'
                placeholder='City' />
            </div>


            <div className='mb-4 md:mr-2 md:mb-0 flex-1'>
                <label className='block mb-2 text-sm font-bold text-gray-700' for='state'>State</label>
                <input
                {...register('state')}
                className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline'
                id = 'state'
                type = 'text'
                placeholder='State' />
            </div>

        </div>


        <div className='mb-4 md:flex md:justify-between'>
            <div className='mb-4 md:mr-2 md:mb-0 flex-1'>
                <label className='block mb-2 text-sm font-bold text-gray-700' for='country'>Country</label>
                <input
                {...register('country')}
                className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline'
                id = 'country'
                type = 'text'
                placeholder='Countrye' />
            </div>


            <div className='mb-4 md:mr-2 md:mb-0 flex-1'>
                <label className='block mb-2 text-sm font-bold text-gray-700' for='postalCode'>Postal Code</label>
                <input
                {...register('postalCode')}
                className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline'
                id = 'postal code'
                type = 'text'
                placeholder='Postal Code' />
            </div>

        </div>

        <div className='flex justify-end p-2'>
            <Button variant='dark' className='flex items-center' type='submit'><span className='mr-1'>Next</span><img src={icon5 } className='w-7 h-7' /></Button>

        </div>



        </form>


    )
}


export default AddressForm;