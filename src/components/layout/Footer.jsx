export default function Footer() {
  return (
    <>
      <hr />
      <footer className='container'>
        <p>Visos teises saugomos &copy; {new Date().getFullYear()}</p>
        <ul className='flex unlisted'>
          <li>
            <a href='https://facebook.com'></a>Our Facebook
          </li>
          <li>
            <a href='https://linkedIn.com'></a>Our LinkedIn
          </li>
        </ul>
      </footer>
    </>
  );
}
