import styles from "./Body.module.css"
export default function Body(){
    return(<div className={styles.container}>
        <div className={styles.card}>
        <div className={styles.pic}>
            <img src="https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg" alt="" style={{width:"100%",height:"100%"}}/> 
        </div>

        <p>asdajksd</p>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <i className="fa-solid fa-heart" style={{color:"#757575"}}></i>
        <i class="fa-solid fa-comment"  style={{color:"#757575"}}></i>
        </div>
        </div>

    </div>)
}