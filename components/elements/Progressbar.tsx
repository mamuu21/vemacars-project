'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export type Step = {
  id: number
  label: string
  path: string
  isActive: boolean
  isCompleted: boolean
}

type ProgressBarProps = {
  steps?: Step[]
  currentStepId?: number
}

export default function ProgressBar({ steps, currentStepId }: ProgressBarProps) {
  const pathname = usePathname()
  
  const defaultSteps: Step[] = [
    { id: 1, label: 'Choose a car', path: '/cars-list-3', isActive: true, isCompleted: false },
    { id: 2, label: 'Choose extras', path: '/choose-extras', isActive: false, isCompleted: false },
    { id: 3, label: 'Review & Checkout', path: '/checkout', isActive: false, isCompleted: false },
    { id: 4, label: 'Booking Summary', path: '/booking-summary', isActive: false, isCompleted: false },
  ]
  
  const stepList = steps || defaultSteps
  let activeStep = currentStepId
  if (!activeStep) {
    activeStep = stepList.find(step => step.path === pathname)?.id || 1
  }
  
  return (
    <section className="pt-30 pb-20 background-body">
      <div className="container">
        {/* Mobile Compact View - Similar to reference */}
        <div className="d-md-none">
          <div className="mb-4">
            {/* Step numbers and labels in a compact row */}
            <div className="d-flex justify-content-between align-items-center position-relative mb-3">
              {stepList.map((step, index) => {
                const isActive = step.id === activeStep
                const isCompleted = step.id < activeStep
                
                return (
                  <div key={step.id} className="position-relative" style={{ zIndex: 2 }}>
                    <div className="text-center">
                      {/* Small circle with number for mobile */}
                      <div 
                        className={`mx-auto rounded-circle d-flex align-items-center justify-content-center ${
                          isActive 
                            ? 'bg-dark border-dark' 
                            : isCompleted 
                              ? 'bg-dark border-dark' 
                              : 'bg-white border-gray-300'
                        }`}
                        style={{ 
                          width: '28px', 
                          height: '28px',
                          border: '2px solid',
                          fontSize: '14px',
                          fontWeight: '600'
                        }}
                      >
                        {isCompleted ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        ) : (
                          <span className={isActive || isCompleted ? 'text-white' : 'text-gray-500'}>
                            {step.id}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Connector line - shorter for mobile */}
                    {index < stepList.length - 1 && (
                      <div className="position-absolute" style={{
                        top: '13px',
                        left: 'calc(50% + 14px)',
                        right: 'calc(-50% + 14px)',
                        height: '2px',
                        zIndex: 1
                      }}>
                        <div className={`h-100 ${isCompleted ? 'bg-dark' : 'bg-gray-300'}`}></div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            
            {/* Current step label - centered like reference */}
            <div className="text-center">
              <h6 className="text-lg-bold mb-1">Step {activeStep} of {stepList.length}</h6>
              <p className="text-md-medium text-gray-600">
                {stepList.find(s => s.id === activeStep)?.label}
              </p>
            </div>
          </div>
        </div>
        
        {/* Desktop View - More detailed */}
        <div className="d-none d-md-block">
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center position-relative mb-4">
              {stepList.map((step, index) => {
                const isActive = step.id === activeStep
                const isCompleted = step.id < activeStep
                
                return (
                  <div key={step.id} className="step-item d-flex flex-column align-items-center position-relative" style={{ zIndex: 2 }}>
                    {/* Step circle with number */}
                    <Link href={step.path} className="text-decoration-none">
                      <div 
                        className={`step-circle mb-2 rounded-circle d-flex align-items-center justify-content-center ${
                          isActive 
                            ? 'bg-dark border-dark' 
                            : isCompleted 
                              ? 'bg-dark border-dark' 
                              : 'bg-white border-gray-300'
                        }`}
                        style={{ 
                          width: '36px', 
                          height: '36px',
                          border: '2px solid',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {isCompleted ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        ) : (
                          <span className={`text-sm-bold ${isActive || isCompleted ? 'text-white' : 'text-gray-500'}`}>
                            {step.id}
                          </span>
                        )}
                      </div>
                    </Link>
                    
                    {/* Step label - hidden on small screens, shown on medium+ */}
                    <Link href={step.path} className="text-decoration-none">
                      <span className={`text-sm-medium d-none d-lg-block ${
                        isActive 
                          ? 'text-dark font-semibold' 
                          : isCompleted 
                            ? 'text-dark' 
                            : 'text-gray-500'
                      }`}>
                        {step.label}
                      </span>
                    </Link>
                    
                    {/* Connector line */}
                    {index < stepList.length - 1 && (
                      <div className="position-absolute d-none d-md-block" style={{
                        top: '18px',
                        left: 'calc(50% + 18px)',
                        right: 'calc(-50% + 18px)',
                        height: '2px',
                        zIndex: 1
                      }}>
                        <div className={`h-100 ${isCompleted ? 'bg-dark' : 'bg-gray-300'}`}></div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            
            {/* Current step info - desktop */}
            <div className="text-center">
              <h6 className="text-lg-bold mb-1">Step {activeStep} of {stepList.length}</h6>
              <p className="text-md-medium text-gray-600 mb-2">
                {stepList.find(s => s.id === activeStep)?.label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}