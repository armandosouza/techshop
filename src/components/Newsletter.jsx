import styled from 'styled-components'
import Send from '@mui/icons-material/Send'

const Container = styled.section`
	width: 100%;
	height: 50vh;
	display: flex;
	justify-content: center;
	background: url("https://adrenaline.com.br/uploads/chamadas/Samsung_GameDriver_vai_permitir_atualizar_os_drivers_das_GPUs_dos_smartphones.jpg");
	background-size: cover;
	background-position: center;
	opacity: 0.8;
`

const Wrapper = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
`

const Title = styled.h2`
	font-size: 30px;
	color: whitesmoke;
	text-align: center;
	font-weight: 500;
	margin-top: 0;
	text-shadow: 1px 1px 3px black;
`

const InputContainer = styled.form`
	width: 50%;
	margin: 0 auto;
	border-radius: 20px;
	background-color: white;
	position: relative;
	height: 40px;
	color: gray;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 15px;
	border: 1px solid gray;

	button {
		background-color: aquamarine;
	}

	button:hover {
		background-color: #d0d5f7;
	}
`

const Input = styled.input`
	font-family: 'Dosis', sans-serif;
	font-size: 16px;
	width: 85%;
	border-radius: 20px;
	border: none;
	height: 80%;
	text-align: center;

	&:focus {
		outline: none;
	}
`

const SendButton = styled.button`
	width: 14%;
`

const Newsletter = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Receba notícias de descontos, vouchers, cupons e promoções</Title>
				<InputContainer>
					<Input placeholder="Seu email..." type="email"/>
					<SendButton type="submit" style={{border: "none", transition: ".5s", cursor: "pointer", height:"100%", padding: "0 20px", borderRadius: "0 20px 20px 0", }}><Send/></SendButton>
				</InputContainer>
			</Wrapper>
		</Container>
		)
}

export default Newsletter