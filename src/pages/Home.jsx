import Carousel from "../components/MusicCarousel"
import PopularArtistCarousel from "../components/PopularArtistCarousel"
import { Notifications } from "../icons"

const Home = () => {
  return (
    <section className="home-page">
      {/* User Details section */}
        <article className="user-details-section">
            <div className="avatar"></div>
            <div className="user-details">
                <h2>Hi Tiana</h2>
                <p>What will like to hear today?</p>
            </div>
            <div className="notification-icon">
              <Notifications/>
            </div>
        </article>
        {/* Recently played music section */}
        <section className="recent-music-section">
          <h3>Recently listened</h3>
          <div className="carousel">
            <Carousel/>
          </div>
        </section>
        {/* Recentl played music section */}
        <section className="recent-music-section">
          <h3>Popular Artists </h3>
          <div className="carousel">
            <PopularArtistCarousel/>
          </div>
        </section>
        {/* Recentl played music section */}
        <section className="recent-music-section">
          <h3>Suggested Songs</h3>
          <div className="carousel">
            <Carousel/>
          </div>
        </section>
    </section>
  )
}
export default Home