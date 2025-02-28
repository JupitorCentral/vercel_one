import React, { ReactNode } from 'react';

/**
 * 레이아웃 컴포넌트의 속성을 정의하는 인터페이스
 * @property {ReactNode} children - 레이아웃 내부에 렌더링될 자식 요소
 * @property {string} title - 페이지 제목 (선택 사항)
 */
interface LayoutProps {
  children: ReactNode;
  title?: string;
}

/**
 * 애플리케이션의 공통 레이아웃 컴포넌트
 * 헤더, 메인 콘텐츠 영역, 푸터를 일관되게 구성합니다
 */
const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="page-container">
      {/* 페이지 제목 (선택 사항) */}
      {title && <h1 className="page-title">{title}</h1>}

      {/* 메인 콘텐츠 영역 */}
      <main className="page-content">
        {children}
      </main>

      {/* 공통 푸터 내용 */}
      <footer className="page-footer">
        {/* 공통 푸터 내용 */}
      </footer>
    </div>
  );
};

export default Layout; 