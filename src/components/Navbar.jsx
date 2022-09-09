import styled from 'styled-components'
import LaptopWindows from '@mui/icons-material/LaptopWindows'
import SearchRounded from '@mui/icons-material/SearchRounded'
import SwapHoriz from '@mui/icons-material/SwapHoriz'
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'
import {Badge} from '@mui/material'

import NavbarBottom from './NavbarBottom'

const Container = styled.div`
	width: 100%;
	background-color: white;
`

const Wrapper = styled.div`
	margin: 0px auto;
	padding: 10px 0;
	width: 80%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Logo = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	color: aquamarine;
	font-size: 26px;
`

const Title = styled.h1`
	font-size: 28px;
	font-weight: 600;
	margin-left: 3px;
`

const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	flex: 2;
	border-radius: 20px;
	border: 2px solid #f2f2f2;
	height: 40px;
	padding-left: 10px;
	color: gray;
	background-color: white;
`

const Search = styled.input`
	border: none;
	font-size: 16px;
	margin-left: 7px;
	width: 50%;
	height: 100%;
	color: gray;
	font-family: 'Dosis', sans-serif;

	&:focus {
		outline: none;
	}
`

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`

const Item = styled.div`
	margin: 0px 10px;
	display: flex;
	align-items: center;
	flex-direction: column;
	cursor: pointer;
	transition: .5s;

	&:hover {
		color: blue;
	}
`

const Desc = styled.p`
	font-size: 14px;
	margin: 0;
`

const Navbar = ({page}) => {
	return (
		<Container>
			<Wrapper>
				<Logo>
					<LaptopWindows/>
					<Title>TechShop</Title>
				</Logo>
				<SearchContainer>
					<SearchRounded />
					<Search placeholder="Buscar produtos..."/>
				</SearchContainer>
				<Right>
					<Item>
						<SwapHoriz />
						<Desc>Comparar</Desc>
					</Item>
					<Item>
						<Badge badgeContent={4} color="primary">
							<FavoriteBorderOutlined />
						</Badge>
						<Desc>Desejos</Desc>
					</Item>
					<Item>
						<Badge badgeContent={2} color="primary">
							<ShoppingCartOutlined />
						</Badge>
						<Desc>Carrinho</Desc>
					</Item>
				</Right>
			</Wrapper>
			<NavbarBottom page={page}/>
		</Container>
		)
}

export default Navbar