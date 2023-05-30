import React from 'react'

const CyanBlur = () => {
  return (
    <svg className="scale-100 absolute right-96 top-64" width="468" height="468" viewBox="0 0 468 468" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_14_465)">
        <circle cx="234" cy="234" r="196" fill="url(#paint0_radial_14_465)"/>
        </g>
        <defs>
        <filter id="filter0_f_14_465" x="0" y="0" width="468" height="468" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="19" result="effect1_foregroundBlur_14_465"/>
        </filter>
        <radialGradient id="paint0_radial_14_465" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(234 234) rotate(90) scale(196)">
        <stop stop-color="#49B9B5"/>
        <stop offset="1" stop-color="#FEFEFE" stop-opacity="0"/>
        </radialGradient>
        </defs>
    </svg>
  )
}

export default CyanBlur