import React from 'react'

const RedBlur = () => {
  return (
    <svg className="absolute z-0" width="256" height="360" viewBox="0 0 256 360" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_14_463)">
        <circle cx="22" cy="126" r="196" fill="url(#paint0_radial_14_463)"/>
        </g>
        <defs>
        <filter id="filter0_f_14_463" x="-212" y="-108" width="468" height="468" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="19" result="effect1_foregroundBlur_14_463"/>
        </filter>
        <radialGradient id="paint0_radial_14_463" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(22 126) rotate(90) scale(196)">
        <stop stop-color="#FF3F44"/>
        <stop offset="1" stop-color="#FEFEFE" stop-opacity="0"/>
        </radialGradient>
        </defs>
    </svg>  
  )
}

export default RedBlur