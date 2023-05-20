import React from 'react'
import { a } from '@react-spring/web'

export default function Overlay({ fill }) {
  // Just a Figma export, the fill is animated
  return (
    <div className="overlay">
      <a.svg viewBox="0 0 583 720" fill={fill} xmlns="http://www.w3.org/2000/svg">
        {/* Regular G */}

        <g transform="rotate(-45 50 50) translate(-10)">
          <path fill="#E8B059" d="M50.5 61h9v9h-9zM50.5 50.5h9v9h-9zM40 50.5h9v9h-9z" />
        </g>
        <g transform="rotate(-135 50 50)">
          <path fill="#E8B059" d="M50.5 61h9v9h-9zM50.5 50.5h9v9h-9zM40 50.5h9v9h-9z" />
        </g>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={10} fontWeight="bold" letterSpacing="-.02em">
          <tspan x={328} y={46.182} children="Expert at" />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={16} fontWeight="bold" letterSpacing="-.02em">
          <tspan x={392} y={46.182} children="React " />
          <tspan x={392} y={57.182} children="Next " />
          <tspan x={392} y={69.182} children="Vue" />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={26} fontWeight={500} letterSpacing="0em">
          <tspan x={10} y={175.318} children="Girum Gizachew " />
        </text>
        <text fill="#E8B059" style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={42} fontWeight="bold" letterSpacing="0em">
          <tspan x={10} y={227.909} children={'Frontend Developer \u2014'} />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={28} fontWeight="bold" letterSpacing="0em">
          <tspan x={40} y={270.909} />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={36} fontWeight="bold" letterSpacing="0em">
          <tspan x={20} y={321.909} children="I am a Fullstack Web  " />
          <tspan x={20} y={362.909} children="Developer" />
          <tspan x={20} y={403.909} children="Expert in professional Frontend" />
          <tspan x={20} y={444.909} children="development " />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={10.5} fontWeight={500} letterSpacing="0em">
          <tspan x={326} y={640.318} children="Lets My Projects Speak about Me" />
        </text>
      </a.svg>
    </div>
  )
}
