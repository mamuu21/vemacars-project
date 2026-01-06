'use client'

import CarCard1 from '@/components/elements/carcard/CarCard1'
import Search1 from '@/components/sections/Search1'
import SortCarsFilter from '@/components/elements/SortCarsFilter'
import rawCarsData from "@/util/cars.json"
import useCarFilter from '@/util/useCarFilter'
import { Car } from "./type"

type StepChooseCarProps = {
  onBack: () => void
  onNext: () => void
  setSelectedCar: (car: Car) => void
}

const carsData = rawCarsData.map(car => ({
  ...car,
  rating: parseFloat(car.rating as string)
}))

export default function StepChooseCar(props: StepChooseCarProps) {
  const { onBack, onNext, setSelectedCar } = props
  const {
    sortCriteria,
    itemsPerPage,
    handleSortChange,
    handleItemsPerPageChange,
    handleClearFilters,
    startItemIndex,
    endItemIndex,
    sortedCars,
  } = useCarFilter(carsData)
  
  // Your 3 specific cars
  const mySpecificCars = sortedCars.slice(0, 3);

  return (
    <>
      <section className="section-box pt-0 background-body">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-md-9 mb-30 wow fadeInUp">
              <div className="d-flex align-items-center mb-15">
                <button
                  type="button"
                  onClick={onBack}
                  className="me-3"
                  aria-label="Go back"
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    color: '#000',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <h6 className="title-svg neutral-1000 mb-0">Choose Vehicle</h6>
              </div>
              <p className="text-lg-medium text-bold neutral-500">
                Turning dreams into reality with versatile vehicles.
              </p>
            </div>
            {/* Swiper controls column removed as there is no slider anymore */}
          </div>
        </div>
      </section>

      <section className="box-section block-content-tourlist background-body">
        <div className="container">
          <div className="box-content-main pt-20">
            <div className="content-right">
              
              {/* FILTER BAR */}
              <div className="box-filters mb-25 pb-5 border-bottom border-1">
                <SortCarsFilter
                  sortCriteria={sortCriteria}
                  handleSortChange={handleSortChange}
                  itemsPerPage={itemsPerPage}
                  handleItemsPerPageChange={handleItemsPerPageChange}
                  handleClearFilters={handleClearFilters}
                  startItemIndex={startItemIndex}
                  endItemIndex={endItemIndex}
                  sortedCars={sortedCars}
                />
              </div>

              {/* NORMAL GRID (Replaced Swiper) */}
              <div className="row wow fadeIn">
                {mySpecificCars.map((car) => (
                  <div key={car.id} className="col-lg-4 col-md-6 col-sm-12 mb-30">
                    <CarCard1
                      car={car}
                      onBook={(selectedCar: Car) => {
                        setSelectedCar(selectedCar)
                        onNext()
                      }}
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}