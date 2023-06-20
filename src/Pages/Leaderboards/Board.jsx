import coin from "../../Assets/coin-large.png";

const Board = ({ users }) => {
  return (
    <>
      <thead>
          <tr className={'sm:text-[24px] text-[16px] text-start'}>
            <td className="drop-shadow-md">Rank</td>
            <td className="drop-shadow-md">Username</td>
            <td className="drop-shadow-md">Coins</td>
          </tr>
      </thead>
        <tbody className={'text-start '}>
      {users.map((curUser, index) => {
        console.log(curUser);
        const { 'Name': id, 'Score': score } = curUser;

        return (
            <>
              <tr className={'sm:text-[20px] text-[14px]'} key={index}>
                <td className={''}>{parseInt(index, 10)+1}</td>
                <td className={''}>{id}</td>
                <td className={'flex'}>
                  {Array.from({ length: parseInt(score, 10) }, (_, i) => (
                    <div className={''}>
                      <img
                        className={'sm:h-[30px] sm:w-[30px] h-[15px] w-[13px]'}
                        src={coin}
                        key={i}
                        alt={'coin'}/>
                    </div>
                  ))}
                </td>
              </tr>
            </>
        );
      })}
        </tbody>
    </>
  );
};

export default Board;
