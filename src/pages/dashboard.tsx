import { DashLayout } from "../components/DashLayout";
import { useMeQuery } from "../generated/graphql";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  const { data, loading } = useMeQuery();

  if (loading) return <p>loading</p>;

  return <DashLayout firstName={data?.me.firstName!}></DashLayout>;
};

export default Dashboard;
