function Footer() {
  const date = new Date();

  return (
    <footer>
      <p>
        Github:{" "}
        <a href="https://github.com/apohl53">https://github.com/apohl53</a>
      </p>
      <p>{date.getFullYear()}</p>
      <p>Developed by Alex Pohlman</p>
    </footer>
  );
}

export default Footer;
