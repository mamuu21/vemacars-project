import Link from "next/link"

export default function CtaHero() {
  return (
    <header className="background-body w-100 position-relative">

      <div className="box-cta-3 box-cta-full background-100 py-96 rounded-3 position-relative overflow-hidden w-100">

        <div className="container-fluid position-relative z-1 px-4">
          <div className="row align-items-center g-0">

            {/* LEFT CONTENT */}
            <div className="col-lg-5 pe-lg-5">
              <h1 className="mb-4 neutral-1000">
                Get a great deal for your vehicle — sell to us now
              </h1>

              <p className="text-lg-medium neutral-500 mb-4">
                Get the best value for your vehicle with our transparent
                and straightforward selling process
              </p>

              <ul className="list-ticks-green mb-4 text-xl-medium">
                <li className="neutral-1000">Experienced Professionals You Can Trust</li>
                <li className="neutral-1000">Clear and Transparent Pricing</li>
                <li className="neutral-1000">Genuine Spares Parts</li>
              </ul>
            </div>

            {/* RIGHT IMAGES */}
            <div className="col-lg-6 offset-lg-1 mt-lg-0 mt-5">
              <div className="box-image-payment-2">
                <div className="row align-items-center">
                  <div className="col-sm-4 mb-30">
                    <img className="bdrd8 w-100" src="/assets/imgs/cta/cta-3/img-1.png" alt="Carento" />
                  </div>
                  <div className="col-sm-4 mb-30">
                    <img className="bdrd8 w-100 mb-15" src="/assets/imgs/cta/cta-3/img-2.png" alt="Carento" />
                    <img className="bdrd8 w-100" src="/assets/imgs/cta/cta-3/img-3.png" alt="Carento" />
                  </div>
                  <div className="col-sm-4 mb-30">
                    <img className="bdrd8 w-100 mb-15" src="/assets/imgs/cta/cta-3/img-4.png" alt="Carento" />
                    <img className="bdrd8 w-100" src="/assets/imgs/cta/cta-3/img-5.png" alt="Carento" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Decorative overlay stays */}
        <div className="bg-overlay position-absolute bottom-0 end-0 h-75 background-brand-2 opacity-25 z-0 rounded-start-pill" />
      </div>

    </header>
  )
}
