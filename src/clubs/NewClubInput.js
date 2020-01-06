import React from 'react'
import styled from 'styled-components/macro'

export default function NewClubInput({
  type,
  id,
  accept,
  name,
  onChange,
  placeholder,
  value,
  className,
  reference = null,
  dataIndex,
  dataName,
}) {
  return (
    <Input
      type={type}
      id={id}
      data-index={dataIndex}
      data-name={dataName}
      accept={accept}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      className={className}
      ref={reference}
    />
  )
}

const Input = styled.input`
  background-color: transparent;
  color: var(--dark);
  padding: 8px 8px 8px 0;
  font-size: 1.6rem;
  height: 40px;
  outline: none;
  display: block;
  border: none;
  border-bottom: 1px solid var(--dark);
  &[type='file'] {
    display: none;
  }

  &[type='submit'] {
    display: none;
  }
  &[type='button'] {
    display: none;
  }

  &::placeholder {
    font-size: 1.6rem;
    color: #6b7083;
  }

  &:focus {
    border-color: lightsalmon;
  }
`
