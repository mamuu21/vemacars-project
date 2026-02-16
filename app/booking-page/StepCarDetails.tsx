'use client'
import MyDatePicker from '@/components/elements/MyDatePicker'
import Dropdown from 'react-bootstrap/Dropdown'
import Link from "next/link"
import { useEffect, useState, useMemo } from "react"

import { Car } from "@/src/types"
import { getMediaUrl } from '@/src/lib/api'
import { createBooking } from '@/src/services/bookings'

type StepCarDetailsProps = {
    car: Car
    startDate: Date | null
    setStartDate: (date: Date | null) => void
    endDate: Date | null
    setEndDate: (date: Date | null) => void
    selectedLocation: string
    setSelectedLocation: (value: string) => void
    selectedDropOff: string
    setSelectedDropOff: (value: string) => void
    onNext: () => void
    onBack: () => void
}

export default function StepCarDetails({
    car,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    selectedLocation,
    setSelectedLocation,
    selectedDropOff,
    setSelectedDropOff,
    onNext,
    onBack
}: StepCarDetailsProps) {

    const [isAccordion, setIsAccordion] = useState(null)
    const [isBooking, setIsBooking] = useState(false)

    // Form State
    // Search/UI state (can remain local or move, but these are for dropdown filtering)
    const [searchQuery, setSearchQuery] = useState("")
    const [dropOffSearch, setDropOffSearch] = useState("")
    const [extras, setExtras] = useState<string[]>([])



    if (!car) return <div className="container py-5">Car not found</div>



    const handleAccordion = (key: any) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }

    const toggleExtra = (extra: string) => {
        setExtras(prev => prev.includes(extra) ? prev.filter(e => e !== extra) : [...prev, extra])
    }

    // Dynamic Price Calculation
    const { rentalDays, basePrice, extrasPrice, totalPrice } = useMemo(() => {
        let days = 1
        if (startDate && endDate) {
            const diffTime = Math.abs(endDate.getTime() - startDate.getTime())
            days = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
            if (days < 1) days = 1
        }

        const base = days * Number(car.price_per_day)

        const extraCosts: Record<string, number> = {
            'GPS': 25,
            'Child Seat': 32,
            'Additional Driver': 25,
            'Insurance': 52
        }

        const extraSum = extras.reduce((acc, curr) => acc + (extraCosts[curr] || 0), 0)

        return {
            rentalDays: days,
            basePrice: base,
            extrasPrice: extraSum,
            totalPrice: base + extraSum
        }
    }, [startDate, endDate, extras, car.price_per_day])

    const handleBooking = async () => {
        if (!startDate || !endDate || !selectedLocation || !selectedDropOff) {
            alert("Please complete all required fields (Dates and Locations)")
            return
        }
        onNext()
    }

    const zanzibarLocations = [
        "Abeid Amani Karume International Airport (ZNZ)",
        "Stone Town, Zanzibar City",
        "Nungwi Beach, North Zanzibar",
        "Kendwa Beach",
        "Paje Village, East Coast",
        "Jambiani",
        "Michamvi",
        "Kiwengwa",
        "Matemwe",
        "Fumba Peninsula",
        "Mbweni",
        "Chwaka Bay"
    ];

    const filteredPickup = zanzibarLocations.filter(loc =>
        loc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredDropOff = zanzibarLocations.filter(loc =>
        loc.toLowerCase().includes(dropOffSearch.toLowerCase())
    );

    const sortedImages = car.images?.length
        ? [...car.images].sort((a, b) => Number(b.is_primary) - Number(a.is_primary))
        : [];

    const imageUrls = sortedImages.length
        ? sortedImages.map(img => getMediaUrl(img.image))
        : [];

    const heroImages = imageUrls.slice(0, 5);
    const extraImages = imageUrls.slice(5);
    console.log({
        startDate,
        endDate,
        selectedLocation,
        selectedDropOff
    });

    return (
        <>

            <div>


                <section className="box-section box-content-tour-detail background-body pt-0">
                    <div className="container">
                        <div className="tour-header">

                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="d-flex align-items-center gap-5 mb-30">
                                        {/* BACK ARROW */}
                                        <button
                                            type="button"
                                            onClick={onBack}
                                            aria-label="Go back"
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                padding: 0,
                                                cursor: 'pointer',
                                                color: '#000',
                                                lineHeight: 1,
                                            }}
                                        >
                                            <svg
                                                width="32"
                                                height="32"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M19 12H5M12 19L5 12L12 5"
                                                    stroke="currentColor"
                                                    strokeWidth="2.8"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>
                                        <h6 className="neutral-1000">Book your ride</h6>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="booking-form">
                                    <div className="head-booking-form">
                                        <p className="text-xl-bold neutral-1000">Rent This Vehicle</p>
                                    </div>
                                    <div className="content-booking-form">

                                        <div className="item-line-booking border-bottom-0 pb-0">
                                            <strong className="text-md-bold neutral-1000">Pick Up location</strong>

                                            <div className="input-search">
                                                <Dropdown className="dropdown w-100">
                                                    <Dropdown.Toggle as="div" className="w-100 position-relative">
                                                        <span
                                                            className="position-absolute top-50 translate-middle-y ms-3"
                                                            style={{ left: 0, zIndex: 10 }}
                                                        >
                                                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                                            </svg> */}
                                                        </span>

                                                        <input
                                                            type="text"
                                                            className="form-control ps-5"
                                                            placeholder="Search location..."
                                                            value={searchQuery || selectedLocation}
                                                            onChange={(e) => {
                                                                setSearchQuery(e.target.value);
                                                                setSelectedLocation(e.target.value);
                                                            }}
                                                        />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu className="w-100" show={searchQuery.length > 0}>
                                                        {filteredPickup.length > 0 ? (
                                                            filteredPickup.map((loc, index) => (
                                                                <Dropdown.Item
                                                                    key={index}
                                                                    onClick={() => {
                                                                        setSelectedLocation(loc);
                                                                        setSearchQuery("");
                                                                    }}
                                                                >
                                                                    {loc}
                                                                </Dropdown.Item>
                                                            ))
                                                        ) : (
                                                            <div className="p-2 text-muted small">No locations found</div>
                                                        )}
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>

                                        <div className="item-line-booking ">
                                            <strong className="text-md-bold neutral-1000">Drop off location</strong>

                                            <div className="input-search">
                                                <Dropdown className="dropdown w-100">
                                                    <Dropdown.Toggle as="div" className="w-100 position-relative">
                                                        <span
                                                            className="position-absolute top-50 translate-middle-y ms-3"
                                                            style={{ left: 0, zIndex: 10 }}
                                                        >
                                                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                                            </svg> */}
                                                        </span>

                                                        <input
                                                            type="text"
                                                            className="form-control ps-5"
                                                            placeholder="Search location..."
                                                            value={dropOffSearch || selectedDropOff}
                                                            onChange={(e) => {
                                                                setDropOffSearch(e.target.value);
                                                                setSelectedDropOff(e.target.value);
                                                            }}
                                                        />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu className="w-100" show={dropOffSearch.length > 0}>
                                                        {filteredDropOff.length > 0 ? (
                                                            filteredDropOff.map((loc, index) => (
                                                                <Dropdown.Item
                                                                    key={index}
                                                                    onClick={() => {
                                                                        setSelectedDropOff(loc);
                                                                        setDropOffSearch("");
                                                                    }}
                                                                >
                                                                    {loc}
                                                                </Dropdown.Item>
                                                            ))
                                                        ) : (
                                                            <div className="p-2 text-muted small">No locations found</div>
                                                        )}
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <div className="item-line-booking border-bottom-0 pb-0">
                                            <strong className="text-md-bold neutral-1000">Rental Start</strong>
                                            <div className="input-calendar">
                                                <MyDatePicker
                                                    form
                                                    selectedDate={startDate}
                                                    onChange={setStartDate}
                                                />
                                            </div>
                                        </div>
                                        <div className="item-line-booking">
                                            <strong className="text-md-bold neutral-1000">Rental End</strong>
                                            <div className="input-calendar">
                                                <MyDatePicker
                                                    form
                                                    selectedDate={endDate}
                                                    onChange={setEndDate}
                                                />
                                            </div>
                                        </div>
                                        <div className="item-line-booking">
                                            <div className="box-tickets">
                                                <strong className="text-md-bold neutral-1000">Add Extra:</strong>
                                                {[
                                                    { id: 'GPS', name: 'GPS Navigation System', price: 25 },
                                                    { id: 'Child Seat', name: 'Child Seat', price: 32 },
                                                    { id: 'Additional Driver', name: 'Additional Driver', price: 25 },
                                                    { id: 'Insurance', name: 'Insurance Coverage', price: 52 }
                                                ].map(extra => (
                                                    <div className="line-booking-tickets" key={extra.id}>
                                                        <div className="item-ticket">
                                                            <ul className="list-filter-checkbox">
                                                                <li>
                                                                    <label className="cb-container">
                                                                        <input
                                                                            type="checkbox"
                                                                            checked={extras.includes(extra.id)}
                                                                            onChange={() => toggleExtra(extra.id)}
                                                                        />
                                                                        <span className="text-md-medium">{extra.name}</span>
                                                                        <span className="checkmark" />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="include-price">
                                                            <p className="text-md-bold neutral-1000">${extra.price.toFixed(2)}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="item-line-booking last-item">
                                            <strong className="text-md-bold neutral-1000">Total Payable</strong>
                                            <div className="line-booking-right">
                                                <p className="text-xl-bold neutral-1000">${totalPrice.toFixed(2)}</p>
                                            </div>
                                        </div>
                                        <div className="box-button-book">
                                            <button
                                                className="btn btn-book"
                                                onClick={handleBooking}
                                                disabled={isBooking}
                                            >
                                                {isBooking ? 'Processing...' : 'Book Now'}
                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 15L15 8L8 1M15 8L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="box-need-help">
                                            <Link href="/login">
                                                <svg width={12} height={14} viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.83366 3.66667C2.83366 1.92067 4.25433 0.5 6.00033 0.5C7.74633 0.5 9.16699 1.92067 9.16699 3.66667C9.16699 5.41267 7.74633 6.83333 6.00033 6.83333C4.25433 6.83333 2.83366 5.41267 2.83366 3.66667ZM8.00033 7.83333H4.00033C1.88699 7.83333 0.166992 9.55333 0.166992 11.6667C0.166992 12.678 0.988992 13.5 2.00033 13.5H10.0003C11.0117 13.5 11.8337 12.678 11.8337 11.6667C11.8337 9.55333 10.1137 7.83333 8.00033 7.83333Z" fill="currentColor" />
                                                </svg>
                                                Make Reservation
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-8">
                                <div className="box-section box-banner-property-detail background-body">
                                    <div className="position-relative">
                                        <div className="block-banner-property-detail container-banner-activities">
                                            <div className="row g-3">
                                                <div className="col-lg-7">
                                                    <div className="position-relative rounded-12 overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
                                                        <img
                                                            className="w-100"
                                                            src={heroImages[0] || "/placeholder.jpg"}
                                                            alt={car.name}
                                                            style={{
                                                                width: "100%",
                                                                height: "100%",
                                                                objectFit: "cover"
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="d-flex gap-3">
                                                        <div className="d-flex gap-3 flex-column w-100">
                                                            <div className="rounded-12 overflow-hidden w-100" style={{ aspectRatio: "4 / 3" }}>
                                                                <img
                                                                    className="w-100"
                                                                    src={heroImages[1] || "/placeholder.jpg"}
                                                                    alt={car.name}
                                                                    style={{
                                                                        width: "100%",
                                                                        height: "100%",
                                                                        objectFit: "cover"
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="rounded-12 overflow-hidden w-100" style={{ aspectRatio: "4 / 3" }}>
                                                                <img
                                                                    className="w-100"
                                                                    src={heroImages[2] || "/placeholder.jpg"}
                                                                    alt={car.name}
                                                                    style={{
                                                                        width: "100%",
                                                                        height: "100%",
                                                                        objectFit: "cover"
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="d-flex gap-3 flex-column w-100">
                                                            <div className="rounded-12 overflow-hidden w-100" style={{ aspectRatio: "4 / 3" }}>
                                                                <img
                                                                    className="w-100"
                                                                    src={heroImages[3] || "/placeholder.jpg"}
                                                                    alt={car.name}
                                                                    style={{
                                                                        width: "100%",
                                                                        height: "100%",
                                                                        objectFit: "cover"
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="rounded-12 overflow-hidden w-100" style={{ aspectRatio: "4 / 3" }}>
                                                                <img
                                                                    className="w-100"
                                                                    src={heroImages[4] || "/placeholder.jpg"}
                                                                    alt={car.name}
                                                                    style={{
                                                                        width: "100%",
                                                                        height: "100%",
                                                                        objectFit: "cover"
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {extraImages.length > 0 && (
                                                <div className="row g-3 mt-3">
                                                    {extraImages.map((img, index) => (
                                                        <div key={index} className="col-lg-3 col-md-4 col-6">
                                                            <div className="rounded-12 overflow-hidden w-100" style={{ aspectRatio: "4 / 3" }}>
                                                                <img
                                                                    className="w-100"
                                                                    src={img}
                                                                    alt={car.name}
                                                                    style={{
                                                                        width: "100%",
                                                                        height: "100%",
                                                                        objectFit: "cover"
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}                                        </div>
                                    </div>
                                </div>
                                <div className="box-feature-car mt-20">
                                    <div className="list-feature-car align-items-start">
                                        <div className="item-feature-car w-md-25">
                                            <div className="item-feature-car-inner">
                                                <div className="feature-image"><img src="/assets/imgs/page/car/diesel.svg" alt="Fuel" /></div>
                                                <div className="feature-info">
                                                    <p className="text-md-medium neutral-1000">{car.fuel_type}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-feature-car w-md-25">
                                            <div className="item-feature-car-inner">
                                                <div className="feature-image"><img src="/assets/imgs/page/car/auto.svg" alt="Transmission" /></div>
                                                <div className="feature-info">
                                                    <p className="text-md-medium neutral-1000">{car.transmission}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-feature-car w-md-25">
                                            <div className="item-feature-car-inner">
                                                <div className="feature-image"><img src="/assets/imgs/page/car/seat.svg" alt="Seats" /></div>
                                                <div className="feature-info">
                                                    <p className="text-md-medium neutral-1000">{car.seats} seats</p>
                                                </div>
                                            </div>
                                        </div>
                                        {car.car_type && (
                                            <div className="item-feature-car w-md-25">
                                                <div className="item-feature-car-inner">
                                                    <div className="feature-image"><img src="/assets/imgs/page/car/suv.svg" alt="Type" /></div>
                                                    <div className="feature-info">
                                                        <p className="text-md-medium neutral-1000">{car.car_type}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div className="item-feature-car w-md-25">
                                            <div className="item-feature-car-inner">
                                                <div className="feature-image"><img src="/assets/imgs/page/car/door.svg" alt="Doors" /></div>
                                                <div className="feature-info">
                                                    <p className="text-md-medium neutral-1000">4 Doors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-collapse-expand">
                                    <div className="group-collapse-expand">
                                        <button className={isAccordion == 1 ? "btn btn-collapse collapsed" : "btn btn-collapse"} type="button" onClick={() => handleAccordion(1)}>
                                            <h6>Overview</h6>
                                            <svg width={12} height={7} viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1L6 6L11 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            </svg>
                                        </button>
                                        <div className={isAccordion == 1 ? "collapse" : "collapse show"}>
                                            <div className="card card-body">
                                                <h6 className="neutral-1000">{car.name}</h6>
                                                <p>{car.overview || "No overview provided for this vehicle."}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
