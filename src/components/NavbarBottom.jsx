import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
`

const Wrapper = styled.div`
	margin: 0 auto;
	width: 80%;
	display: flex;
	justify-content: center;
	flex-direction: column;
`

const Menu = styled.div`
	display: flex;
	margin-bottom: 7px;
	justify-content: center;
`

const MenuItem = styled.div`
	margin: 0px 15px;
	padding: 0px 2px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	transition: .5s;
	cursor: pointer;
	border-left: ${(props) => props.page === 'home' && '2px solid aquamarine'};

	&:hover {
		color: aquamarine;
	}
`

const Hr = styled.hr`
	margin-top: 0;
	border: none;
	height: 1px;
	background-color: #fafafa;
	width: 100%;
`

const NavbarBottom = ({page}) => {
	return (
		<Container>
			<Wrapper>
				<Hr />
				<Menu>
					<MenuItem page={page}>Início</MenuItem>
					<MenuItem>Loja</MenuItem>
					<MenuItem>Categorias</MenuItem>
					<MenuItem>Blog</MenuItem>
					<MenuItem>Contato</MenuItem>
					<MenuItem>Carrinho</MenuItem>
				</Menu>
			</Wrapper>
		</Container>
		)
}

export default NavbarBottom