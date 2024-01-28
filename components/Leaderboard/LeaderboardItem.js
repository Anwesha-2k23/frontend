import styles from './LeaderboardItem.module.css'

function LeaderboardItem(props) {
    const backgroundColor = props.position % 2 === 0 ? '#3E339A' : '#51295E';
    return (
        <tr className={styles.item} style={{ backgroundColor: backgroundColor, borderColor: backgroundColor }}>
            <td style={{ color: '#fff', fontWeight: 400 }}>{props.position}</td>
            <td style={{ color: '#fff', fontWeight: 400 }}>{props.name}</td>
            <td style={{ color: '#fff', fontWeight: 400 }}>{props.college}</td>
            <td style={{ color: '#fff', fontWeight: 400 }}>{props.points}</td>
        </tr>
    )
}

export default LeaderboardItem
