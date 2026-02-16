import CarCard1 from '@/components/elements/carcard/CarCard1'
import SortCarsFilter from '@/components/elements/SortCarsFilter'
import useCarFilter from '@/util/useCarFilter'
import { Car } from "@/src/types"
import { getCars } from '@/src/services/cars'
import { useEffect, useState } from "react"

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

type StepChooseCarProps = {
  onBack: () => void
  onNext: () => void
  setSelectedCar: (car: Car) => void
}

export default function StepChooseCar(props: StepChooseCarProps) {
  const { onBack, onNext, setSelectedCar } = props
  const [carsData, setCarsData] = useState<Car[]>([])
  const [loading, setLoading] = useState(true)
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

  const mySpecificCars = sortedCars

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getCars()
        console.log("Backend Response:", data)

        // Handling DRF Pagination results field
        if (data && (data as any).results) {
          console.log("Using paginated results field")
          setCarsData((data as any).results)
        } else {
          setCarsData(Array.isArray(data) ? data : [])
        }
      } catch (error) {
        console.error("Error fetching cars:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCars()
  }, [])

  // Debugging logs
  useEffect(() => {
    console.log("Total Cars State (carsData):", carsData.length)
    console.log("Filtered Cars (sortedCars):", sortedCars.length)
  }, [carsData, sortedCars])

  if (loading) {
    return <div className="container py-5">Loading vehicles...</div>
  }

  return (
    <>
      <section className="section-box pt-0 background-body">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-md-9 mb-30">
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

              {/* SWIPER CAROUSEL */}
              <div>
                {mySpecificCars.length === 0 && (
                  <div className="text-center py-5">
                    No vehicles available at the moment.
                  </div>
                )}
                {mySpecificCars.length > 0 && (
                  <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                      768: { slidesPerView: 2 },
                      1200: { slidesPerView: 3 },
                    }}
                    className="pb-30"
                  >
                    {mySpecificCars.map((car) => (
                      <SwiperSlide key={car.id} className="mb-30">
                        <CarCard1
                          car={car}
                          onBook={(selectedCar: Car) => {
                            setSelectedCar(selectedCar)
                            onNext()
                          }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
