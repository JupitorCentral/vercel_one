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
 * vite-plugin-ssr 라우팅 시스템에 맞게 구현되었습니다
 */
const Home: React.FC = () => {
  // api/hello 엔드포인트에서 데이터를 가져오기 위한 useApi 훅
  const { data: helloData, error: helloError, isLoading: isHelloLoading, fetchData: fetchHelloData } = useApi<HelloResponse>('/api/hello');
  // api/express_test 엔드포인트에서 데이터를 가져오기 위한 useApi 훅
  const { data: expressTestData, error: expressTestError, isLoading: isExpressTestLoading, fetchData: fetchExpressTestData } = useApi<HelloResponse>('/api/express_test');

  return (
    <Layout title="Home Page">
      
      {/* Navigation Section: First Service 페이지로 이동하는 NavLink */}
      <NavLink to="/FirstService/first.service">Go to First Service</NavLink>

      {/* Navigation Section: Client-Only 페이지로 이동하는 NavLink */}
      <NavLink to="/client-only" variant="secondary">Go to Client-Only Page</NavLink>
      
      {/* API Call Section: /api/hello 호출 버튼 */}
      <Button onClick={fetchHelloData} isLoading={isHelloLoading}>
        Call Hello API
      </Button>

      {/* Data Display Section: /api/hello 응답 메시지 표시 */}
      {helloData && <p>Hello API Response: {helloData.message}</p>}

      {/* Error Display Section: /api/hello 에러 메시지 표시 */}
      {helloError && <p className="error-message">Hello API Error: {helloError}</p>}

      {/* API Call Section: /api/express_test 호출 버튼 */}
      <Button onClick={fetchExpressTestData} isLoading={isExpressTestLoading}>
        Call Express Test API
      </Button>

      {/* Data Display Section: /api/express_test 응답 메시지 표시 */}
      {expressTestData && <p>Express Test API Response: {expressTestData.message}</p>}

      {/* Error Display Section: /api/express_test 에러 메시지 표시 */}
      {expressTestError && <p className="error-message">Express Test API Error: {expressTestError}</p>}
    </Layout>
  );
};

// vite-plugin-ssr에서 사용할 메타데이터 정의
export const documentProps = {
  title: 'Home Page',
  description: 'Welcome to our application home page'
};

export default Home; 