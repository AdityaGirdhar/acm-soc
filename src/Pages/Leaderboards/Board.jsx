import coin from "../../Assets/coins.png";

const Board = ({ users }) => {
  return (
    <>
      {users.map((curUser, index) => {
        console.log(curUser);
        const { 'Name': id, 'Score': score } = curUser;

        return (
          <tr className={'text-[50px]'} key={index}>
            <td className={' px-[40px]'}>{parseInt(index, 10)+1}</td>
            <td className={'text-xl px-[40px]'}>{id}</td>
            <td className={'text-xl px-[50px] flex'}>
              {Array.from({ length: parseInt(score, 10) }, (_, i) => (
                <div className={'px-[5px] py-[5px]'}>
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
