import styles from '../Card/Card.module.css'
import profilePic from '../assets/profile.jpg'
function Card(){
    
        return (
            <div className={styles.card}>
                 <img className="card-image" src= {profilePic} alt= "profile-picture"></img>
                 <h2 className="card-title">Alex Bright</h2>
                 <p className="card-text">I am a recent graduate from Pellissippi State Community
                    college. I like video games and movies.
                 </p>
            </div>
        );
    
}

export default Card;