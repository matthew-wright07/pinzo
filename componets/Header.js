import Image from "next/image";

export default function Header() {
    return (
      <div className="bg-dark">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 mx-4">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <Image src="/logo.png" alt="Pinzo Logo" height="35" width="35" style={{marginRight:"10px",borderRadius:"50%",backgroundColor:"#007bff",padding:"5px",display:"flex",alignItems:"center",justifyContent:"center"}}/>

          <span className="fs-3 fw-bold" style={{color:"#007bff"}}>Pinzo</span>
          </a>
  
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="/" className="nav-link text-white" >Home</a>
            </li>
            <li className="nav-item">
              <a href="/locate" className="nav-link text-white">Locate</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link text-white">About</a>
            </li>
          </ul>
        </header>
      </div>
    );
  }
  