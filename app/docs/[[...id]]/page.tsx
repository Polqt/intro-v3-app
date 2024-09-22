import styles from './styles.module.css';

const DocsPage = ( {params} ) => {
    console.log(params)
    return <div className={`${styles.title} ${styles.another}`}>id</div>
}

export default DocsPage