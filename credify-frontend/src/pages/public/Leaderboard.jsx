import LeaderboardTable from '../../components/leaderboard/LeaderboardTable';

const Leaderboard = () => {
  const users = []; // fetch users
  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      <LeaderboardTable users={users} />
    </div>
  );
};

export default Leaderboard;