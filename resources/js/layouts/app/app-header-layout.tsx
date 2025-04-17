import { AppContent } from '@/components/app-content';
import { AppFooter } from '@/components/app-footer';
import { AppHeader } from '@/components/app-header';
import { AppShell } from '@/components/app-shell';
import { type BreadcrumbItem } from '@/types';
import type { PropsWithChildren } from 'react';

export default function AppHeaderLayout({
    children,
    breadcrumbs,
}: PropsWithChildren<{
    breadcrumbs?: BreadcrumbItem[];
}>) {
    return (
        <AppShell>
            {/* ✅ AppHeader를 고정 */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black">
                <AppHeader breadcrumbs={breadcrumbs} />
            </div>

            {/* ✅ 고정된 헤더만큼 여백 확보 (예: 56px → pt-14) */}
            <div className="pt-16 pb-16">
                <AppContent>{children}</AppContent>
            </div>

            <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-black">
                <AppFooter />
            </div>
        </AppShell>
    );
}
