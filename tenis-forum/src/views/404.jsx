import { useNavigate } from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className="image">
                    <img className="rounded-lg" src="https://i.imgur.com/dBR6coT.jpg" />
                </div>
                <div className="flex flex-col">
                    <div className="info">
                        <h3 className="text-6xl font-extrabold text-center mb-20">Ace of 404s</h3>
                        <p className="text-2xl">{"You just aced our 404 page! Unfortunately, it's not the kind of ace we were hoping for. Double-fault your way back to the home page to continue the match"}.</p>
                    </div>
                    <div className="mt-3">
                        <button onClick={() => navigate('/')} className="btn btn-primary">Go back</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NotFound;