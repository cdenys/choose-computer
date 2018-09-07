import React from 'react'

const Checkbox = ({ responses, type, name, onChange, answers }) =>
  responses.map(response => (
    <div key={response.id}>
      <label htmlFor={response.id}>
        <input
          type={type}
          name={name}
          id={response.id}
          value={response.id}
          onChange={onChange}
          defaultChecked={answers.includes(response.id)}
        />
        {response.reponse}
      </label>
    </div>
  ))

export default Checkbox
