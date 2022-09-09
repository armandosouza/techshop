import styled from 'styled-components'
import LaptopWindows from '@mui/icons-material/LaptopWindows'

const Container = styled.footer`
	width: 100%;
	background-color: white;
	height: 250px;
`

const Wrapper = styled.div`
	width: 80%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
`

const Logo = styled.div`
	color: aquamarine;
	display: flex;
	align-items: center;
`

const SocialMedia = styled.div`
	display: flex;
	font-size: 16px;
`

const IconSocialMedia = styled.img`
	width: 32px;
	height: 32px;
	object-fit: cover;
	margin: 0 4px;
	cursor: pointer;
	transition: .5s;

	&:hover {
		transform: scale(1.1);
	}
`

const Title = styled.h2`
	font-size: 32px;
	font-weight: 600;
	margin-left: 3px;
`

const Left = styled.div`
	flex: 1;
	height: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
`

const CenterLeft = styled.div`
	flex: 1;
`

const CenterRight = styled.div`
	flex: 1;
`

const Menu = styled.ul`
	list-style-type: none;
	font-size: 
`

const Item = styled.li`
	margin: 8px 0;
	color: darkslategray;
	cursor: pointer;
	font-weight: 500;

	&:hover {
		color: blue;
		text-decoration: underline;
	}
`

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`

const Payment = styled.img`
	width: 100%;
	text-align: center;
	height: 40px;
	object-fit: cover;
`

const Footbar = styled.div`
	padding: 5px 0;
	font-size: 16px;
	color: whitesmoke;
	background-color: darkslategray;
	text-align: center;
`

const Footer = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Logo>
						<LaptopWindows style={{fontSize: "30px"}}/>
						<Title>TechShop</Title>
					</Logo>
					<SocialMedia>
						<IconSocialMedia src="https://i.pinimg.com/originals/0c/e6/06/0ce6061c72025cb98854de1ae1bed392.png"/>
						<IconSocialMedia src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png"/>
						<IconSocialMedia src="https://www.pikpng.com/pngl/b/184-1841066_logo-instagram-png-splash-clipart.png"/>
						<IconSocialMedia src="https://www.iconpacks.net/icons/1/free-pinterest-icon-131-thumb.png"/>
					</SocialMedia>
				</Left>
				<CenterLeft>
					<Menu>
						<Item>Início</Item>
						<Item>Produtos</Item>
						<Item>Categorias</Item>
						<Item>Lista de Desejos</Item>
						<Item>Carrinho</Item>
						<Item>Perfil</Item>
						<Item>Ajuda</Item>
					</Menu>
				</CenterLeft>
				<CenterRight>
					<Menu>
						<Item>Sobre</Item>
						<Item>Política de Privacidade</Item>
						<Item>Política de Reembolso</Item>
						<Item>Termos e Condições</Item>
						<Item>Pagamento</Item>
						<Item>Tracking</Item>
						<Item>Mais</Item>
					</Menu>
				</CenterRight>
				<Right>
					<Payment src="https://www.seekpng.com/png/full/988-9887402_ssl-icon-payment-methods-accepted-uk.png"/>
				</Right>
			</Wrapper>
			<Footbar>&copy; TechShop - 2022, Todos os direitos reservados - Armando Souza</Footbar>
		</Container>
		)
}

export default Footer