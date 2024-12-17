import Image from "next/image";

export default function AboutAbout() {
    return (
      <div className="px-4 py-5 text-center" style={{height:"80vh",display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <Image
          className="d-block mx-auto mb-4"
          alt="Bootstrap Logo"
          width="57"
          height="57"
          src="/logo.png"
          style={{marginRight:"10px",borderRadius:"50%",backgroundColor:"#007bff",padding:"10px",display:"flex",alignItems:"center",justifyContent:"center"}}
        />
        <h1 className="display-5 fw-bold text-body-emphasis">We Wanted To Make A Differnce</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
          At Pinzo, we make it easy to discover what's around you—based on your current location. No frills, just the info you need, right when you need it.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          </div>
        </div>
      </div>
    );
  }
  