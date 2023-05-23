import { useRef } from "react";
import { AppContainer, AppImageContainer, AppSubtitle, AppVideo, AppVideoDescription } from "../components/PartnerStyles"
import video from "../assets/video.mp4"
import DentalLogo from '../assets/dentalsante2.png'
import NogueiraLogo from '../assets/nogueira2.png'

const Nogueira = () => {

    const videoRef = useRef(null);
    const urlParams = new URLSearchParams(window.location.search);
    const url = urlParams.get('url');
    console.log(url)

    return (
        <AppContainer onClick={e => {
            e.preventDefault();
            videoRef.current.paused ? videoRef.current.play() : null
        }}>
            <AppImageContainer>
                <img src={DentalLogo} alt="Dental Santé Logo" />
                <img src={NogueiraLogo} alt="Nogueira Imóveis Logo" />

            </AppImageContainer>
            <AppSubtitle>Dental Santé e Nogueira Imóveis juntos transformando sorrisos em felicidades</AppSubtitle>
            <AppVideoDescription>
                <span>Clique em qualquer lugar</span> da tela e assista!
            </AppVideoDescription>
            <AppVideo src={video} autoPlay ref={videoRef} playsInline onEnded={e => {
                window.open(url, '_self');
            }} />
            <AppVideoDescription>
                Assista o vídeo até o <span>FINAL</span> e conquiste seu novo sorriso!
            </AppVideoDescription>
        </AppContainer>
    )
}

export default Nogueira