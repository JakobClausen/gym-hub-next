import Link from "next/link";
import React from "react";
import { DashLayout } from "../../components/dashboard/DashLayout";
import { Hello } from "../../components/dashboard/Hello";
import { Loading } from "../../components/Loading";
import { useMeQuery } from "../../generated/graphql";
import { Button } from "../../styles/styledComponents/buttons";
import { TopBottomSpace } from "../../styles/styledComponents/containers";
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
      <TopBottomSpace>
        <Link as="/timer" href="/timer">
          <a style={{ width: "100%" }}>
            <Button>Go to timer</Button>
          </a>
        </Link>
      </TopBottomSpace>
    </DashLayout>
  );
};

export default Dashboard;
