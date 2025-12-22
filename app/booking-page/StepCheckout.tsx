'use client'

export default function StepCheckout({ onBack }) {

    return (
        <section className="box-section box-contact-form background-body pt-0">
            <div className="container">

                {/* BACK ARROW */}
                <div className="d-flex align-items-center gap-3 mb-30">

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

                    {/* TITLE */}
                    <h4
                        className="neutral-1000 m-0"
                        style={{ lineHeight: 1.1 }}
                    >
                        Complete Booking
                    </h4>

                </div>

                <div className="form-contact">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label className="text-sm-medium neutral-1000">First Name</label>
                                <input className="form-control username" type="text" placeholder="First Name" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label className="text-sm-medium neutral-1000">First Name</label>
                                <input className="form-control username" type="text" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="text-sm-medium neutral-1000">Email Adress</label>
                                <input className="form-control email" type="email" placeholder="email@domain.com" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="text-sm-medium neutral-1000">Phone Number</label>
                                <input className="form-control phone" type="text" placeholder="Phone number" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label className="text-sm-medium neutral-1000">Your Message</label>
                                <textarea className="form-control" rows={6} placeholder="Leave us a message..." />
                            </div>
                        </div>
                        
                        <div className="col-lg-12">
                            <button className="btn btn-book">
                                Complete Payment
                                <svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5 15L15.5 8L8.5 1M15.5 8L1.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
                   
        </section>
    )
}