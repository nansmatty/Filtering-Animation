import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";
import "./App.css";
import Movie from "./component/Movie";
import Filter from "./component/Filter";
import {
	motion,
	AnimatePresence,
} from "framer-motion";
import { MovieType } from "./movie.type";

const App: React.FC = () => {
	const [popular, setPopular] = useState<
		Array<MovieType>
	>([]);
	const [filtered, setFiltered] = useState<
		Array<MovieType>
	>([]);
	const [activeGenre, setActiveGenre] =
		useState(0);

	useEffect(() => {
		fetchPopular();
	}, []);

	const fetchPopular = async () => {
		const { data } = await axios.get(
			process.env.REACT_APP_MOVIE_API as string
		);

		console.log(data);

		setPopular(data.results);
		setFiltered(data.results);
	};

	return (
		<div>
			<h1>Filtering Animation</h1>
			<Filter
				popular={popular}
				setFiltered={setFiltered}
				activeGenre={activeGenre}
				setActiveGenre={setActiveGenre}
			/>
			<motion.div
				layout
				className='popular-movies'>
				<AnimatePresence>
					{filtered?.map((movie) => (
						<Movie key={movie.id} movie={movie} />
					))}
				</AnimatePresence>
			</motion.div>
		</div>
	);
};

export default App;
