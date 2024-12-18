import Image from "next/image";

export default function HomeAbout() {
    return (
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Image
              src="/theearth.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
              style={{borderRadius:"25px"}}
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Your Location, One Click Away.
            </h1>
            <p className="lead">
            We make location tracking as simple as it gets. Click a button and instantly see your current location, no complications, just clarity, accuracy, and convenience when you need it most.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a href="/locate">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                Locate
              </button>
              </a>
              <a href="/about">
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                About
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  