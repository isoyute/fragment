import React, { useState } from 'react';
import { Text, Card, Button } from '@geist-ui/react';
import { Link as OutLink } from '@geist-ui/react';
import styles from '../../styles/Home.module.scss';
import {
	merge,
	fadeIn,
	slideInLeft,
	slideInRight,
	zoomIn,
} from 'react-animations';
import styled, { keyframes } from 'styled-components';
import ParticlesBg from 'particles-bg';
import axios from 'axios';

const fadeLeft = merge(slideInLeft, fadeIn);
const fadeRight = merge(slideInRight, fadeIn);
const fadeUp = merge(zoomIn, fadeIn);
const SlideInLeft = styled.div`
	animation: 2s ${keyframes`${fadeLeft}`};
`;
const SlideInRight = styled.div`
	animation: 2s ${keyframes`${fadeRight}`};
`;
const SlideInUp = styled.div`
	animation: 2s ${keyframes`${fadeUp}`};
`;

const Home = () => {
	const [isButtonLoading, setIsButtonLoading] = useState(false);
	const [repos, setRepos] = useState([]);

	return (
		<>
			<ParticlesBg
				type='cobweb'
				bg={{ position: 'absolute', zIndex: 0, top: 0, left: 0 }}
			></ParticlesBg>
			<div className={styles.home}>
				<SlideInLeft>
					<Text h1 className={styles.logo}>
						Welcome to
					</Text>
				</SlideInLeft>
				<SlideInRight>
					<Text h1 size={80} className={styles.logo}>
						<i>fragment</i>
					</Text>
				</SlideInRight>
				<SlideInUp>
					<GetGitHub repos={repos} setRepos={setRepos} />
					<OutLink
						color
						href={`${process.env.REACT_APP_SERVER_URL}/auth/github/login`}
						onClick={() => setIsButtonLoading(true)}
					>
						<Button loading={isButtonLoading} type='success' size='large'>
							Login/Signup with GitHub
						</Button>
					</OutLink>
				</SlideInUp>
			</div>
		</>
	);
};

const GetGitHub = ({ repos, setRepos }) => {
	if (repos.length === 0) {
		axios
			.get(`https://api.github.com/repos/isoyute/fragment`)
			.then(response => response)
			.then(data => {
				setRepos(data.data);
			})
			.catch(error => {
				console.log(error);
			});
	}
	return (
		<>
			<Card type='secondary' shadow className={styles.githubcards}>
				{/* <Text h2>{repos.name}</Text> */}
				<Text h3>Description</Text>
				<Text h4>{repos.description}</Text>
				<Text h3>Language</Text>
				<Text h4>{repos.language}</Text>
			</Card>
		</>
	);
};

export default Home;
