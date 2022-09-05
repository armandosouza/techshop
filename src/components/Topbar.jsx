import styled from 'styled-components'
import ArrowDropDown from '@mui/icons-material/ArrowDropDown'
import PhoneOutlined from '@mui/icons-material/PhoneOutlined'

const Container = styled.div`
	width: 100%;
	background-color: #f5f5f5;
`

const Wrapper = styled.div`
	width: 80%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	font-size: 14px;
	color: gray;
`

const Item = styled.div`
	display: flex;
	align-items: center;
	margin: 0 15px;
	cursor: pointer;
`

const Right = styled.div`
	display: flex;
	align-items: center;
`

const Left = styled.div`
	display: flex;
	align-items: center;
`

const Topbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<PhoneOutlined style={{fontSize: "17px"}} /> (21) 3333-3333
				</Left>
				<Right>
					<Item>BRL <ArrowDropDown /></Item>
					<Item>PT <ArrowDropDown /></Item>
					<Item>Login/Registro</Item>
				</Right>
			</Wrapper>
		</Container>
		)
}

export default Topbar