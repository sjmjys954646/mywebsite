import WorkVisual from '../components/WorkVisual'
import ImageCarousel from '../components/ImageCarousel'

function DetailHeader({ work }) {
  return (
    <>
      <a className="back-link" href="#work">← Back to Work</a>
      <div className="eyebrow">{work.type}</div>
      <h1>{work.title}</h1>
      {work.authors && <p className="detail-authors">{work.authors}</p>}
      {work.venue && <p className="detail-venue">{work.venue}</p>}

      {Array.isArray(work.detailMeta) && work.detailMeta.length > 0 && (
        <div className="detail-meta">
          {work.detailMeta.map(([label, value]) => (
            value ? (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ) : null
          ))}
        </div>
      )}
    </>
  )
}

function DetailGallery({ work }) {
  const hasImages = Array.isArray(work.images) && work.images.length > 0
  return hasImages
    ? <ImageCarousel images={work.images} title={work.title} />
    : <WorkVisual work={work} detail />
}

function DetailLinks({ links = [] }) {
  const visibleLinks = links.filter((link) => link?.href)
  if (visibleLinks.length === 0) return null

  return (
    <div className="detail-actions" aria-label="Project links">
      {visibleLinks.map((link) => (
        <a className="detail-action-button" key={`${link.label}-${link.href}`} href={link.href} target="_blank" rel="noreferrer">
          {link.label} ↗
        </a>
      ))}
    </div>
  )
}

function DraftHint({ children }) {
  if (!import.meta.env.DEV) return null
  return <p className="draft-hint">{children}</p>
}

function ResearchDetail({ work }) {
  return (
    <>
      <DetailHeader work={work} />
      <DetailGallery work={work} />
      <DetailLinks links={work.links} />

      <div className="detail-body detail-template">
        <section>
          <h2>Abstract</h2>
          {work.abstract ? <p>{work.abstract}</p> : (
            <DraftHint>Write a concise 3–5 sentence abstract here: problem → approach/system → study or method → main takeaway.</DraftHint>
          )}
        </section>

      </div>
    </>
  )
}

function TeamProjectDetail({ work }) {
  const contributions = (work.contributions || []).filter(Boolean)
  const tech = (work.tech || []).filter(Boolean)
  const extraSections = (work.projectSections || []).filter((section) => section?.heading && section?.body)

  return (
    <>
      <DetailHeader work={work} />
      <DetailGallery work={work} />
      <DetailLinks links={work.links} />

      <div className="detail-body detail-template">
        <section>
          <h2>About</h2>
          {work.about ? <p>{work.about}</p> : (
            <DraftHint>Explain the product or artifact in 2–4 sentences: what problem it addressed, who it was for, and what the team built.</DraftHint>
          )}
        </section>

        <section>
          <h2>My Contribution</h2>
          {work.roleDescription && <p>{work.roleDescription}</p>}
          {contributions.length > 0 ? (
            <ul className="detail-list">
              {contributions.map((item) => <li key={item}>{item}</li>)}
            </ul>
          ) : (
            <DraftHint>List 3–5 concrete things you personally owned or implemented. Prefer verbs such as designed, implemented, optimized, led, or produced.</DraftHint>
          )}
        </section>

        <section>
          <h2>Built With</h2>
          {tech.length > 0 ? (
            <div className="tech-list">{tech.join(' · ')}</div>
          ) : (
            <DraftHint>Add only the technologies that materially describe the project.</DraftHint>
          )}
        </section>

        {extraSections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </div>
    </>
  )
}

function CurrentResearchDetail({ work }) {
  return (
    <>
      <DetailHeader work={work} />
      <DetailGallery work={work} />
      {work.statusText && (
        <div className="detail-body">
          <section>
            <h2>Status</h2>
            <p>{work.statusText}</p>
          </section>
        </div>
      )}
    </>
  )
}

export default function WorkDetail({ work }) {
  if (!work) {
    return (
      <main className="shell detail-page">
        <a className="back-link" href="#work">← Back to Work</a>
        <h1>Work not found</h1>
      </main>
    )
  }

  return (
    <main className="shell detail-page">
      {work.kind === 'team' ? (
        <TeamProjectDetail work={work} />
      ) : work.kind === 'current' ? (
        <CurrentResearchDetail work={work} />
      ) : (
        <ResearchDetail work={work} />
      )}
    </main>
  )
}
