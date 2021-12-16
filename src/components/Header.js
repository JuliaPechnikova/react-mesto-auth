import headerLogo from '../images/header-logo.svg';

function Header(props) {

  function handleClick(){
    localStorage.removeItem('token');
  }

  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Mesto"/>
      <div className="header__group">
        {props.userEmail ? <p className="header__user-email">{props.email}</p> : null }
        <a className={`header__title ${props.userEmail ? "header__title_theme" : ""}`} href={props.link} onClick={handleClick}>{props.title}</a>
      </div>
    </header>
  );
}

export default Header;