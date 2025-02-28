import React, { ButtonHTMLAttributes } from 'react';

/**
 * 버튼 컴포넌트의 속성을 정의하는 인터페이스
 * HTML 버튼 요소의 모든 속성을 상속받고 추가 속성을 정의합니다
 * @property {string} variant - 버튼의 시각적 스타일 변형(primary, secondary, outline)
 * @property {boolean} isLoading - 버튼의 로딩 상태 표시 여부
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
}

/**
 * 재사용 가능한 버튼 컴포넌트
 * 다양한 상태(로딩, 비활성화)와 스타일 변형을 지원합니다
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  isLoading = false,
  disabled,
  ...props
}) => {
  // 여기에 스타일링 로직을 추가할 수 있습니다
  return (
    <button 
      disabled={isLoading || disabled} 
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button; 