export default function WorkVisual({ work, detail = false }) {
  const firstImage = work.images?.[0]
  const imageSrc = typeof firstImage === 'string' ? firstImage : firstImage?.src

  if (imageSrc) {
    return (
      <div className={`work-visual visual-image ${detail ? 'detail-visual' : ''}`}>
        <img src={imageSrc} alt={`${work.title} preview`} />
      </div>
    )
  }

  return (
    <div className={`work-visual visual-${work.visual} ${detail ? 'detail-visual' : ''}`} aria-hidden="true">
      {work.visual === 'gesture' && (
        <div className="gesture-scene">
          <span className="person p1" /><span className="person p2" /><span className="person p3" />
          <span className="gesture-line g1" /><span className="gesture-line g2" /><span className="gesture-line g3" />
        </div>
      )}
      {work.visual === 'assistant' && (
        <div className="assistant-scene">
          <span className="bubble b1">i</span><span className="avatar-dot" /><span className="bubble b2">♥</span>
        </div>
      )}
      {work.visual === 'gmao' && (
        <div className="gmao-scene">
          <span className="eye" /><span className="ray" /><span className="doc" />
          <span className="agent a1">A</span><span className="agent a2">B</span><span className="agent a3">C</span>
        </div>
      )}
      {work.visual === 'interaction' && (
        <div className="interaction-scene">
          <span className="eye-small" /><span className="ray-small" /><span className="cube" /><span className="hand">+</span>
        </div>
      )}
      {work.visual === 'circle' && (
        <div className="circle-scene">
          <span className="outer-ring" /><span className="inner-ring" /><span className="moving-dot" />
        </div>
      )}
      {work.visual === 'anonymous' && (
        <div className="anonymous-scene">
          <span /><span /><span /><span />
        </div>
      )}
    </div>
  )
}
