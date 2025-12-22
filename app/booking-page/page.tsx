'use client'

import { useState } from 'react'
import Layout from '@/components/layout/Layout'
import ProgressBar from '@/app/booking-page/Progressbar'
import StepChooseCar from '@/app/booking-page/StepChooseCar'
import StepCarDetails from '@/app/booking-page/StepCarDetails'
import StepCheckout from '@/app/booking-page/StepCheckout'


export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [selectedCar, setSelectedCar] = useState(null)

  return (
    <Layout footerStyle={1}>
      <ProgressBar currentStepId={step} />

      {step === 1 && (
        <StepChooseCar
          onNext={() => setStep(2)}
          setSelectedCar={setSelectedCar}
        />
      )}
      {step === 2 && (
        <StepCarDetails
            car={selectedCar}
            onNext={() => setStep(3)}
            onBack={() => setStep(1)}
        />
        )}

        {step === 3 && (
            <StepCheckout
                onBack={() => setStep(2)}
            />
        )}

    </Layout>
  )
}
