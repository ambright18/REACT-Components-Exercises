import styles from '../Button/Button.module.css'
const Button = () => {
    return (
        <button className={styles.button}>Click Me!</button>
    );
}

export default Button;

// STYLING REACT C0MPONENTES WITH CSS

// 1. EXTERNAL - Good for glonal styles or small projects
// 2. MODULE - Best sutied for individual components
// 3. INLINE  - Good for small components with minimal styling