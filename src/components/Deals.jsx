import styled from 'styled-components'
import Shop2Rounded from '@mui/icons-material/Shop2Rounded'
import {Pagination} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css/bundle'

const Container = styled.div`
	width: 100%;
	background-color: #e8ffff;
	padding: 20px 0;
`

const Wrapper = styled.div`
	width: 80%;
	height: 250px;
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
`

const Title = styled.h2`
	font-size: 34px;
	color: darkslategray;
	text-align: center;
	font-weight: 400;
	margin-top: 0;
`

const DealSidebar = styled.div`
	width: 200px;
	background: url(${(props) => props.url});
	height: 100%;
	background-size: cover;
	background-position: center;
	transition: 0.5s;

	&:hover {
		color: white;
		text-align: center;
		opacity: 0.8;
	}
`

const Deal = styled.div`
	height: inherit;
	text-align: center;
`

const DealImg = styled.img`
	height: 70%;
	width: 100%;
	object-fit: cover;
	transition: .5s;

	&:hover {
		transform: scale(0.9);
		box-shadow: 0px 1px 3px black;
	}
`

const DealProduct = styled.h5`
	font-size: 16px;
	margin-top: 3px;
	margin-bottom: 0;
`

const DealPrice = styled.span`
	font-size: 14px;
`

const Deals = () => {
	return (
		<Container>
			<Title><Shop2Rounded/> Produtos Recomendados</Title>
			<Wrapper>
				<DealSidebar url="https://i.pinimg.com/736x/2b/8c/e1/2b8ce10d41465277bbda70b487e26a7e.jpg">
					
				</DealSidebar>
					<Swiper 
						modules={[Pagination]}
						spaceBetween={20}
						slidesPerView={4}
						pagination={{clickable: true}}
						style={{height: "100%", width: "800px"}}
					>
						<SwiperSlide>
							<Deal>
								<DealImg src="https://images.samsung.com/is/image/samsung/p6pim/br/qn50q60aagxzd/gallery/br-qled-q60a-qn50q60aagxzd-435212818?$650_519_PNG$"/>
								<DealProduct>Samsung QLED 4K 55"</DealProduct>
								<DealPrice>R$ 2198,99</DealPrice>
							</Deal>
						</SwiperSlide>
						<SwiperSlide>
							<Deal>
								<DealImg src="https://images.kabum.com.br/produtos/fotos/128199/placa-de-video-gigabyte-nvidia-geforce-rtx-3090-gaming-oc-24g-gddr6x-gv-n3090gaming-oc-24gd_1600342847_g.jpg"/>
								<DealProduct>Placa de Vídeo GeForce RTX 3090</DealProduct>
								<DealPrice>R$ 1217,30</DealPrice>
							</Deal>
						</SwiperSlide>

						<SwiperSlide>
							<Deal>
								<DealImg src="https://www.fastshop.com.br/wcsstore/FastShopCAS/imagens/_DG_Digitais/HGCHDHX901PTO/HGCHDHX901PTO_PRD_447_5.jpg"/>
								<DealProduct>GoPro Hero 9</DealProduct>
								<DealPrice>R$ 728,00</DealPrice>
							</Deal>
						</SwiperSlide>

						<SwiperSlide>
							<Deal>
								<DealImg src="https://images.kabum.com.br/produtos/fotos/156276/echo-dot-amazon-alexa-com-relogio-4-geracao-azul_1621338234_g.jpg"/>
								<DealProduct>Alexa Echo Dot 4ª Gen.</DealProduct>
								<DealPrice>R$ 474,00</DealPrice>
							</Deal>
						</SwiperSlide>

						<SwiperSlide>
							<Deal>
								<DealImg src="https://elastobor.vteximg.com.br/arquivos/ids/229007/C%EF%BF%BDMERA-DE-SEGURAN%EF%BF%BDA-INTELBRAS-FULL-HD-INTERNA-WI-FI.jpg?v=637662642748230000"/>
								<DealProduct>Câmera de Segurança WiFi Intelbras</DealProduct>
								<DealPrice>R$ 321,00</DealPrice>
							</Deal>
						</SwiperSlide>

						<SwiperSlide>
							<Deal>
								<DealImg src="https://http2.mlstatic.com/D_NQ_NP_849435-MLB42901020327_072020-O.jpg"/>
								<DealProduct>Lâmpada LED WiFi Música</DealProduct>
								<DealPrice>R$ 89,00</DealPrice>
							</Deal>
						</SwiperSlide>
					</Swiper>
			</Wrapper>
		</Container>
		)
}

export default Deals