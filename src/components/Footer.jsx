function Footer() {
  const date = new Date();
  return (
    <footer>
      <p>{date.getFullYear()}</p>
      <p>Developed by Alex Pohlman</p>
    </footer>
  );
}

export default Footer;
