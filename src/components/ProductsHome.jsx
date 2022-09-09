import styled from 'styled-components'
import AddShoppingCartOutlined from '@mui/icons-material/AddShoppingCartOutlined'
import ZoomInOutlined from '@mui/icons-material/ZoomInOutlined'
import ShoppingBasketOutlined from '@mui/icons-material/ShoppingBasketOutlined'

const ProductsSection = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px 0;
	color: black;
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

const Products = styled.div`
	width: 100%;
	border-radius: 9px;
	height: inherit;
	background-color: white;
`

const ProductList = styled.div`
	margin: 10px 20px 0 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	padding: 20px 0;
`

const ProductContainer = styled.div`
	width: 170px;
	height: 180px;
	border: 1px solid #e6e6e6;
	position: relative;
	font-size: 16px;
	text-align: center;

	&:hover section{
		display: flex;
		transition: 0.5s;
	}

	&:hover div{
		transform: scale(0.9);
	}
`

const Product = styled.div`
	background: url(${(props) => props.url});
	background-size: cover;
	background-position: center;
	width: 100%;
	height: 100%;
	cursor: pointer;
	transition: 1s;
`

const ProductBottom = styled.section`
	display: none;
	justify-content: space-around;
	align-items: center;
	position: absolute;
	bottom: 0;
	height: 30px;
	background-color: black;
	color: white;
	width: 100%;
	transition: 1s;
`

const ProductButton = styled.span`
	font-size: 10px;
	cursor: pointer;

	&:hover {
		color: aquamarine;
	}
`

const ProductsTop = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 5px 20px;
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
		border-bottom: 1px solid blue;
	}
`

const ProductsHome = () => {
	return (
		<ProductsSection>
					<Products>
						<ProductsTop>
							<Title style={{fontWeight:"500"}}>
								<ShoppingBasketOutlined /> PRODUTOS EM DESTAQUE
							</Title>
							<ProductsTopMenu>
								<ProductsTopMenuItem>TUDO</ProductsTopMenuItem>
								<ProductsTopMenuItem>CELULAR</ProductsTopMenuItem>
								<ProductsTopMenuItem>COMPUTADOR</ProductsTopMenuItem>
							</ProductsTopMenu>
						</ProductsTop>
						<Hr />
						<ProductList id="products">
							<ProductContainer>
								<Product 
									url="https://files.tecnoblog.net/wp-content/uploads/2021/04/galaxy-a52-produto-2-700x700.png"
								>
								</Product>
								<ProductBottom>
									<ProductButton><AddShoppingCartOutlined /></ProductButton>
									<ProductButton><ZoomInOutlined /></ProductButton>
								</ProductBottom>
							</ProductContainer>
							<ProductContainer>
								<Product url="https://cdn.awsli.com.br/1000x1000/22/22162/produto/34804990/84e138579d.jpg">
								</Product>
								<ProductBottom>
									<ProductButton><AddShoppingCartOutlined /></ProductButton>
									<ProductButton><ZoomInOutlined /></ProductButton>
								</ProductBottom>
							</ProductContainer>
							<ProductContainer>
								<Product url="https://images.kabum.com.br/produtos/fotos/128560/console-microsoft-xbox-series-x-1tb-preto-rrt-00006_1601067024_g.jpg">
								</Product>
								<ProductBottom>
									<ProductButton><AddShoppingCartOutlined /></ProductButton>
									<ProductButton><ZoomInOutlined /></ProductButton>
								</ProductBottom>
							</ProductContainer>
							<ProductContainer>
								<Product url="https://imgs.extra.com.br/55007647/1xg.jpg?imwidth=500">
								</Product>
								<ProductBottom>
									<ProductButton><AddShoppingCartOutlined /></ProductButton>
									<ProductButton><ZoomInOutlined /></ProductButton>
								</ProductBottom>
							</ProductContainer>
							<ProductContainer>
								<Product url="https://images-americanas.b2w.io/produtos/01/00/item/124226/3/124226378_1GG.jpg">
								</Product>
								<ProductBottom>
									<ProductButton><AddShoppingCartOutlined /></ProductButton>
									<ProductButton><ZoomInOutlined /></ProductButton>
								</ProductBottom>
							</ProductContainer>
						</ProductList>
					</Products>
		</ProductsSection>
	)
}

export default ProductsHome