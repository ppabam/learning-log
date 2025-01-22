'use client'

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search() {
  const [placeholder, setPlaceholder] = useState("🔍");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    const useRouterReplacePath = `${pathname}?${params.toString()}`;
    replace(useRouterReplacePath);
  }, 300);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // console.log(`window.innerWidth:${width}`);
      if (width >= 768) {
        setPlaceholder("🔍 학습/플리 검색 or 📤 업로드 이미지 이름 입력");
      } else if (width >= 400) {
        setPlaceholder("🔍 순신삽 학습 로그");
      } else if (width >= 350) {
        setPlaceholder("🔍 순신삽 학습 로그");
      } else {
        setPlaceholder("순신삽 학습 로그");
      }
    };

    handleResize(); // 초기 설정
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Input
      placeholder={placeholder}
      className="!placeholder-indigo-400"
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      defaultValue={searchParams.get('query')?.toString()}
    />
  );
}
