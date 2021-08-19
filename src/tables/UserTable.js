//  Dependencies
import React from 'react';
import styled from 'styled-components';
import Themes from '../themes/GlobalStyles'

// Styles
const Button = styled.button`
	background-color: #FFF;
	border: 1px solid ${Themes.lightGray};
	border-radius: 5px;
	cursor: pointer;
	margin: 1px;

	&:hover {
		background-color: ${Themes.lightGray};
	}
`

const Tbody = styled.tbody`

`

const Td = styled.td`
	font-size: 12px;
	text-align: left;
	width: 33%;
`

const Th = styled.th`
	font-size: 14px;
	text-align: left;
	width: 33%;
`

const Thead = styled.thead`

`

const Tr = styled.tr`
	align-items: center;
	border-bottom: 1px solid ${Themes.lightGray};
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	padding: 5px 0;
`

const Table = styled.table`
	width: 100%;
`

// Component
const UserTable = (props) => {
	return (
		<Table>
			<Thead>
				<Tr>
					<Th>Name</Th>
					<Th>Username</Th>
					<Th>Actions</Th>
				</Tr>
			</Thead>
			<Tbody>
				{props.users.length > 0 ? (
					props.users.map((user) => {
						return (
							<Tr key={user.id}>
								<Td>{user.name}</Td>
								<Td>{user.username}</Td>
								<Td>
									<Button
										onClick={() => {
											props.editRow(user)
										}}
									>Edit</Button>
									<Button
										onClick={() => props.deleteUser(user.id)}
									>Delete</Button>
								</Td>
							</Tr>
						)
					})
				) : (
					<Tr>
						<Td colSpan={3}>No users</Td>
					</Tr>
				)}
			</Tbody>
		</Table>
	)
}

export default UserTable