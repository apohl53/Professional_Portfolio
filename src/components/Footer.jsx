import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import "../styles/footer.scss";

function Footer() {
  const date = new Date();

  return (
    <footer className="footer">
      <p>
        Github:{" "}
        <a href="https://github.com/apohl53">https://github.com/apohl53</a>
      </p>
      <p>{date.getFullYear()}</p>
      <p>Developed by Alex Pohlman</p>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/alex-pohlman-85765329b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark me-3"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://discordapp.com/users/1146083711591391383"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark"
        >
          <FontAwesomeIcon icon={faDiscord} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
