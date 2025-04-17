import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

// pc 버전
import AppSidebarLayout from '@/layouts/app/app-sidebar-layout';

// 모바일 버전
import AppHeaderLayout from '@/layouts/app/app-header-layout';

// ✅ 모바일 확인용 Hook
import { useIsMobile } from '@/hooks/use-mobile';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => {
    const isMobile = useIsMobile(); // ✅ 모바일 여부 감지

    const Layout = isMobile ? AppHeaderLayout : AppSidebarLayout;

    return (
        <Layout breadcrumbs={breadcrumbs} {...props}>
            {children}
        </Layout>
    );
};
