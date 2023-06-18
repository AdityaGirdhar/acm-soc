
const Board = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    console.log(curUser);
                    const {'700':id, 'Person 1':name} = curUser;

                    return (
                        <tr key={id}>
                            <td style={{ paddingLeft: "40px" }} >{id}</td>
                            <td style={{ paddingLeft: "50px" }}>{name}</td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default Board;