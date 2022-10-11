import React from "react";
import { motion } from "framer-motion";
import { MovieType } from "../movie.type";

type props = {
	movie: MovieType;
};

const Movie: React.FC<props> = ({ movie }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			layout>
			<h2>{movie.title}</h2>
			<img
				src={
					"https://image.tmdb.org/t/p/w500" +
					movie.backdrop_path
				}
				alt={movie.title + "image"}
			/>
		</motion.div>
	);
};

export default Movie;
