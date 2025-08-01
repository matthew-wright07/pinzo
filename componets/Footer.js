import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-dark">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-4 mt-4 border-top px-4" >
        <p className="col-md-4 mb-0 text-white">Pinzo {new Date().getFullYear()}</p>
        <p className="col-md-4 mb-0 text-white text-center">Made by <a target="_blank" className="text-white" href="https://webity.io">Webity</a></p>

        <ul className="nav col-md-4 justify-content-end ">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-white">Home</a>
          </li>
          <li className="nav-item">
            <a href="/locate" className="nav-link px-2 text-white">Locate</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link px-2 text-white">About</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
