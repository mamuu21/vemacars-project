'use client'

export type Step = {
  id: number
  label: string
}

type ProgressBarProps = {
  steps?: Step[]
  currentStepId: number
}

export default function ProgressBar({ steps, currentStepId }: ProgressBarProps) {
  const defaultSteps: Step[] = [
    { id: 1, label: 'Choose a car' },
    { id: 2, label: 'Choose extras' },
    { id: 3, label: 'Checkout' },
    // { id: 4, label: 'Booking Summary' },
  ]

  const stepList = steps || defaultSteps
  const activeStep = currentStepId

  return (
    <section className="pt-30 pb-20 background-body">
      <div className="container">

        {/* ---------------- MOBILE VIEW ---------------- */}
        <div className="d-md-none">
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center position-relative mb-3">
              {stepList.map((step, index) => {
                const isActive = step.id === activeStep
                const isCompleted = step.id < activeStep

                return (
                  <div key={step.id} className="position-relative" style={{ zIndex: 2 }}>
                    <div className="text-center">
                      <div
                        className={`mx-auto rounded-circle d-flex align-items-center justify-content-center ${
                          isActive || isCompleted
                            ? 'bg-dark border-dark'
                            : 'bg-white border-gray-300'
                        }`}
                        style={{
                          width: '28px',
                          height: '28px',
                          border: '2px solid',
                          fontSize: '14px',
                          fontWeight: '600',
                        }}
                      >
                        {isCompleted ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        ) : (
                          <span className={isActive ? 'text-white' : 'text-gray-500'}>
                            {step.id}
                          </span>
                        )}
                      </div>
                    </div>

                    {index < stepList.length - 1 && (
                      <div
                        className="position-absolute"
                        style={{
                          top: '13px',
                          left: 'calc(50% + 14px)',
                          right: 'calc(-50% + 14px)',
                          height: '2px',
                          zIndex: 1,
                        }}
                      >
                        <div className={`h-100 ${isCompleted ? 'bg-dark' : 'bg-gray-300'}`} />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* <div className="text-center">
              <h6 className="text-lg-bold mb-1">
                Step {activeStep} of {stepList.length}
              </h6>
              <p className="text-md-medium text-gray-600">
                {stepList.find(s => s.id === activeStep)?.label}
              </p>
            </div> */}
          </div>
        </div>

        {/* ---------------- DESKTOP VIEW ---------------- */}
        <div className="d-none d-md-block">
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center position-relative mb-4">
              {stepList.map((step, index) => {
                const isActive = step.id === activeStep
                const isCompleted = step.id < activeStep

                return (
                  <div
                    key={step.id}
                    className="step-item d-flex flex-column align-items-center position-relative"
                    style={{ zIndex: 2 }}
                  >
                    <div
                      className={`step-circle mb-2 rounded-circle d-flex align-items-center justify-content-center ${
                        isActive || isCompleted
                          ? 'bg-dark border-dark'
                          : 'bg-white border-gray-300'
                      }`}
                      style={{
                        width: '36px',
                        height: '36px',
                        border: '2px solid',
                      }}
                    >
                      {isCompleted ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <span className={`text-sm-bold ${isActive ? 'text-white' : 'text-gray-500'}`}>
                          {step.id}
                        </span>
                      )}
                    </div>

                    <span
                      className={`text-sm-medium d-none d-lg-block ${
                        isActive
                          ? 'text-dark font-semibold'
                          : isCompleted
                          ? 'text-dark'
                          : 'text-gray-500'
                      }`}
                    >
                      {step.label}
                    </span>

                    {index < stepList.length - 1 && (
                      <div
                        className="position-absolute d-none d-md-block"
                        style={{
                          top: '18px',
                          left: 'calc(50% + 18px)',
                          right: 'calc(-50% + 18px)',
                          height: '2px',
                          zIndex: 1,
                        }}
                      >
                        <div className={`h-100 ${isCompleted ? 'bg-dark' : 'bg-gray-300'}`} />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* <div className="text-center">
              <h6 className="text-lg-bold mb-1">
                Step {activeStep} of {stepList.length}
              </h6>
              <p className="text-md-medium text-gray-600 mb-2">
                {stepList.find(s => s.id === activeStep)?.label}
              </p>
            </div> */}
          </div>
        </div>

      </div>
    </section>
  )
}
