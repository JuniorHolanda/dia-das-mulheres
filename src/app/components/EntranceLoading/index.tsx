'use client'
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie-player";
import entraceAnimation from '@/app/animation/outubro-rosa.json'

const Soverlay = styled.main`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #f1a4c4;
`;

export default function EntraceLoad() {
	const [loading, setLoading] = useState(false);
	const animationRef = useRef(null);

	useEffect(() => {
		const hasLoaded = sessionStorage.getItem('catalogLoaded')

		if (!hasLoaded) {
			setLoading(true);
			const timer = setTimeout(() => {
				setLoading(false);
				sessionStorage.setItem('catalogLoaded', 'true');
			}, 6000);
			return () => clearTimeout(timer)
		}
	}, []);


	if (loading) {
		return (
			<Soverlay>
				<Lottie
					ref={animationRef}
					play={true}
					animationData={entraceAnimation}
					loop={true}
					style={{ width: '100vw' }}
					segments={[0, 180]}
				/>
			</Soverlay>
		);
	}
}