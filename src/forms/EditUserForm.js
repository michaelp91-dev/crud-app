// Dependencies
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Themes from '../themes/GlobalStyles'

// Styles
const Button = styled.button`
	background-color: ${Themes.blue};
	border: 1px solid ${Themes.lightGray};
	border-radius: 5px;
	color: #FFF;
	cursor: pointer;
	padding: 5px;

	&:hover {
		background-color: ${Themes.lightGray};
		color: #000;
	}
`

const Form = styled.form`

`

const Input = styled.input`
	border: 2px solid ${Themes.lightGray};
	border-radius: 5px;
	margin: 5px 0;
	padding: 5px;
	width: 90%;
`

const InputWrapper = styled.div`
	margin: 5px 0;
`

const Label = styled.label`
	display: block;
	font-size: 14px;
`

const Wrapper = styled.div`

`

// Component
const EditUserForm = (props) => {
	const [user, setUser]  = useState(props.currentUser);

	const handleInputChange = (e) => {
		const {name, value} = e.target
		setUser({...user, [name]: value})
	}

	useEffect(() => {
		setUser(props.currentUser)
	}, [props])

  return (
    <Wrapper>
			<Form
				onSubmit={(e) => {
					e.preventDefault()
					if (!user.name || !user.username) return

					props.updateUser(user.id, user)
				}}
			>
				<InputWrapper>
					<Label>Name</Label>
					<Input 
						type='text'
						name='name'
						value={user.name}
						onChange={handleInputChange}
					/>
				</InputWrapper>
				<InputWrapper>
					<Label>Username</Label>
					<Input 
						type='text'
						name='username'
						value={user.username}
						onChange={handleInputChange}
					/>
				</InputWrapper>
				<Button>Update user</Button>
				<Button
					onClick={() => props.setEditing(false)}
				>Cancel</Button>
			</Form>
    </Wrapper>
  )
}

export default EditUserForm