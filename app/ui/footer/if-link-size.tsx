'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function IfLinkSize() {
    const pathname = usePathname();

    // currentPath가 '/'가 아니면 '/''로 설정
    const validHref = pathname === "/" ? "/123" : "/";
    return (
        <p className="text-sm text-gray-600 mt-3 text-center">
          <Link href={validHref} className="text-blue-500 hover:underline">
            <span className="hidden lg:block">
              &copy; 순십샵 학습 기록장 by 빠밤
            </span>
            <span className="hidden sm:block lg:hidden">
              &copy; 순십샵 학습 기록장 by 빠밤
            </span>
            <span className="sm:hidden">
              &copy; 순십샵 학습 기록장 by 빠밤
            </span>
          </Link>
        </p>
    );
}