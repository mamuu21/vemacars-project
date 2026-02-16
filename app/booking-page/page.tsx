'use client'


import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import ProgressBar from '@/app/booking-page/Progressbar'
import StepChooseCar from '@/app/booking-page/StepChooseCar'
import StepCarDetails from '@/app/booking-page/StepCarDetails'
import StepCheckout from '@/app/booking-page/StepCheckout'
import BookingDetails from './BookingDetails'
import { Car } from '@/src/types'

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [selectedCar, setSelectedCar] = useState<Car | null>(null)

  // Centralized Booking State
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  const [pickupLocation, setPickupLocation] = useState<string>("")
  const [dropoffLocation, setDropoffLocation] = useState<string>("")
  const [bookingData, setBookingData] = useState<any>(null)

  const router = useRouter()

  return (
    <Layout footerStyle={1}>
      <ProgressBar currentStepId={step} />

      {step === 1 && (
        <StepChooseCar
          onBack={() => router.push('/')}
          onNext={() => setStep(2)}
          setSelectedCar={setSelectedCar}
        />
      )}

      {step === 2 && selectedCar && (
        <StepCarDetails
          car={selectedCar}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          selectedLocation={pickupLocation}
          setSelectedLocation={setPickupLocation}
          selectedDropOff={dropoffLocation}
          setSelectedDropOff={setDropoffLocation}
          onNext={() => setStep(3)}
          onBack={() => setStep(1)}
        />
      )}

      {step === 3 && selectedCar && (
        <StepCheckout
          carId={selectedCar.id}
          car={selectedCar}
          startDate={startDate}
          endDate={endDate}
          pickup={pickupLocation}
          dropoff={dropoffLocation}
          onBack={() => setStep(2)}
          onBookingSuccess={(data: any) => {
            setBookingData(data)
            setStep(4)
          }}
        />
      )}

      {step === 4 && bookingData && selectedCar && (
        <BookingDetails
          bookingData={bookingData}
          car={selectedCar}
        />
      )}
    </Layout>
  )
}
