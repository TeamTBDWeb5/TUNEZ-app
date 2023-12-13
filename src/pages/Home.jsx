import { Notifications } from "../icons"

const Home = () => {
  return (
    <section className="home-page">
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
    </section>
  )
}
export default Home