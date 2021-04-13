import React from 'react';
import { Link } from 'starfall';

const BasicUsage: React.FC = () => {
  return (
    <>
      <Link type="button">按钮类型链接</Link>
      <Link type="button" active>
        按钮类型链激活状态
      </Link>
    </>
  );
};
export default BasicUsage;
