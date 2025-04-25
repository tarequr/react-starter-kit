import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: '/posts',
    },
];

export default function Posts() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Posts" />

            <div className="container ms-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2x1 font-bold">Blog Posts</h1>

                    <Link
                        href='/posts/create'
                        className='bg-gray-500 text-white px-4 py-1 rounded hover:bg-gray-600'
                    >Create Post</Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto shadow-lg bg-white dark:bg-neutral-800 rounded-lg">
                        <thead>
                            <tr className="bg-neutral-50 dark:bg-neutral-700">
                                <th className="px-4 py-2">ID</th>
                                <th className="px-4 py-2">Title</th>
                                <th className="px-4 py-2">Content</th>
                                <th className="px-4 py-2">Created At</th>
                                <th className="px-4 py-2">Updated At</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">1</td>
                                <td className="border px-4 py-2">Lorem Ipsum</td>
                                <td className="border px-4 py-2">Lorem Ipsum</td>
                                <td className="border px-4 py-2">2022-01-01</td>
                                <td className="border px-4 py-2">2022-01-01</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}

