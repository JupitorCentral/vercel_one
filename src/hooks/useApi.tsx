import { useState } from 'react';

/**
 * API 응답 처리를 위한 인터페이스
 * @template T - API 응답 데이터의 타입
 * @property {T | null} data - API에서 반환된 데이터 또는 null
 * @property {string | null} error - 오류 메시지 또는 null
 * @property {boolean} isLoading - API 호출 진행 중 여부
 * @property {Function} fetchData - API 데이터를 가져오는 함수
 */
interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
  fetchData: () => Promise<void>;
}

/**
 * API 요청을 처리하는 커스텀 훅
 * 로딩 상태, 오류 처리, 데이터 가져오기를 관리합니다
 * @template T - 반환될 데이터의 타입
 * @param {string} url - 요청할 API 엔드포인트 URL
 * @returns {ApiResponse<T>} - API 응답 데이터와 상태
 */
function useApi<T>(url: string): ApiResponse<T> {
  // API 응답 상태를 관리하는 state 변수들
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // API 데이터를 가져오는 비동기 함수
  const fetchData = async () => {
    // 로딩 상태를 true로 설정하고, 에러 상태를 초기화
    setIsLoading(true);
    setError(null);

    try {
      // API 호출 및 응답 처리
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      // 에러 처리: 에러 로깅 및 에러 상태 업데이트
      console.error("API error:", err);
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      // 로딩 상태를 false로 설정 (API 호출 완료)
      setIsLoading(false);
    }
  };

  // API 응답 상태와 fetchData 함수를 반환
  return { data, error, isLoading, fetchData };
}

export default useApi; 