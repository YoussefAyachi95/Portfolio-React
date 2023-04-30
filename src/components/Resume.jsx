import React from "react"
import resume from '../assets/Resume.pdf'

export default function Resume() {

  return (
     <object data={resume} type="application/pdf" className="h-screen w-screen overflow-hidden" />
  )
}
