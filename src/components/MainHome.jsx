import styled from 'styled-components'
import Slider from './Slider'
import CategoryArea from './CategoryArea'
import ProductsHome from './ProductsHome'
import Discounts from './Discounts'
import Deals from './Deals'
import Newsletter from './Newsletter'
import Footer from './Footer'

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

const MainHome = () => {
	return (
		<Container>
			<Slider />
			<Wrapper>
				<CategoryArea/>
				<ProductsHome/>
				<Discounts />
			</Wrapper>
			<Deals />
			<Newsletter />
			<Footer />
		</Container>
		)
}

export default MainHome