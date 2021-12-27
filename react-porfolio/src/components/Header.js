function Header(props) {
  return (
    <header>
      <h1> Mi Nguyen </h1>
      <nav>
        <a href="About">About me</a>
        <a href="#" onClick={() => props.handlePageChange("Portfolio")}>
          Porfolio{" "}
        </a>
        <a href="#" onClick={() => props.handlePageChange("Contact")}>
          Contact{" "}
        </a>
        <a href="resume">Resume </a>
      </nav>
    </header>
  );
}
export default Header;
