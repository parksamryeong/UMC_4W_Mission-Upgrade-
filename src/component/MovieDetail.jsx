import { useLocation, useParams } from "react-router-dom"


export default function MovieDetail() {
    const { title } = useParams();
    const { state } = useLocation();

    const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

    const backgroundStyle = {
        backgroundImage: `url(${IMG_BASE_URL + state.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'

    };

    return (
        <div className="backdrop-container" style={backgroundStyle}>
            <div className="page-container">
                <div className="content-container" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                    <div style={{ display: 'flex', padding: "250px", paddingTop: "50px" }}>
                        <img
                            style={{ width: "300px", height: "450px" }}
                            src={IMG_BASE_URL + state.poster_path} alt="영화포스터이미지" />
                        <div style={{ padding: "50px" }}>
                            <div style={{ fontSize: "30px", color: "white", padding: "10px", paddingLeft: "0px", border: '0px' }}>{title}</div>
                            <div style={{ fontSize: "20px", color: "white", padding: "20px", paddingLeft: "0px" }}>평점{state.vote_average}</div>
                            <div style={{ fontSize: "20px", color: "white", padding: "20px", paddingLeft: "0px" }}>개봉일{state.release_date}</div>
                            <div style={{ fontSize: "20px", color: "white", padding: "20px", paddingLeft: "0px" }}>줄거리</div>
                            {state.overview ? (
                                <div style={{ fontSize: "20px", color: "white", padding: "20px", paddingLeft: "0px" }}>{state.overview}</div>
                            ) : (
                                <div style={{ fontSize: "20px", color: "white", padding: "20px", paddingLeft: "0px" }}>줄거리가 없습니다.</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}