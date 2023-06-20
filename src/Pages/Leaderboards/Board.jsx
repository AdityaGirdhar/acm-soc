import coin from "../../Assets/coin-large.png";

const Board = ({ users }) => {
  return (
    <>
      {users.map((curUser, index) => {
        console.log(curUser);
        const { 'Name': id, 'Score': score } = curUser;

        return (
          <tr className={'text-xl'} key={index}>
            <td className={'text-xl px-[50px]'}>{parseInt(index, 10)+1}</td>
            <td className={'text-xl px-[60px]'}>{id}</td>
            <td className={'text-xl px-[50px] flex'}>
              {Array.from({ length: parseInt(score, 10) }, (_, i) => (
                <div className={'px-[10px] py-[7px]'}>
                  <img
                    src={coin}
                    key={i}
                    style={{ display: "inline-block", marginRight: "5px" }}
                    alt={'coin'}/>
                </div>
              ))}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default Board;
