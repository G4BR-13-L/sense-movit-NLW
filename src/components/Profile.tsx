import styles from '../styles/components/Profile.module.css';


export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/G4BR-13-L.png" alt="Eu"/>
            <div>
                <strong>Gabriel Victor</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}