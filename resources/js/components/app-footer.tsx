import { Breadcrumbs } from '@/components/breadcrumbs';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { usePage, Link } from '@inertiajs/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { UserMenuContent } from '@/components/user-menu-content';
import { useInitials } from '@/hooks/use-initials';
import {
    Home,
    Search,
    Film,
    Send,
} from 'lucide-react';

interface AppFooterProps {
    breadcrumbs?: BreadcrumbItem[];
}

export function AppFooter({ breadcrumbs = [] }: AppFooterProps) {
    const page = usePage<SharedData>();
    const { auth } = page.props;
    const getInitials = useInitials();

    return (
        <>
            <div className="border-sidebar-border/80 border-t fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-neutral-900 md:hidden">
                <div className="mx-auto flex h-14 items-center justify-around px-4 md:max-w-7xl">
                    <Link href="/" className="flex flex-col items-center text-neutral-500 hover:text-black dark:hover:text-white">
                        <Home className="h-6 w-6" />
                    </Link>
                    <Link href="/search" className="flex flex-col items-center text-neutral-500 hover:text-black dark:hover:text-white">
                        <Search className="h-6 w-6" />
                    </Link>
                    <Link href="/movies" className="flex flex-col items-center text-neutral-500 hover:text-black dark:hover:text-white">
                        <Film className="h-6 w-6" />
                    </Link>
                    <Link href="/send" className="flex flex-col items-center text-neutral-500 hover:text-black dark:hover:text-white">
                        <Send className="h-6 w-6" />
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="flex flex-col items-center text-neutral-500 hover:text-black dark:hover:text-white">
                                <Avatar className="h-7 w-7 overflow-hidden rounded-full">
                                    <AvatarImage src={auth.user.avatar} alt={auth.user.name} />
                                    <AvatarFallback className="text-xs bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                                        {getInitials(auth.user.name)}
                                    </AvatarFallback>
                                </Avatar>
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end">
                            <UserMenuContent user={auth.user} />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {breadcrumbs.length > 1 && (
                <div className="border-sidebar-border/70 flex w-full border-b">
                    <div className="mx-auto flex h-12 w-full items-center justify-start px-4 text-neutral-500 md:max-w-7xl">
                        <Breadcrumbs breadcrumbs={breadcrumbs} />
                    </div>
                </div>
            )}
        </>
    );
}
