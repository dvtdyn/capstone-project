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
  color: white;
  padding: 8px 8px 8px 0;
  font-size: 1.6rem;
  height: 40px;
  outline: none;
  display: block;
  border: none;
  border-bottom: 1px solid white;
  &[type='file'] {
    display: none;
  }

  &[type='submit'] {
    display: block;
    background: white;
    color: var(--dark);
    border-radius: 12px;
    margin: 0 auto;

    padding: 8px 20px;
    font-size: 2rem;
    height: 100%;
  }

  &::placeholder {
    font-size: 1.6rem;
    color: whitesmoke;
  }

  &:focus {
    border-color: lightsalmon;
  }
`
