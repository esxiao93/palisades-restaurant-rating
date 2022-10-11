// import React, { useState } from "react";
// import styled from 'styled-components';
// import { FaStar } from "react-icons/fa";

// const Rating = () => {
// const [rate, setRate] = useState(0);
// return (
// 	<Container>
// 	{[...Array(5)].map((item, index) => {
// 		const givenRating = index + 1;
// 		return (
// 		<label>
// 			<Radio
// 			type="radio"
// 			value={givenRating}
// 			onClick={() => {
// 				setRate(givenRating);
// 			}}
// 			/>
// 			<Rate>
// 			<FaStar
// 				color={
// 				givenRating < rate || givenRating === rate
// 					? "000"
// 					: "rgb(192,192,192)"
// 				}
// 			/>
// 			</Rate>
// 		</label>
// 		);
// 	})}
// 	</Container>
// );
// };

// export default Rating;

// const Container = styled.div`
//    display: flex;
//    justify-content: center;
//    align-items: center;
//    min-height: 20vh;
//    font-size: 30px;
// `
// const Radio = styled.input`
//    display: none;
// `
// const Rate = styled.div`
//    cursor: pointer;
// `