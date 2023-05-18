import React from 'react'
import { a } from '@react-spring/web'

export default function Overlay({ fill }) {
  // Just a Figma export, the fill is animated
  return (
    <div className="overlay">
      <a.svg viewBox="0 0 583 720" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <path fill="#E8B059" d="M50.5 61h9v9h-9zM50.5 50.5h9v9h-9zM40 50.5h9v9h-9z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M61 40H50.5v9H61v10.5h9V40h-9z" fill="#E8B059" />
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={6} fontWeight="bold" letterSpacing="-.02em">
          <tspan x={328} y={46.182} children="08/01/21" />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={6} fontWeight="bold" letterSpacing="-.02em">
          <tspan x={392} y={46.182} children="React " />
          <tspan x={392} y={54.182} children="Next " />
          <tspan x={392} y={62.182} children="Vue" />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={28} fontWeight={500} letterSpacing="0em">
          <tspan x={40} y={175.318} children="Girum Gizachew " />
        </text>
        <text fill="#E8B059" style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={44} fontWeight="bold" letterSpacing="0em">
          <tspan x={40} y={227.909} children={'Senior Frontend Developer \u2014'} />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={28} fontWeight="bold" letterSpacing="0em">
          <tspan x={40} y={270.909} />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={36} fontWeight="bold" letterSpacing="0em">
          <tspan x={40} y={321.909} children="I am a proficient Fullstack  " />   
          <tspan x={40} y={362.909} children="Web Developer" />
          <tspan x={40} y={403.909} children="Expert in professional Frontend" />
          <tspan x={40} y={444.909} children="development " />
       </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={10.5} fontWeight={500} letterSpacing="0em">
          <tspan x={326} y={640.318} children="Let your Project Speak about you" />
        </text>
      </a.svg>
    </div>
  )
}
