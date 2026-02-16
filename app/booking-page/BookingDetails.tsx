
'use client'
import React from 'react'
import { Car } from '@/src/types'

type BookingDetailsProps = {
    bookingData: any
    car: Car
}

export default function BookingDetails({ bookingData, car }: BookingDetailsProps) {
    const totalDays =
        bookingData.rental_start && bookingData.rental_end
            ? Math.ceil(
                (new Date(bookingData.rental_end).getTime() -
                    new Date(bookingData.rental_start).getTime()) /
                (1000 * 60 * 60 * 24)
            )
            : 0

    return (
        <section className="box-section background-body pt-50 pb-50">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card shadow-sm border-0 p-4">
                            <div className="text-center mb-4">
                                <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '64px', height: '64px' }}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3 className="neutral-1000">Booking Confirmed!</h3>
                                <p className="text-muted">Thank you for choosing VEMA CARS. Your reservation is successfully placed.</p>
                            </div>

                            <hr />

                            <div className="row g-4 mt-2">
                                <div className="col-md-6">
                                    <h6 className="neutral-1000 mb-3">Vehicle Details</h6>
                                    <p className="mb-1"><span className="text-muted small uppercase d-block">Vehicle</span> <strong>{car.name}</strong></p>
                                    <p className="mb-1"><span className="text-muted small uppercase d-block">Transmission</span> {car.transmission}</p>
                                    <p className="mb-1"><span className="text-muted small uppercase d-block">Fuel Type</span> {car.fuel_type}</p>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="neutral-1000 mb-3">Rental Info</h6>
                                    <p className="mb-1"><span className="text-muted small uppercase d-block">Duration</span> <strong>{totalDays} Days</strong></p>
                                    <p className="mb-1"><span className="text-muted small uppercase d-block">Pickup Date</span> {new Date(bookingData.rental_start).toLocaleDateString()}</p>
                                    <p className="mb-1"><span className="text-muted small uppercase d-block">Return Date</span> {new Date(bookingData.rental_end).toLocaleDateString()}</p>
                                </div>

                                <div className="col-12">
                                    <hr />
                                    <h6 className="neutral-1000 mb-3">Location & Customer</h6>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className="mb-1"><span className="text-muted small uppercase d-block">Pickup Location</span> {bookingData.pickup_location}</p>
                                            <p className="mb-1"><span className="text-muted small uppercase d-block">Dropoff Location</span> {bookingData.dropoff_location}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="mb-1"><span className="text-muted small uppercase d-block">Customer</span> {bookingData.customer_info.full_name}</p>
                                            <p className="mb-1"><span className="text-muted small uppercase d-block">Email</span> {bookingData.customer_info.email}</p>
                                            <p className="mb-1"><span className="text-muted small uppercase d-block">Phone</span> {bookingData.customer_info.phone_number}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mt-5">
                                <a href="/" className="btn btn-brand-2">Return Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
