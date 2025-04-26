import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: '/posts',
    },
];

export default function Posts({ posts }) {
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
                                <th className="px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { posts.map((post, index) => (
                                <tr key={post.id} className="border-b dark:border-neutral-700">
                                    <td className="px-4 py-2 text-center">{index+1}</td>
                                    <td className="px-4 py-2 text-center">{post.title}</td>
                                    <td className="px-4 py-2 text-center">{post.content}</td>
                                    <td className="px-4 py-2 text-center">{post.created_at}</td>
                                    <td className="px-4 py-2 text-center">
                                        <Link
                                            href={`/posts/${post.id}/edit`}
                                            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                                        >Edit</Link>

                                        <Link
                                            href={`/posts/${post.id}`}
                                            method="delete"
                                            as="button"
                                            onClick={(e) => {
                                                if (!confirm('Are you sure you want to delete this post?')) {
                                                   e.preventDefault();
                                                }
                                            }}
                                            className="bg-red-500 text-white ml-2 px-4 py-1 rounded hover:bg-red-600 cursor-pointer"
                                        >Delete</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}

