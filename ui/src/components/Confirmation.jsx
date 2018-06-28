import React from 'react'

const Confirmation = ({ onConfirm, onCancel }) => <div>
  <button onClick={onConfirm}>Yes</button>
  <button onClick={onCancel}>No</button>
</div>

export default Confirmation
