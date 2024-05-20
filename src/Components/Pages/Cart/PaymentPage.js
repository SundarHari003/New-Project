import React, { useEffect, useState } from 'react'
import { CiCreditCard1, CiDeliveryTruck, CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowRight, MdOutlineTipsAndUpdates } from 'react-icons/md';
import { TbPaperBag } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);
const PaymentPage = () => {
  const {totalCartAmount}=useSelector((state)=>state.reducerAction);
  const {totalDeliveryAmount}=useSelector((state)=>state.reducerAction);
  const {foodcart}=useSelector((state)=>state.reducerAction);
    const [loading, setLoading] = useState(false);
    // useEffect(()=>{
    //     setLoading(true);
    //     setTimeout(() => {
    //         setLoading(false);
    //       }, 5000);
    // },[])
  
const handleAddPayment = () => {
    MySwal.fire({
      title: 'Select Payment Method',
      input: 'select',
      inputOptions: {
        'credit-card': 'Credit Card',
        'debit-card': 'Debit Card',
        'gpay': 'Google Pay',
        'net-banking': 'Net Banking'
      },
      inputPlaceholder: 'Select a payment method',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        switch (result.value) {
          case 'credit-card':
          case 'debit-card':
            showCardForm(result.value);
            break;
          case 'gpay':
            Swal.fire('Google Pay selected', 'Proceed with Google Pay', 'success');
            break;
          case 'net-banking':
            Swal.fire('Net Banking selected', 'Proceed with Net Banking', 'success');
            break;
          default:
            break;
        }
      }
    });
  };

  const showCardForm = (type) => {
    MySwal.fire({
      title: `${type === 'credit-card' ? 'Credit' : 'Debit'} Card Details`,
      html: 
        <form id="paymentForm">
            <div className=' flex justify-between items-center w-full'>
                <label for="cardholderName" className=' text-lg'>Cardholder:</label>
                <input type="text" id="cardholderName" className="swal2-input" required />
            </div>
            <div className=' flex justify-between items-center w-full'>
                <label for="cardNumber"  className=' text-lg'>Card Number:</label>
                <input type="text" id="cardNumber" className="swal2-input" required />                
           </div>
            <div className=' flex justify-between items-center w-full'>
                <label for="expiryDate"  className=' text-lg'>Expiry Date:</label>
                <input type="text" id="expiryDate" className="swal2-input" placeholder="MM/YY" required />
            </div>
            <div className=' flex justify-between items-center w-full'>
                <label for="cvv"  className=' text-lg'>CVV:</label>
                <input type="text" id="cvv" className="swal2-input" required />
            </div>
        </form>
      ,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Add Payment',
      didOpen: () => {
        document.getElementById('cardholderName').focus();
      },
      preConfirm: () => {
        const cardholderName = document.getElementById('cardholderName').value;
        const cardNumber = document.getElementById('cardNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;

        if (!cardholderName || !cardNumber || !expiryDate || !cvv) {
          Swal.showValidationMessage('Please complete all fields');
          return false;
        }

        return { cardholderName, cardNumber, expiryDate, cvv };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle the form data
        console.log(result.value);
        MySwal.fire('Saved!', 'Your payment option has been added.', 'success');
      }
    });
  };
      const handleAddAddress = () => {
        MySwal.fire({
          title: 'Add New Address',
          html: (
            <form id="addressForm">
                <div className=' flex justify-between items-center'>
                        <label htmlFor="fullName" className=' text-lg'>Full Name:</label>
                        <input type="text" id="fullName" className="swal2-input" required />
                </div>
                <div className=' flex justify-between items-center'>
                    <label htmlFor="addressLine1" className=' text-lg'>Address Line 1:</label>
                    <input type="text" id="addressLine1" className="swal2-input" required />                  
                </div>
                <div className=' flex justify-between items-center'>
                    <label className=' text-lg' htmlFor="addressLine2">Address Line 2:</label>
                    <input type="text" id="addressLine2" className="swal2-input" />
                </div>
                <div className=' flex justify-between items-center'>
                    <label className=' text-lg' htmlFor="city">City:</label>
                    <input type="text" id="city" className="swal2-input" required />                  
                </div>
                <div className=' flex justify-between items-center'>
                    <label className=' text-lg' htmlFor="state">State:</label>
                    <input type="text" id="state" className="swal2-input" required />                    
                </div>
                <div className=' flex justify-between items-center'>
                    <label className=' text-lg' htmlFor="zipCode">Zip Code:</label>
                    <input type="text" id="zipCode" className="swal2-input" required />                   
                </div>
                <div className=' flex justify-between items-center'>
                    <label className=' text-lg' htmlFor="country">Country:</label>
                    <input type="text" id="country" className="swal2-input" required />
                </div>
            </form>
          ),
          focusConfirm: false,
          showCancelButton: true,
          confirmButtonText: 'Add Address',
          preConfirm: () => {
            const fullName = document.getElementById('fullName').value;
            const addressLine1 = document.getElementById('addressLine1').value;
            const addressLine2 = document.getElementById('addressLine2').value;
            const city = document.getElementById('city').value;
            const state = document.getElementById('state').value;
            const zipCode = document.getElementById('zipCode').value;
            const country = document.getElementById('country').value;
    
            if (!fullName || !addressLine1 || !city || !state || !zipCode || !country) {
              Swal.showValidationMessage('Please complete all required fields');
              return false;
            }
    
            return { fullName, addressLine1, addressLine2, city, state, zipCode, country };
          }
        }).then((result) => {
          if (result.isConfirmed) {
            // Handle the form data
            console.log(result.value);
            MySwal.fire('Saved!', 'Your address has been added.', 'success');
          }
        });
      };
  return (
    <div className='  min-h-screen' style={{background:"url()"}}>
        {
            loading?
            <div className=' bg-1 w-full h-full'>
                <div className="socket">
        <div className="gel center-gel">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c1 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c2 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c3 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c4 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c5 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c6 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        
        <div className="gel c7 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        
        <div className="gel c8 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c9 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c10 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c11 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c12 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c13 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c14 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c15 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c16 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c17 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c18 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c19 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c20 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c21 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c22 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c23 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c24 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c25 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c26 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c28 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c29 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c30 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c31 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c32 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c33 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c34 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c35 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c36 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        <div className="gel c37 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
        </div>
        
    </div>
            </div>
            :
            <div className=' p-5 w-full' >
                <h1 className=' text-6xl font-bold text-primary pb-2'>Pay Now</h1>
                <h3 className=' text-primary text-3xl '>Order Summary</h3>
                <div className=' grid grid-cols-1 lg:grid-cols-2'>
                    <div>
                        <div>
                        <div className=' w-full'>
                            <h2 className=' text-primary text-2xl font-semibold mt-10 mb-5'>Delivery Option</h2>
                            <hr/>
                        </div>
                        <div className=' flex justify-between items-center'>
                            <div className=' flex gap-2 items-center p-5 w-full'>
                                <CiDeliveryTruck size={25}/>
                                    <div>
                                        <h1 className=' text-lg font-bold'>Enter Your Delivery Address</h1>
                                        <p>Add your current location</p>
                                    </div>
                            </div>
                            <MdKeyboardArrowRight size={30} className=' cursor-pointer'onClick={handleAddAddress}/>
                        </div><hr className=' w-full'/>
                        <div className=' flex justify-between items-center'>
                            <div className=' flex gap-2 items-center p-5 w-full'>
                                <TbPaperBag size={25}/>
                                    <div>
                                        <h1 className=' text-lg font-bold'>Contactless Delivery Preferred</h1>
                                        <p>Leave order at doordash</p>
                                    </div>
                            </div>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="toggle"></span>
                            </label>
                        </div><hr className=' w-full'/>
                        </div>
                        <div>
                        <div className=' w-full'>
                            <h2 className=' text-primary text-2xl font-semibold mt-10 mb-5'>Payment Option</h2>
                            <hr/>
                        </div>
                        <div className=' flex justify-between items-center'>
                            <div className=' flex gap-2 items-center p-5 w-full'>
                                <CiCreditCard1 size={25}/>
                                    <div>
                                        <h1 className=' text-lg font-bold'>Choose Your Payment Option</h1>
                                        <p>choose Payment like gpay, depit card...</p>
                                    </div>
                            </div>
                            <MdKeyboardArrowRight size={30} className=' cursor-pointer'onClick={handleAddPayment}/>
                        </div><hr className=' w-full'/>
                        <div className=' flex justify-between items-center'>
                            <div className=' flex gap-2 items-center p-5 w-full'>
                                <MdOutlineTipsAndUpdates size={25}/>
                                    <div>
                                        <h1 className=' text-lg font-bold'>Give tips for service</h1>
                                        <p>it's Optional to give $5 for a tips</p>
                                    </div>
                            </div>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="toggle"></span>
                            </label>
                        </div><hr className=' w-full'/>
                        </div>
                    </div>
                    <div className=' p-10 '>
                        <div className=' bg-primary bg-opacity-60 rounded-xl'>
                            <h1 className=' text-center text-2xl font-bold pt-5'>Your Order Pill</h1>
                            <div className='bg-[#ee8f84] h-full p-5 m-5 rounded-xl'>
                                <div className=' flex justify-between items-center'>
                                    <span className=' text-lg sm:text-2xl font-semibold w-2/6'>Food Items</span>
                                    <span className=' text-lg sm:text-2xl font-semibold'>Quantity</span>
                                    <span className=' text-lg sm:text-2xl font-semibold'>Price</span>
                                </div>
                                <div className=' border-b-2 border-dashed border-gray-700 pt-5'>
                                </div>
                                {
                                    foodcart.map((tempList)=>(
                                    <div className=' flex justify-between items-center py-2'>
                                        <span className=' text-base sm:text-xl font-medium w-2/6'>{tempList.Name}</span>
                                        <span className=' text-base sm:text-xl font-medium'>{tempList.Quantity}</span>
                                        <span className=' text-base sm:text-xl font-medium'>{tempList.Price}</span>
                                    </div>
                                    ))
                                }
                                <div className=' border-b-2 border-dashed border-gray-700 pt-5'>
                                </div>
                                <div className=' py-5'>
                                    <div className=' flex items-center justify-between py-2'>
                                        <span className=' text-base sm:text-xl font-semibold'>Sub Total</span>
                                        <span className=' text-base sm:text-xl font-medium'> {totalCartAmount}</span>
                                    </div>
                                    <div className=' flex items-center justify-between py-2'>
                                        <span className=' text-base sm:text-xl font-semibold'>Delivery Fees</span>
                                        <span className=' text-base sm:text-xl font-medium'> {totalDeliveryAmount}</span>
                                    </div>
                                </div>
                                <div className=' border-b-2 border-dashed border-gray-700'>
                                </div>
                                <div className=' w-full flex justify-end items-center pt-5'>
                                    <div className=' flex items-center justify-between gap-5 w-2/4'>
                                        <span className=' text-xl sm:text-2xl font-semibold'> Total</span>
                                        <span className='  text-base sm:text-xl font-medium'>{totalCartAmount+totalDeliveryAmount}</span>
                                    </div>
                                </div>
                            </div>
                            <div className=' flex px-5 pb-5'>
                                <button type="button" className=' w-full  bg-primary hover:shadow shadow-primary rounded-full font-semibold text-xl text-white px-2 py-1'>Pay Now</button>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default PaymentPage