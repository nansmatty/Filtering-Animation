import React from "react";
import { useEffect } from "react";
import { MovieType } from "../movie.type";

type props = {
	activeGenre: number;
	setActiveGenre: React.Dispatch<
		React.SetStateAction<number>
	>;
	popular: Array<MovieType>;
	setFiltered: React.Dispatch<
		React.SetStateAction<Array<MovieType>>
	>;
};

const Filter: React.FC<props> = ({
	setActiveGenre,
	activeGenre,
	popular,
	setFiltered,
}) => {
	useEffect(() => {
		if (activeGenre === 0) {
			setFiltered(popular);
			return;
		}

		const filtered = popular.filter((movie) =>
			movie.genre_ids.includes(activeGenre)
		);
		setFiltered(filtered);
	}, [activeGenre]);

	return (
		<div className='filter-container'>
			<button
				className={
					activeGenre === 0 ? "active" : ""
				}
				onClick={() => setActiveGenre(0)}>
				All
			</button>
			<button
				className={
					activeGenre === 35 ? "active" : ""
				}
				onClick={() => setActiveGenre(35)}>
				Comedy
			</button>
			<button
				className={
					activeGenre === 28 ? "active" : ""
				}
				onClick={() => setActiveGenre(28)}>
				Action
			</button>
		</div>
	);
};

export default Filter;
