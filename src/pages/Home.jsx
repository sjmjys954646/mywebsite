import WorkCard from '../components/WorkCard'
import { works } from '../data/work'

const experience = [
  ['2025–Present', 'Graduate Research Assistant', 'Empathic Computing Laboratory · Chonnam National University'],
  ['2024', 'Backend Software Engineer', 'Hyundai Motor Company'],
  ['2023', 'Backend Software Engineer Intern', 'Intflow'],
]

const education = [
  ['2025–Present', 'M.S. in Artificial Intelligence Convergence', 'Chonnam National University · Gwangju, South Korea'],
  ['2018–2024', 'B.E. in Computer Engineering', 'Chonnam National University · Gwangju, South Korea'],
]

export default function Home() {
  return (
    <main>
      <section className="shell intro" id="about">
        <div className="intro-top">
          <div className="intro-identity">
            <h1>YunSu Lee</h1>
            <p className="subtitle">M.S. Student · Human-Computer Interaction · Human-AI Interaction</p>
            <div className="tagline" aria-label="From Game Player. To Game Developer. Toward Game Changer.">
              <strong>From Game Player.</strong>
              <strong>To Game Developer.</strong>
              <strong>Toward Game Changer.</strong>
            </div>
          </div>

          <div className="profile-photo-wrap">
            <img className="profile-photo" src="./assets/profile.png" alt="YunSu Lee" />
          </div>
        </div>

        <div className="intro-copy">
          <p>
            I am a master's student in Artificial Intelligence Convergence at <a href="https://www.jnu.ac.kr/" target="_blank" rel="noreferrer">Chonnam National University</a> in South Korea, advised by <a href="https://sites.google.com/view/arvrlab/director" target="_blank" rel="noreferrer">Prof. Seungwon Kim</a>. I am currently a member of the <a href="https://sites.google.com/view/arvrlab/home" target="_blank" rel="noreferrer">Empathic Computing Laboratory</a>.
          </p>
          <p>
            My research interests lie in interactive systems and Human-AI interaction. I want to explore how emerging AI capabilities can become new human interaction capabilities—not simply by making AI more capable, but by designing interfaces that make AI-mediated processes easier for people to inspect, understand, and shape. Building on my experience with virtual agents and XR, I am particularly interested in systems that help people coordinate with increasingly autonomous AI while retaining meaningful agency.
          </p>
        </div>

        <div className="intro-links">
          <a href="mailto:sjmjys954646@gmail.com">Email</a>
          <a href="https://github.com/sjmjys954646" target="_blank" rel="noreferrer">GitHub</a>
          <a href="./YunSuLee_CV.pdf" target="_blank" rel="noreferrer">CV</a>
        </div>
      </section>

      <section className="shell section" id="work">
        <div className="section-heading">
          <h2>Work</h2>
        </div>
        <div className="work-list">
          {works.map((work) => <WorkCard key={work.slug} work={work} />)}
        </div>
      </section>

      <section className="shell section" id="background">
        <div className="section-heading">
          <h2>Background</h2>
        </div>
        <div className="background-grid">
          <div>
            <h3 className="background-title">Experience</h3>
            <div className="timeline">
              {experience.map(([date, title, place]) => (
                <div className="timeline-row" key={`${date}-${title}`}>
                  <div className="timeline-date">{date}</div>
                  <div>
                    <div className="timeline-title">{title}</div>
                    <div className="timeline-place">{place}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="background-title">Education</h3>
            <div className="timeline">
              {education.map(([date, title, place]) => (
                <div className="timeline-row" key={`${date}-${title}`}>
                  <div className="timeline-date">{date}</div>
                  <div>
                    <div className="timeline-title">{title}</div>
                    <div className="timeline-place">{place}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
