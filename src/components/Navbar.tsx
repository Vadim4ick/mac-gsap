import { navbar } from "../shared/const/navbar";

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="logo" />

        <ul>
          {navbar.map(({ label }) => (
            <li key={label}>
              <a href="#">{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="Search" />
          </button>

          <button>
            <img src="/cart.svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
