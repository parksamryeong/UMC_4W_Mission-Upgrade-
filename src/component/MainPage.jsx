import styled from 'styled-components';
import { useState } from 'react';
import axios from "axios";

const SearchInfo = styled.div`
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    margin: 0;
`;


const MainContainer = styled.div`
    text-align: center;
`;

const Title = styled.h1`
    font-size: 50px;
    color: white;
`;

const SearchContainer = styled.div`
    text-align: center;
    padding: 30px;
`;

const SearchInput = styled.input`
    width: 600px;
    height: 40px;
    border-radius: 50px;
`;

const SearchButton = styled.button`
    width: 80px;
    height: 50px;
    border-radius: 50px;
`;

const MovieList = styled.div`
    display: ${({ visible }) => (visible ? 'grid' : 'none')};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
    overflow-y: auto;
    max-height: 500px;
    
`;

const MovieItem = styled.div`
    text-align: center;
    background-color: #192F60;
`;


export default function Main() {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=0a368eaeec11c63d37d2cd0ef86203f8`
            );
            setMovies(response.data.results);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    const handleSearch = () => {
        fetchData();
    };

    return (
        <MainContainer>
            <h2 style={{ backgroundColor: 'black', color: 'white', padding: '120px', margin: 0, fontWeight: 'bold' }}>Welcome!</h2>
            <Title>Find your movie!</Title>
            <SearchContainer>
                <SearchInput
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <SearchButton onClick={handleSearch}>🔍</SearchButton>
                <MovieList>
                    {movies.map((movie) => (
                        <MovieItem key={movie.id}>
                            <img src={IMG_BASE_URL + movie.poster_path} alt={movie.title} style={{ width: '100%' }} />
                            <SearchInfo>
                                <h3>{movie.title}</h3>
                                <p>⭐️{movie.vote_average.toFixed(1)}</p>
                            </SearchInfo>
                        </MovieItem>
                    ))}
                </MovieList>
            </SearchContainer>
        </MainContainer>
    );
}