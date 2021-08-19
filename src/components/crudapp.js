//  Dependencies
import React, {useState} from 'react';
import styled from 'styled-components';
import AddUserForm from '../forms/AddUserForm';
import UserTable from '../tables/UserTable';
import EditUserForm from '../forms/EditUserForm';

// Styles
const Column = styled.div`
 width: 50%;
`

const FlexWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin-top: 15px;
`

const Header = styled.span`
	font-size: 24px;
`

const SubHeader = styled.span`
	font-size: 20px;
`

const Wrapper = styled.div`
	margin: 10px;
`

//  Components
const CrudApp = () => {

	const usersData = [
		{ id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
	]

	const [users, setUsers] = useState(usersData)

	const addUser = (user) => {
		user.id = users.length + 1
		setUsers([...users, user])
	}

	const deleteUser = (id) => {
		setUsers(users.filter((user) => user.id !== id))
		setEditing(false);
	}

	const [editing, setEditing] = useState(false)

	const initialFormState = {id: null, name: '', username: ''}

	const [currentUser, setCurrentUser] = useState(initialFormState)

	const editRow = (user) => {
		setEditing(true)
		setCurrentUser({id: user.id, name: user.name, username: user.username})
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)
		setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
	}

  return (
	  <Wrapper>
			<Header>CRUD App with Hooks</Header>
			<FlexWrapper>
				<Column>
					<SubHeader>Add users</SubHeader>
					{editing ? (
						<EditUserForm 
							setEditing={setEditing}
							currentUser={currentUser}
							updateUser={updateUser}
						/>
					) : (
						<AddUserForm 
							addUser={addUser}
						/>
					)}
				</Column>
				<Column>
					<SubHeader>View users</SubHeader>
					<UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
				</Column>
			</FlexWrapper>
    </Wrapper>
  )
}

export default CrudApp