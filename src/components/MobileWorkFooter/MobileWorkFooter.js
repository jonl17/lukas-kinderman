import React from "react"
import { useMobileFooterInfo } from "../../store"

export default function MobileWorkFooter() {
  const { content } = useMobileFooterInfo()
  return (
    <div className="mobile-project-footer d-block d-lg-none">
      {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
    </div>
  )
}
