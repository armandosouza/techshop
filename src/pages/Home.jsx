import Topbar from  '../components/Topbar'
import Navbar from '../components/Navbar'
import MainHome from '../components/MainHome'

import styled from 'styled-components'

const Home = () => {
	return (
		<>
			<Topbar />
			<Navbar page="home"/>
			<MainHome />
		</>
		)
}

export default Home