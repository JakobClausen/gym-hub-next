import React from "react";
import { useMeQuery } from "../generated/graphql";
import { PrimaryContainer } from "../styles/styledComponents/containers";
import { H2 } from "../styles/styledComponents/titles";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  const { data, error } = useMeQuery();

  return (
    <PrimaryContainer>
      {data && <H2>{`Welcome ${data?.me.firstName}`}</H2>}
    </PrimaryContainer>
  );
};

export default Dashboard;
