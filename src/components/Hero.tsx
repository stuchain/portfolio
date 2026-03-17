import { profile } from "../data/profile";
import { social } from "../data/social";
import PixelButton from "./ui/PixelButton";
import BlinkingCursor from "./ui/BlinkingCursor";

export default function Hero() {
  return (
    <div className="hero-block">
      <h1 className="hero-name">{profile.name}</h1>
      <p className="hero-tagline">
        {profile.tagline}
        {profile.taglineLine2 && (
          <>
            <br />
            {profile.taglineLine2}
          </>
        )}
        <BlinkingCursor />
      </p>
      <div className="hero-ctas">
        <PixelButton href="#projects">View Projects</PixelButton>
        <PixelButton href={social.github}>GitHub</PixelButton>
        <PixelButton href="#contact" variant="secondary">
          Contact
        </PixelButton>
      </div>
    </div>
  );
}
