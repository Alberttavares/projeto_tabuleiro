import styles from "../styles/subdivisao.module.css"

export default function Subdivisao(props){
	return (

		<div 

		style={{
			backgroundColor: props.preta ? "#000" : "000"
		}}		
		className={styles.subdivisao}>

		</div>
	)
}