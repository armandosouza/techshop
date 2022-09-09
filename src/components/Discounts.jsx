import styled from 'styled-components'
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt'

const Container = styled.div`
	width: 100%;
	margin: 20px 0;
	background-color: #f5f5f5;
	display: flex;
	flex-direction: column;
`

const TitleContainer = styled.div`
	padding-bottom: 10px;
	text-align: center;
	color: darkslategray;
`

const Title = styled.h1`
	font-weight: 500;
	text-transform: uppercase;
`

const Subtitle = styled.h2`
	font-weight: 300;
	text-transform: uppercase;
`

const DiscountContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
`

const Discount = styled.div`
	display: flex;
	justify-content: space-between;
	background: url("https://png.pngtree.com/thumb_back/fh260/background/20210205/pngtree-simple-atmospheric-coupon-discount-promotion-background-image_543552.jpg");
	background-size: cover;
	background-position: center;
	height: 200px;
	width: 31%;
	border-radius: 12px;
	box-shadow: 1px 2px 3px black;
	transition: .3s;

	&:hover {
		box-shadow: 4px 5px 10px black;
	}
`

const DiscountInfo = styled.div`
	flex: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

const DiscountTitle = styled.h4`
	font-weight: 400;
	font-size: 22px;
	margin-top: 0;
	font-style: italic;
`

const DiscountDesc = styled.p`
	font-weight: 500;
	font-size: 16px;
	margin-top: 0;
	font-style: italic;
`

const DiscountButton = styled.span`
	color: blue;
	transition: .5s;
	display: flex;
	align-items: center;
	cursor: pointer;

	&:hover {
		color: purple;
	}
`

const Discounts = () => {
	return (
		<Container>
			<TitleContainer>
				<Title>Promoções</Title>
				<Subtitle>Confira os cupons de promoção abaixo:</Subtitle>
			</TitleContainer>
			<DiscountContainer>
				<Discount>
					<DiscountInfo>
						<DiscountTitle>Oferta limitada</DiscountTitle>
						<DiscountDesc>Economize R$20 no fone Beats</DiscountDesc>
						<DiscountButton>Comprar <ArrowRightAlt/></DiscountButton>
					</DiscountInfo>
				</Discount>
				<Discount>
					<DiscountInfo>
						<DiscountTitle>Só HOJE</DiscountTitle>
						<DiscountDesc>Assista seu futebol em 4K, pagando 5% a menos!</DiscountDesc>
						<DiscountButton>Conferir <ArrowRightAlt/></DiscountButton>
					</DiscountInfo>
				</Discount>
				<Discount>
					<DiscountInfo>
						<DiscountTitle>ASSINATURAS</DiscountTitle>
						<DiscountDesc>Compre assinaturas mensais mais barato aqui</DiscountDesc>
						<DiscountButton>Comprar <ArrowRightAlt/></DiscountButton>
					</DiscountInfo>
				</Discount>
			</DiscountContainer>
		</Container>
		)
}

export default Discounts