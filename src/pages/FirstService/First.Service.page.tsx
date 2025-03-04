import React from 'react';
import Layout from '../../components/Layout.js';

/**
 * First Service 페이지 컴포넌트
 * vite-plugin-ssr 라우팅 시스템에 맞게 구현된 페이지입니다
 */
const FirstServicePage: React.FC = () => {
  return (
    <Layout title="First Service">
      <div className="first-service-container">
        {/* 페이지 제목 및 내용 */}
        <h1>This is First Service</h1>
        
        {/* 홈으로 돌아가는 링크 */}
        <a href="/" className="back-link">
          <button>Back to Home</button>
        </a>
      </div>
    </Layout>
  );
};

// Export Page component and documentProps as properties of the default export object
export default {
  Page: FirstServicePage,
  documentProps: {
    title: 'First Service',
    description: 'This is the first service page'
  }
}; 