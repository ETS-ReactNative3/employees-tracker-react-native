import React from 'react'

import Form from '../UI/Form'
import withKeyboardDismiss from '../hoc/withKeyboardDismiss'
import { CenteredContainer } from '../Styled'

const addEmployeeInputs = [
  {
    id: 'photo',
    placeholder: 'Upload photo',
    value: '',
    returnKeyType: 'next',
    first: true,
    blurOnSubmit: false,
    isMediaInput: true
  },
  {
    id: 'surname',
    placeholder: 'Surname',
    value: '',
    autoFocus: true,
    returnKeyType: 'next',
    blurOnSubmit: false
  },
  {
    id: 'name',
    placeholder: 'Name',
    value: '',
    returnKeyType: 'next',
    blurOnSubmit: false
  },
  {
    id: 'secondName',
    placeholder: 'Second Name',
    value: '',
    returnKeyType: 'next',
    blurOnSubmit: false
  },
  {
    id: 'position',
    placeholder: 'Position',
    value: '',
    returnKeyType: 'next',
    blurOnSubmit: false
  },
  {
    id: 'personnelNumber',
    placeholder: 'Personnel Number',
    value: '',
    last: true,
    returnKeyType: 'done'
  }
]

const AddEmployee = () => (
  <CenteredContainer>
    <Form action="Add Employee" inputs={addEmployeeInputs} />
  </CenteredContainer>
)

export default withKeyboardDismiss(AddEmployee)