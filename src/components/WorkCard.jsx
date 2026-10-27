import WorkVisual from './WorkVisual'

export default function WorkCard({ work }) {
  const detailHref = `#/work/${work.slug}`
  const paperLinks = (work.links || []).filter((link) => link.label.toLowerCase() === 'paper')

  const openDetail = () => {
    window.location.hash = `/work/${work.slug}`
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openDetail()
    }
  }

  return (
    <article
      className="work-card"
      role="link"
      tabIndex={0}
      aria-label={`Open details for ${work.title}`}
      onClick={openDetail}
      onKeyDown={handleKeyDown}
    >
      <div className="work-card-main">
        <WorkVisual work={work} />
        <div className="work-copy">
          <div className="eyebrow">{work.type}</div>
          <h3><a href={detailHref} onClick={(event) => event.stopPropagation()}>{work.title}</a></h3>
          {work.authors && <p className="authors">{work.authors}</p>}
          <p className="venue">{work.venue}</p>

          {paperLinks.length > 0 && (
            <div className="work-actions" onClick={(event) => event.stopPropagation()}>
              {paperLinks.map((link) => (
                <a
                  className="paper-button"
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Paper ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
