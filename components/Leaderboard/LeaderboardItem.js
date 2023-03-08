import style from './LeaderboardItem.module.css'

function LeaderboardItem(props) {
    return (
        <tr>
            <td>{props.position}</td>
            <td>{props.name}</td>
            <td>{props.college}</td>
            <td>{props.points}</td>
        </tr>
    )
}

export default LeaderboardItem
