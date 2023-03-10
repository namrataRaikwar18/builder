import { Card } from "antd";
import styled from "styled-components";

export const CourseCard = styled(Card)`
  border-radius: 10px;
  .ant-card-body {
    // padding: 10px !important;
    display: flex;
    flex-wrap:wrap;
    width:100px;
    height:280px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .bg-primary {
    border-radius: 0px 30px 30px 0px;
  }
`;

export const ArticleCard = styled(Card)`
  border-radius: 10px;
  .ant-card-body {
    padding: 0;
    display: flex;
    height:300px;
    justify-content: space-between;
    flex-direction: column;

  }
  .bg-primary {
    border-radius: 0px 30px 30px 0px;
  }
`;
