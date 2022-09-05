import styled from 'styled-components'
import DehazeOutlined from '@mui/icons-material/DehazeOutlined'
import ArrowDropDownOutlined from '@mui/icons-material/ArrowDropDownOutlined'

const Container = styled.div`
	width: 100%;
`

const Wrapper = styled.div`
	margin: 0 auto;
	width: 80%;
	display: flex;
	justify-content: space-between;
`

const CategoryButton = styled.div`
	background-color: #f2f2f2;
	display: flex;
	padding: 5px 50px;
	align-items: center;
	cursor: pointer;
`

const Button = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 10px;
`

const Menu = styled.div`
	display: flex;

`

const MenuItem = styled.div`
	margin: 0px 5px;
	display: flex;
	align-items: center;
	justify-content: center;
`

const Shipping = styled.div`
`

const NavbarBottom = () => {
	return (
		<Container>
			<Wrapper>
				<CategoryButton>
					<Button>
						<DehazeOutlined />
					</Button>
					Categorias
				</CategoryButton>
				<Menu>
					<MenuItem><ArrowDropDownOutlined /> Início</MenuItem>
					<MenuItem><ArrowDropDownOutlined /> Loja</MenuItem>
					<MenuItem><ArrowDropDownOutlined /> Categorias</MenuItem>
					<MenuItem><ArrowDropDownOutlined /> Blog</MenuItem>
					<MenuItem><ArrowDropDownOutlined /> Contato</MenuItem>
					<MenuItem><ArrowDropDownOutlined /> Carrinho</MenuItem>
				</Menu>
				<Shipping>

				</Shipping>
			</Wrapper>
		</Container>
		)
}

export default NavbarBottom