
const Board = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    console.log(curUser);
                    const {'700':id, 'Person 1':name} = curUser;

                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default Board;