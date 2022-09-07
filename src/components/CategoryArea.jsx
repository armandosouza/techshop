import styled from 'styled-components'

const CategorySection = styled.div`
	display: flex;
	justify-content: center;
	background-color: #f5f5f5;
	margin: 20px 0;
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

const CategoryArea = () => {
	return (
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
	)
}

export default CategoryArea