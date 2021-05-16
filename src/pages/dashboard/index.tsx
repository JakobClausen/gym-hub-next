import React from "react";
import { DashLayout } from "../../components/dashboard/DashLayout";
import { Hello } from "../../components/dashboard/Hello";
import { Loading } from "../../components/Loading";
import { useMeQuery } from "../../generated/graphql";
import { DashContentContainer } from "../../styles/styledComponents/dashboard";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  const { data, loading } = useMeQuery();

  if (loading) return <Loading />;

  return (
    <DashLayout>
      <DashContentContainer>
        <Hello name="Crossfit Fysiken"></Hello>
      </DashContentContainer>
    </DashLayout>
  );
};

export default Dashboard;
