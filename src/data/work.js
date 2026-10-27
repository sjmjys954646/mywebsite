export const works = [
  {
    slug: 'current-work',
    kind: 'current',
    type: 'Current Research',
    title: 'Title withheld for anonymous review',
    authors: '',
    venue: 'Submitted to ACM CHI 2027 · Under Review',
    visual: 'anonymous',
    links: [],
    detailMeta: [
      ['Status', 'Under Review'],
      ['Venue', 'ACM CHI 2027'],
    ],
    statusText: 'This work is currently under anonymous review. Additional details will be added after the review process.'
  },
  {
    slug: 'gesture-amplification',
    kind: 'research',
    type: 'Research Project',
    title: 'Effects of Gesture Size on Collaborative Experiences in Virtual Reality',
    authors: 'YunSu Lee†, Gayun Suh†, Gun A. Lee, Myungho Lee, Seungwon Kim',
    venue: 'Virtual Reality (Springer Nature) · Under Revision',
    images: [
      { src: './assets/projects/gesture-amplification/0.png', alt: 'Gesture-size study teaser' },
      { src: './assets/projects/gesture-amplification/1.png', alt: 'Gesture-size study illustration' },
    ],
    links: [
      // Add only the links you actually have. Empty / missing links are hidden automatically.
      // { label: 'Paper', href: 'https://...' },
      // { label: 'DOI', href: 'https://doi.org/...' },
      // { label: 'Code', href: 'https://github.com/...' },
      // { label: 'Video', href: 'https://...' },
      // { label: 'Website', href: 'https://...' },
    ],
    detailMeta: [
      ['Role', 'Co-First Author'],
      ['Status', 'Under Revision'],
    ],
    abstract: 'Collaborative experiences in virtual reality (VR) are influenced by users’ gestures and the ways they are represented. However, little is known about how variations in gesture size affect the collaborative experience, particularly in tasks involving hand-object interaction. In this study, we investigated the effects of it on collaborative experiences in VR. We conducted a within-subject experiment with 36 dyads performing two collaborative tasks, Rowing and Hammering, while taking roles as an actor or an observer. We manipulated the size of the actors’ gestures across three conditions: (a) Baseline, where the avatar movements matched the actor’s physical movements, (b) Virtual Exaggeration, where the avatar’s movements were visually amplified by the system, and (c) Behavioral Exaggeration, where actors physically made their movements larger and synchronized with their embodied avatar. In the hammering task, results showed that behavioral exaggeration increased social measurement: observers\' perceived improved cooperation, interpersonal closeness and actors\' co-presence, compared to baseline, while virtual exaggeration showed no such effects. In the rowing task, unlike the hammering task, no evidence was found in social measurement, but actors enjoyed the task more with behavioral exaggeration compared to the baseline. These findings suggest that behavioral gesture exaggeration can enhance perceived collaborative experiences in VR, with the observed benefits varying across task contexts and participant roles.',
  },
  {
    slug: 'virtual-assistants',
    kind: 'research',
    type: 'Research Project',
    title: 'Exploring the Effects of Support Type and Task Difficulty for Virtual Assistants as Social Companions',
    authors: 'Sei Kang, YunSu Lee, Gun A. Lee, Hyung-Jeong Yang, Soo-Hyung Kim, Ji-eun Shin, Seungwon Kim',
    venue: 'ACM CHI 2026',
    images: [
      { src: './assets/projects/virtual-assistants/0.png', alt: 'Virtual assistant research teaser' },
    ],
    links: [
      { label: 'Paper', href: 'https://doi.org/10.1145/3772318.3790674' },
    ],
    detailMeta: [
      ['Role', 'Co-Author'],
      ['Venue', 'ACM CHI 2026'],
    ],
    abstract: 'Virtual assistants (VAs) are increasingly positioned not just as tools, but as potential social companions—capable of offering either emotional or informational support. Yet, how these forms of support should adapt to varying task difficulties and embodiment styles remains underexplored. We conducted two user studies with cognitive and physical tasks to investigate how support type (emotional vs. informational) shapes user perceptions across variations in task difficulty (easy vs. hard) and embodiment (non-embodied vs. embodied). In Study 1, emotional support positively influenced users’ impressions of VA in easy tasks, while informational support was more effective in difficult tasks. In Study 2, participants also preferred emotional support for easy tasks, but differences between support types were less pronounced for difficult tasks. Notably, embodiment exerted no significant influence in either study. These findings underscore the role of context in shaping effective support strategies, offering design insights for VAs as social companions.',
  },
  {
    slug: 'gmao',
    kind: 'research',
    type: 'Research Project',
    title: 'G-MAO: Gaze-Grounded Multi-Agent Orchestration for XR Document Understanding',
    authors: 'YunSu Lee, Seungwon Kim',
    venue: 'ICUFN 2026 · 3-page conference paper',
    images: [
      { src: './assets/projects/gmao/0.png', alt: 'G-MAO research teaser' },
    ],
    links: [
      { label: 'Paper', href: 'https://doi.org/10.1109/ICUFN69619.2026.11628549' },
    ],
    detailMeta: [
      ['Role', 'First Author'],
      ['Venue', 'ICUFN 2026'],
    ],
    abstract: 'Extended Reality (XR) environments are increas-ingly used for productivity tasks involving large language models (LLMs), such as document reading and analysis in multi-window workspaces. However, existing XR-based LLM systems face two major challenges: selecting relevant context from multiple con-current views and coordinating reasoning across multiple agents without overwhelming users. While prior gaze-aware approaches mainly focus on context selection, most systems still rely on single-agent architectures that struggle with document-level reasoning and temporal continuity. To address these limitations, we propose a gaze-grounded multi-agent orchestration framework for XR document understanding. The framework interprets users’ gaze behaviors as probabilistic signals of cognitive states, including local comprehension, global exploration, and temporal connec-tion. Based on these signals, the system dynamically activates specialized reasoning agents, including a Gaze Agent, Global Agent, and Memory Agent. A synthesis module integrates outputs from multiple agents into unified responses to reduce information overload and role ambiguity. We present the system architecture and discuss its potential for improving interaction efficiency and adaptive reasoning support in XR document understanding environments.',
  },
  {
    slug: 'gazerayhand',
    kind: 'research',
    type: 'Research Project',
    title: 'Performance Analysis of GazeRayHand Techniques for Complex Object-Manipulation Tasks in VR Environments',
    authors: 'YunSu Lee, Sei Kang, Seungwon Kim',
    venue: 'Journal of Digital Contents Society · 2025',
    images: [
      { src: './assets/projects/gazerayhand/0.jpg', alt: 'GazeRayHand research teaser' },
      { src: './assets/projects/gazerayhand/1.jpg', alt: 'GazeRayHand research figure 1' },
      { src: './assets/projects/gazerayhand/2.jpg', alt: 'GazeRayHand research figure 2' },
    ],
    links: [
      { label: 'Paper', href: 'https://doi.org/10.9728/dcs.2025.26.8.2237' },
    ],
    detailMeta: [
      ['Role', 'First Author'],
      ['Venue', 'JDCS 2025'],
    ],
    abstract: 'In this study, we investigate the performance of the GazeRayHand and GazeRayHand2 techniques for 3D object manipulation during complex tasks in Virtual Reality (VR) environments. Whereas previous research has primarily focused on simple or isolated tasks,  our  study  explores  more  realistic  and  practical  applications,  including  assembly  and  rearrangement  scenarios.  The  results indicate  that  both  GazeRayHand  and  GazeRayHand2  significantly  outperform  the  Gaze&Pinch  technique,  demonstrating  reduced unnecessary movement and  enhanced intuitiveness and usability.  In contrast,  the Modified Gaze Beam Guided technique  yielded the  least  effective  performance,  largely  owing  to its  dependence  on  mandatory  interaction  steps.  These  findings  suggest that the GazeRayHand approaches offer effective and user-friendly solutions for complex object manipulation in VR, with the potential to inform  the  design  of  more  intuitive  interaction  systems  in  immersive  environments.',
  },
  {
    slug: 'circle-game',
    kind: 'team',
    type: 'Team Project',
    title: 'Circle Game',
    authors: 'Developer & Music · with GGanari',
    venue: "Beginner's Jam March 2025 · Godot",
    images: [
      { src: './assets/projects/circle-game/0.png', alt: 'Circle Game teaser' },
      { src: './assets/projects/circle-game/1.png', alt: 'Circle Game screenshot 1' },
      { src: './assets/projects/circle-game/2.png', alt: 'Circle Game screenshot 2' },
    ],
    links: [
      { label: 'Play', href: 'https://sjmjys954646.itch.io/circle-game' },
      { label: 'Video', href: 'https://www.youtube.com/watch?v=PotgS6yigJg' },
      // { label: 'Code', href: 'https://github.com/...' },
      // { label: 'Video', href: 'https://...' },
    ],
    detailMeta: [
      ['Role', 'Developer & Music'],
      ['Team', '2 members'],
      ['Program', "Beginner's Jam March 2025"],
    ],
    about: 'Circle Game is a minimalist rhythm game developed with GGanari for Beginner’s Jam March 2025. Built with Godot, the game challenges players to press keys in time as a moving ball reaches the center of a circle.',

    roleDescription: 'I was responsible for implementing the player-facing gameplay interface and producing the game’s music, while my teammate handled the game design and chart editor.',

    contributions: [
      'Developed the in-game visual interface and gameplay scene using Godot.',
      'Produced music by recording, editing, and refining original piano performances.',
      'Created additional music using Suno AI-assisted generation.',
    ],
    tech: ['Godot'],
    projectSections: [],
  },
  {
    slug: 'haul',
    kind: 'team',
    type: 'Team Project',
    title: 'HauL: Freight Transportation Platform',
    authors: 'Backend Developer & Team Lead · 4-person team',
    venue: 'HMG Softeer Bootcamp · 2024',
    images: [
      { src: './assets/projects/haul/0.png', alt: 'HauL project cover' },
      { src: './assets/projects/haul/1.png', alt: 'HauL mobile interface' },
    ],
    links: [
      // { label: 'Code', href: 'https://github.com/...' },
      // { label: 'Presentation', href: 'https://...' },
      // { label: 'Video', href: 'https://...' },
    ],
    detailMeta: [
      ['Role', 'Backend Developer & Team Lead'],
      ['Team', '4 members'],
      ['Program', 'HMG Softeer Bootcamp'],
    ],
    about: 'HauL is a freight transportation platform developed by a four-person team(2 FE, 2 BE) during the 3rd HMG Softeer Bootcamp, where it won the runner-up award in the final project competition. The platform consists of two applications designed for different user groups: a Customer App that provides vehicle recommendations, transportation cost estimates, and reservations, and a Driver App that enables drivers to discover transportation orders based on their vehicle type and location.',

    roleDescription: 'As the team lead and project manager, I collaborated with my teammates to plan and coordinate the development process while contributing primarily to backend development.',

    contributions: [
      'Led project planning and development coordination as the team lead and project manager.',
      'Designed the backend infrastructure and relational database schema.',
      'Implemented the reservation workflow, including vehicle recommendations, transportation cost estimation, and guest reservation number generation.',
      'Developed vehicle- and location-based order search functionality for drivers.',
      'Prepared approximately 1.02 million records for performance analysis and contributed to technical documentation.',
    ],
    tech: [
      'Spring Boot',
      'Spring Data JPA',
      'MySQL',
      'QueryDSL',
      'AWS',
    ],
    projectSections: [],
  },
]

export const getWork = (slug) => works.find((work) => work.slug === slug)
