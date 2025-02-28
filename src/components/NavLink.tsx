import React from 'react';
import { Link } from 'react-router-dom';
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
 * 재사용 가능한 Button 컴포넌트를 Link와 결합합니다
 */
// NavLink 컴포넌트를 정의합니다.
// React.FC<NavLinkProps>는 함수형 컴포넌트(FC) 타입이며, NavLinkProps 인터페이스를 props로 사용함을 의미합니다.
// ({ to, children, variant = 'primary' })는 props를 구조 분해 할당으로 받습니다.
//  - to: 이동할 경로 (필수)
//  - children: 링크 내부에 표시될 내용 (필수)
//  - variant: 버튼 스타일 ('primary'가 기본값, 선택 사항)
const NavLink: React.FC<NavLinkProps> = ({ to, children, variant = 'primary' }) => {
  return (
    <Link to={to}>
      {/* Button 컴포넌트를 사용하여 링크 스타일링 */}
      <Button variant={variant}>{children}</Button>
    </Link>
  );
};

export default NavLink; 