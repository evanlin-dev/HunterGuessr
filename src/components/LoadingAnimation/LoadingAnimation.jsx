// Loads the loading animation for the website  
import { Player } from '@lottiefiles/react-lottie-player';

export default function LoadingAnimation() {
    return (
        (<div className="loading-container">
      <Player
        autoplay
        loop
        src="https://lottie.host/9fdff87f-6566-48e2-a64c-aa783f4e7421/bp9t9s0hat.json" // Your Lottie oEmbed URL
        style={{ height: "500px", width: "500px" }} // Adjust the size as needed
      />
      <style jsx>{`
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh; // Full viewport height
          width: 100vw; // Full viewport width
        }
      `}</style>
    </div>
        )
    );
    }