import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Post',
        href: '/posts/create',
    },
];


export default function CreatePost() {

    const { data, setData, post, processing, errors } = useForm({
        title: '',
        content: '',
    });

    // const submit: FormEventHandler = (e) => {
    //     e.preventDefault();

    //     post(route('posts.store'));
    // };
    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route('posts.store'), {
            data,
            onSuccess: () => {
                setData({
                    title: '',
                    content: '',
                });
            },
            onError: (errors) => {
                console.error(errors);
                // Assuming you have a state variable to handle error messages
                setErrors(errors);
            },
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Post" />

            <div className="container ms-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2x1 font-bold">Create Post</h1>

                    <Link
                        href='/posts'
                        className='bg-gray-500 text-white px-4 py-1 rounded hover:bg-gray-600'
                    >Back to Posts</Link>
                </div>
                <form onSubmit={submit} method="POST">
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input type="text" name="title" id="title"
                        value={data.title} onChange={(e) => setData('title', e.currentTarget.value)} required className="mt-1 px-2 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder='Enter Title'/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                        <textarea name="content" id="content" value={data.content} onChange={(e) => setData('content', e.currentTarget.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 px-2 py-2" placeholder='Enter Content' rows={4}></textarea>
                    </div>
                    <button type="submit" className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        { processing ? 'Creating...' : 'Create Post' }
                    </button>
                </form>
            </div>
        </AppLayout>
    );
}
