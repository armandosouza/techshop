import styled from 'styled-components'
import ChevronLeft from '@mui/icons-material/ChevronLeft'
import ChevronRight from '@mui/icons-material/ChevronRight'
import {useState} from 'react'

const TopSection = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`

const BannerContainer = styled.div`
	height: inherit;
	border-radius: 9px;
	opacity: 0.7;
	background-color: white;
	width: 100%;
	overflow: hidden;
`

const Banner = styled.div`
	min-width: 100vw;
	padding: 30px 0;
	height: inherit;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background: url("${(props) => props.bg}") no-repeat;
	background-position: center;
	background-size: cover;
	position: relative;
`

const Banners = styled.div`
	display: flex;
	width: 100%;
	transform: translateX(${(props) => props.slider * -100}vw);
	transition: all 1.5s ease;
`

const BannerTitle = styled.h2`
	font-size: 40px;
	font-weight: 500;
	margin-bottom: 5px;
	color: ${(props) => props.color ? props.color : "black"};
`

const BannerDesc = styled.p`
	text-align: center;
	font-size: 24px;
	font-weight: 300;
	font-style: italic;
	color: ${(props) => props.color ? props.color : "black"};
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
	left: ${(props) => props.position === 'left' && '20'}px;
	right: ${(props) => props.position === 'right' && '20'}px;
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

const Slider = () => {
	const [slider, setSlider] = useState(0)

	const handleSlider = (direction) => {
		if (direction === "left") {
			slider > 0 ? setSlider(slider - 1) : setSlider(2)
		} else {
			slider < 2 ? setSlider(slider + 1) : setSlider(0)
		}
	}

	return (
		<TopSection>
			<BannerContainer>
				<Banners slider={slider}>
					<Banner bg="https://as01.epimg.net/meristation/imagenes/2020/07/02/betech/1593684423_686673_1593684643_noticia_normal.jpg">
						<BannerArrow position="left" onClick={() => handleSlider("left")}>
							<ChevronLeft />
						</BannerArrow>
						<BannerTitle>PROMOÇÃO TECH PRIME</BannerTitle>
						<BannerDesc>10% DE DESCONTO EM TODOS OS COMPUTADORES</BannerDesc>
						<BannerButton>Conferir</BannerButton>
						<BannerArrow position="right" onClick={() => handleSlider("right")}>
							<ChevronRight />
						</BannerArrow>
					</Banner>
					<Banner bg="https://www.lg.com/br/images/aparelho-de-som/md07515370/gallery/D_03.jpg">
						<BannerArrow position="left" onClick={() => handleSlider("left")}>
							<ChevronLeft />
						</BannerArrow>
						<BannerTitle color="white">PROMOÇÃO TECH AUDIO</BannerTitle>
						<BannerDesc color="white">10% DE DESCONTO EM TODOS OS APARELHOS DE SOM</BannerDesc>
						<BannerButton >Conferir</BannerButton>
						<BannerArrow position="right" onClick={() => handleSlider("right")}>
							<ChevronRight />
						</BannerArrow>
					</Banner>
				</Banners>
			</BannerContainer>
		</TopSection>
		)
}

export default Slider