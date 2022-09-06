import styled from 'styled-components'
import Dehaze from '@mui/icons-material/Dehaze'
import Computer from '@mui/icons-material/ComputerOutlined'
import Smartphone from '@mui/icons-material/SmartphoneOutlined'
import TVOutlined from '@mui/icons-material/TvOutlined'
import SmartScreenOutlined from '@mui/icons-material/SmartScreenOutlined'
import TabletMacOutlined from '@mui/icons-material/TabletMacOutlined'
import AudiotrackOutlined from '@mui/icons-material/AudiotrackOutlined'
import TagOutlined from '@mui/icons-material/PriceCheckOutlined'
import ChevronLeft from '@mui/icons-material/ChevronLeft'
import ChevronRight from '@mui/icons-material/ChevronRight'

const Container = styled.div`
	background-color: #f5f5f5;
	width: 100%;
`

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	margin: 0 auto;
`

const TopSection = styled.div`
	padding: 20px 0;
	display: flex;
	justify-content: space-between;
`

const Sidebar = styled.div`
	border-radius: 9px 9px 0 0;
	width: 20%;
`

const ButtonTop = styled.div`
	width: 100%;
	background-color: yellow;
	padding: 7px 0;
	display: flex;
	align-items: center;
	font-weight: 500;
	border-radius: 9px 9px 0 0;
	justify-content: center;

	svg {
		margin-right: 10px;
	}
`

const Button = styled.div`
	padding: 7px 0;
	width: 100%;
	display: flex;
	align-items: center;
	border-top: 3px solid #f5f5f5;
	border-radius: 4px;
	transition: .5s;
	background-color: white;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	justify-content: center;

	svg {
		margin-right: 10px;
	}

	&:hover {
		background-color: aquamarine;
	}
`

const BannerContainer = styled.div`
	height: inherit;
	border-radius: 9px;
	opacity: 0.7;
	background-color: white;
	display: flex;
	width: 78%;
`

const Banner = styled.div`
	width: 100%;
	height: inherit;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background: url("https://as01.epimg.net/meristation/imagenes/2020/07/02/betech/1593684423_686673_1593684643_noticia_normal.jpg");
	background-position: center;
	background-size: cover;
	position: relative;
`

const BannerTitle = styled.h2`
	font-size: 40px;
	font-weight: 500;
	margin-bottom: 5px;
`

const BannerDesc = styled.p`
	text-align: center;
	font-size: 24px;
	font-weight: 200;
	font-style: italic;
`

const BannerArrow = styled.div`
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 16px;
	color: gray;
	background-color: #fafafa;
	border-radius: 50%;
	z-index: 1;
	opacity: 1;
	cursor: pointer;
	position: absolute;
	top: 50%;
	left: ${(props) => props.position === 'left' && '10'}px;
	right: ${(props) => props.position === 'right' && '10'}px;
	transition: .5s;

	&:hover {
		background-color: aquamarine;
	}
`

const BannerButton = styled.span`
	font-size: 18px;
	font-weight: bold;
	border-radius: 5px;
	border: 2px solid aquamarine;
	margin-top: 5px;
	padding: 5px 20px;
	background-color: white;
	transition: .5s;
	cursor: pointer;

	&:hover {
		background-color: aquamarine;
		color: white;
		font-weight: bold;
	}
`

const CategorySection = styled.div`
	display: flex;
	justify-content: center;
	background-color: #f5f5f5;
	margin: 10px 0;
`

const Category = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	transition: .5s;
	margin: 0 8px;

	&:hover {
		transform: scale(1.1);
	}
`

const CategoryImage = styled.img`
	background-color: white;
	background-size: cover;
	border-radius: 50%;
	width: 100px;
	height: 100px;
	box-shadow: 1px 1px 2px black;
`

const CategoryDesc = styled.p`
	font-size: 16px;
	font-style: italic;
	color: gray;
`

const ProductsSection = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px 0;
	color: black;
`

const Deals = styled.div`
	border-radius: 9px;
	width: 20%;
	background-color: white;
	display: flex;
	justify-content: center;
	flex-direction: column;
`

const Hr = styled.hr`
	margin-top: 0;
	border: none;
	height: 3px;
	background-color: #f5f5f5;
	width: 100%;
`

const Title = styled.h3`
	margin: 5px 0;
	font-weight: 400;
	font-size: 16px;
	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		margin-right: 5px;
		font-size: 18px;
	}
`

const DealItem = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	position: relative;
`

const DealImage = styled.img`
	width: 100%;
	opacity: 0.7;
`

const DealDiscount = styled.div`
	font-weight: 500;
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	background-color: blue;
	color: white;
	font-style: italic;
	position: absolute;
	top: 5px;
	right: 10px;
`

const DealDesc = styled.p`
	padding: 0 5px;
	font-style: italic;
`

const Products = styled.div`
	width: 78%;
	border-radius: 9px;
	height: inherit;
	background-color: white;
`

const ProductList = styled.div`
	margin: 10px 20px 0 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`

const Product = styled.div`
	background: url(${(props) => props.url});
	background-size: cover;
	background-position: center;
	width: 150px;
	height: 150px;
	margin: 0 10px;
	cursor: pointer;
	position: relative;

	&:hover {
		transform: scale(1.1);
		.div {
			display: none;
		}
	}
`

const ProductContainer = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 16px;
	position: absolute;
	bottom: 0;
	height: 30px;
	background-color: black;
	color: white;
	width: 100%;
`

const ProductTitle = styled.span``
const ProductPrice = styled.span``

const ProductsTop = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 20px;
`

const ProductsTopMenu = styled.div`
	display: flex;
	align-items: center;
`

const ProductsTopMenuItem = styled.span`
	margin: 0 10px;
	font-size: 14px;
	transition: .5s;
	cursor: pointer;

	&:hover {
		color: blue;
	}
`

const MainHome = () => {
	return (
		<Container>
			<Wrapper>
				<TopSection>
					<Sidebar>
						<ButtonTop><Dehaze /> Categorias</ButtonTop>
						<Button><Computer style={{fontSize: "20px"}}/> Computador</Button>
						<Button><Smartphone style={{fontSize: "20px"}}/> Smartphone</Button>
						<Button><TVOutlined style={{fontSize: "20px"}}/> TV's</Button>
						<Button><SmartScreenOutlined style={{fontSize: "20px"}}/> Videogame</Button>
						<Button><TabletMacOutlined style={{fontSize: "20px"}}/> Tablet</Button>
						<Button><AudiotrackOutlined style={{fontSize: "20px"}}/> Áudio</Button>
					</Sidebar>
					<BannerContainer>
						<Banner>
							<BannerArrow position="left"><ChevronLeft /></BannerArrow>
							<BannerTitle>PROMOÇÃO TECH PRIME</BannerTitle>
							<BannerDesc>10% DE DESCONTO EM TODOS OS COMPUTADORES</BannerDesc>
							<BannerButton>Conferir</BannerButton>
							<BannerArrow position="right"><ChevronRight /></BannerArrow>
						</Banner>
					</BannerContainer>
				</TopSection>
				<CategorySection>
					<Category>
						<CategoryImage src="https://www.compaq.com.br/arquivos/info-430-notebook2.png?v1"/>
						<CategoryDesc>Notebook</CategoryDesc>
					</Category>
					<Category>
						<CategoryImage src="https://files.tecnoblog.net/wp-content/uploads/2021/09/iphone-13-produto-2-700x700.png"/>
						<CategoryDesc>Smartphone</CategoryDesc>
					</Category>
					<Category>
						<CategoryImage src="https://files.tecnoblog.net/wp-content/uploads/2020/11/playstation_5_produto-700x700.png"/>
						<CategoryDesc>Videogame</CategoryDesc>
					</Category>
					<Category>
						<CategoryImage src="https://m.media-amazon.com/images/I/81tt-CrILGL._AC_SX450_.jpg"/>
						<CategoryDesc>PC</CategoryDesc>
					</Category>
					<Category>
						<CategoryImage src="https://images-americanas.b2w.io/produtos/01/00/img7/01/00/item/123403/3/123403301_1GG.png"/>
						<CategoryDesc>Peças</CategoryDesc>
					</Category>
					<Category>
						<CategoryImage src="https://lojaibyte.vteximg.com.br/arquivos/ids/218557/smartwatch%20gt%2001.jpg"/>
						<CategoryDesc>Smartwatch</CategoryDesc>
					</Category>
					<Category>
						<CategoryImage src="https://www.jbl.com.br/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwc1832f61/JBL_Boombox_Black_Hero-1605x1605.png?sw=537&sfrm=PNG"/>
						<CategoryDesc>Áudio</CategoryDesc>
					</Category>
					<Category>
						<CategoryImage src="https://img.terabyteshop.com.br/produto/g/placa-de-video-msi-geforce-gtx-1050-ti-4gt-oc-4gb-dual-fan-gddr5-pci-exp-912-v809-2272-i_85488.jpg"/>
						<CategoryDesc>Mais</CategoryDesc>
					</Category>
				</CategorySection>
				<ProductsSection>
					<Deals>
						<Title>
							<TagOutlined /> Promoção
						</Title>
						<Hr/>
						<DealItem>
							<DealImage src="https://acerstore.vtexassets.com/arquivos/ids/155728/Monitor-Acer-SA270-27--Full-HD-75z-1ms-HDMI-VGA.jpg?v=637064414003400000"/>
							<DealDiscount>5%</DealDiscount>
							<DealDesc>Todos os monitores com 5% de desconto!</DealDesc>
						</DealItem>
					</Deals>
					<Products>
						<ProductsTop>
							<Title style={{fontWeight:"500"}}>
								Novos Produtos
							</Title>
							<ProductsTopMenu>
								<ProductsTopMenuItem>TUDO</ProductsTopMenuItem>
								<ProductsTopMenuItem>CELULAR</ProductsTopMenuItem>
								<ProductsTopMenuItem>COMPUTADOR</ProductsTopMenuItem>
							</ProductsTopMenu>
						</ProductsTop>
						<Hr />
						<ProductList>
							<Product url="https://images-americanas.b2w.io/produtos/01/00/img7/01/00/item/123403/3/123403301_1GG.png">
								<ProductContainer>
									<ProductTitle>Produto</ProductTitle>
									<ProductPrice>R$ 129,90</ProductPrice>
								</ProductContainer>
							</Product>
							<Product>
								<ProductContainer>
									<ProductTitle></ProductTitle>
									<ProductPrice></ProductPrice>
								</ProductContainer>
							</Product>
							<Product>
								<ProductContainer>
									<ProductTitle></ProductTitle>
									<ProductPrice></ProductPrice>
								</ProductContainer>
							</Product>
							<Product>
								<ProductContainer>
									<ProductTitle></ProductTitle>
									<ProductPrice></ProductPrice>
								</ProductContainer>
							</Product>
							<Product>
								<ProductContainer>
									<ProductTitle></ProductTitle>
									<ProductPrice></ProductPrice>
								</ProductContainer>
							</Product>
						</ProductList>
					</Products>
				</ProductsSection>
			</Wrapper>
		</Container>
		)
}

export default MainHome