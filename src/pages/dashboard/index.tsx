import React from "react";
import { DashLayout } from "../../components/dashboard/DashLayout";
import { Hello } from "../../components/dashboard/Hello";
import { useMeQuery } from "../../generated/graphql";
import { DashContentContainer } from "../../styles/styledComponents/dashboard";
import { useRouter } from "next/router";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  const { data, loading } = useMeQuery();
  const router = useRouter();

  if (loading) return <p>loading</p>;

  return (
    <DashLayout>
      <DashContentContainer>
        <Hello name="Crossfit Fysiken"></Hello>
      </DashContentContainer>
    </DashLayout>
  );
};

export default Dashboard;
