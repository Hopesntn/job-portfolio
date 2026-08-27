export default function NavBar() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Fabricio Alejandro Ortiz Fiallos</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Proyects</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
