import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer role="contentinfo">
        <div className="nhsuk-footer-container">
          <div className="nhsuk-width-container">
            <div className="nhsuk-grid-row">
              <div className="nhsuk-grid-column-full">
                <p className="nhsuk-u-secondary-text-color nhsuk-u-font-size-16">
                  This website only stores the cookies that are needed to make
                  it work. Read more about how{" "}
                  <Link
                    href="/cookies-policy"
                    className="nhsuk-footer__list-item-link"
                  >
                    we use cookies.
                  </Link>
                </p>
              </div>
            </div>
            <div className="nhsuk-grid-row">
              <div className="nhsuk-grid-column-full">
                <h2 className="nhsuk-u-visually-hidden">Support links</h2>
                <div className="nhsuk-footer">
                  <ul className="nhsuk-footer__list">
                    <li className="nhsuk-footer__list-item nhsuk-footer-default__list-item">
                      <Link
                        className="nhsuk-footer__list-item-link"
                        href="/accessibility-statement"
                      >
                        Accessibility statement
                      </Link>
                    </li>
                    <li className="nhsuk-footer__list-item nhsuk-footer-default__list-item">
                      <a className="nhsuk-footer__list-item-link" href="#">
                        Privacy policy
                      </a>
                    </li>
                    <li className="nhsuk-footer__list-item nhsuk-footer-default__list-item">
                      <a className="nhsuk-footer__list-item-link" href="#">
                        Terms and conditions
                      </a>
                    </li>
                  </ul>
                  <div>
                    <p className="nhsuk-footer__copyright">
                      &copy; NHS England
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
