import React from 'react'
import { Spinner } from '@blueprintjs/core'

interface CoverSpinnerProps {
  size?: number
  color?: string
}

export default function CoverSpinner(props: CoverSpinnerProps) {

  const {
    size = 40,
    color = 'rgba(26, 32, 44, .5)',
  } = props

  return (
    <div
      className="htc-cover-spinner absolute trbl-0 flex justify-center items-center cursor-wait"
      style={{
        backgroundColor: color,
      }}
    >
      <Spinner size={size} />
    </div>
  )
}