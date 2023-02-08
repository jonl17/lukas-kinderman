import React from "react"
import { Texts } from "../../types"

export default function WorkText({ primary, secondary }: Texts) {
  return (
    <>
      <section className="work-text pt-4 px-3 d-none d-lg-block">
        <nav className="work-text__primary">
          {primary && primary.html ? (
            <div dangerouslySetInnerHTML={{ __html: primary.html }} />
          ) : (
            <h1>Lukas Kindermann</h1>
          )}
        </nav>
        <footer className="work-text__secondary">
          {secondary && secondary.html && (
            <div dangerouslySetInnerHTML={{ __html: secondary.html }} />
          )}
        </footer>
      </section>
      {/* on mobile the primary text is only visible in the style of the secondary 1 */}
      <section className="work-text pt-4 px-3 d-block d-lg-none">
        <nav className="work-text__primary">
          <h1>Lukas Kindermann</h1>
        </nav>
        <footer className="work-text__secondary">
          {primary && primary.html && (
            <div dangerouslySetInnerHTML={{ __html: primary.html }} />
          )}
        </footer>
      </section>
    </>
  )
}
