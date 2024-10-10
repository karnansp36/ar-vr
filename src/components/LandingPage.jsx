import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div>
        <h1>Click here tho select the model</h1>
      <Link to='/ar'>Model1 with Hiro</Link>
      <br />
      <Link to='/ar-vr'>Model1 with Hiro</Link>

    </div>
  )
}
