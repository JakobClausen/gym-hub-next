import React from "react";
import { DashLayout } from "../components/dashboard/DashLayout";
import { Hello } from "../components/dashboard/Hello";
import { useMeQuery } from "../generated/graphql";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  const { data, loading } = useMeQuery();

  if (loading) return <p>loading</p>;

  return (
    <DashLayout>
      <Hello name="Jakob"></Hello>
    </DashLayout>
  );
};

export default Dashboard;
