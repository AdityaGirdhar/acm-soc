import coin from "../../Assets/coinS.png";

const Board = ({ users }) => {
  return (
    <>
      {users.map((curUser, index) => {
        console.log(curUser);
        const { 'Name': id, 'Score': score } = curUser;

        return (
          <tr key={index}>
            <td style={{ paddingLeft: "40px" }}>{parseInt(index, 10)+1}</td>
            <td style={{ paddingLeft: "40px" }}>{id}</td>
            <td style={{ paddingLeft: "50px" }}>
              {Array.from({ length: parseInt(score, 10) }, (_, i) => (
                <img
                  src={coin}
                  key={i}
                  style={{ display: "inline-block", marginRight: "5px" }}
                />
              ))}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default Board;
