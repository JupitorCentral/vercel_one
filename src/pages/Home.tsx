import React from 'react';
import Layout from '../components/Layout.js';
import NavLink from '../components/NavLink.js';
import Button from '../components/Button.js';
import useApi from '../hooks/useApi.js';

/**
 * API 응답 메시지의 형식을 정의하는 인터페이스
 * @property {string} message - API에서 반환되는 메시지 텍스트
 */
interface HelloResponse {
  message: string;
}

/**
 * 홈 페이지 컴포넌트
 * 재사용 가능한 컴포넌트들을 활용하여 구성됩니다
 */
const Home: React.FC = () => {
  const { data, error, isLoading, fetchData } = useApi<HelloResponse>('/api/hello');

  return (
    <Layout title="Home Page">
      <NavLink to="/first-service">Go to First Service</NavLink>
      <Button onClick={fetchData} isLoading={isLoading}>
        Call API
      </Button>
      {data && <p>{data.message}</p>}
      {error && <p className="error-message">{error}</p>}
    </Layout>
  );
};

export default Home; 