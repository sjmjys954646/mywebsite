export default function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="site-name" href="#about">YunSu Lee</a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#background">Background</a>
          <a href="./YunSuLee_CV.pdf" target="_blank" rel="noreferrer">CV</a>
        </nav>
      </div>
    </header>
  )
}
