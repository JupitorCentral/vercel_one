import React from 'react';
import Button from './Button.js';

/**
 * 네비게이션 링크 컴포넌트의 속성을 정의하는 인터페이스
 * @property {string} to - 이동할 경로
 * @property {React.ReactNode} children - 링크 텍스트 또는 내부 요소
 * @property {string} variant - 버튼 스타일 변형(primary, secondary, outline)
 */
interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

/**
 * 버튼 스타일의 네비게이션 링크 컴포넌트
 * 재사용 가능한 Button 컴포넌트를 일반 a 태그와 결합합니다
 * vite-plugin-ssr에 맞게 React Router 대신 일반 HTML 앵커 태그를 사용합니다
 */
const NavLink: React.FC<NavLinkProps> = ({ to, children, variant = 'primary' }) => {
  return (
    <a href={to} className="nav-link">
      {/* Button 컴포넌트를 사용하여 링크 스타일링 */}
      <Button variant={variant}>{children}</Button>
    </a>
  );
};

export default NavLink; 