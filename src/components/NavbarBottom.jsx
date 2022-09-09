import styled from 'styled-components'
import Dehaze from '@mui/icons-material/Dehaze'
import Computer from '@mui/icons-material/ComputerOutlined'
import Smartphone from '@mui/icons-material/SmartphoneOutlined'
import TVOutlined from '@mui/icons-material/TvOutlined'
import SmartScreenOutlined from '@mui/icons-material/SmartScreenOutlined'
import TabletMacOutlined from '@mui/icons-material/TabletMacOutlined'
import AudiotrackOutlined from '@mui/icons-material/AudiotrackOutlined'

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
	justify-content: center;
	position: relative;
	padding-bottom: 7px;
`

const MenuItem = styled.div`
	margin: 0px 15px;
	padding: 0px 2px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 500;
	color: gray;
	cursor: pointer;
	border-top: ${(props) => props.page === 'home' && '2px solid aquamarine'};

	&:hover {
		border-top: 2px solid aquamarine;
		color: aquamarine;
	}
`

const MenuItemCategory = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 220px;
	padding: 7px 0;
	background-color: yellow;
	display: flex;
	align-items: center;
	z-index: 2;
	font-weight: 500;
	border-radius: 9px 9px 0 0;
	justify-content: center;
	cursor: pointer;

	svg {
		margin-right: 10px;
	}

	&:hover + div {
		display: block;
	}
`

const Hr = styled.hr`
	margin-top: 0;
	border: none;
	height: 1px;
	background-color: #fafafa;
	width: 100%;
`

const MenuHover = styled.div`
	background-color: white;
	position: absolute;
	top: 30px;
	left: 0;
	width: 100%;
	display: none;
	width: 220px;
	z-index: 1;
	border-radius: 0 0 9px 9px;
	box-shadow: 1px 1px 5px black;

	&:hover {
		display: block;
	}
`

const MenuHoverItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 0;
	cursor: pointer;
	transition: .5s;

	&:hover {
		background-color: aquamarine;
	}
`

const NavbarBottom = ({page}) => {
	return (
		<Container>
			<Wrapper>
				<Hr />
				<Menu>
					<MenuItemCategory>
						<Dehaze /> Categorias
					</MenuItemCategory>
					<MenuHover>
						<MenuHoverItem><Computer style={{fontSize: "20px", marginRight: "7px"}}/> Computador</MenuHoverItem>
						<MenuHoverItem><Smartphone style={{fontSize: "20px", marginRight: "7px"}}/> Smartphone</MenuHoverItem>
						<MenuHoverItem><TVOutlined style={{fontSize: "20px", marginRight: "7px"}}/> TV's</MenuHoverItem>
						<MenuHoverItem><SmartScreenOutlined style={{fontSize: "20px", marginRight: "7px"}}/> Videogame</MenuHoverItem>
						<MenuHoverItem><TabletMacOutlined style={{fontSize: "20px", marginRight: "7px"}}/> Tablet</MenuHoverItem>
						<MenuHoverItem><AudiotrackOutlined style={{fontSize: "20px", marginRight: "7px"}}/> Áudio</MenuHoverItem>
					</MenuHover>
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