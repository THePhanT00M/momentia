import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: '홈',
        href: '/',
    },
];

export default function Main() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="홈" />
        </AppLayout>
    );
}
