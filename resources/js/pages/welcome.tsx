import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';



export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Hello World">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-sm border border-red-300 px-5 py-1.5 text-sm leading-normal text-red-700 hover:border-red-400 hover:bg-red-50 dark:border-red-600 dark:text-red-300 dark:hover:border-red-500 dark:hover:bg-red-900/20"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-red-300 hover:text-red-700 dark:text-[#EDEDEC] dark:hover:border-red-600 dark:hover:text-red-300"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-sm border border-red-300 px-5 py-1.5 text-sm leading-normal text-red-700 hover:border-red-400 hover:bg-red-50 dark:border-red-600 dark:text-red-300 dark:hover:border-red-500 dark:hover:bg-red-900/20"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row">
                        <div className="flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-center shadow-[inset_0px_0px_0px_1px_rgba(239,68,68,0.2)] border border-red-100 lg:rounded-tl-lg lg:rounded-br-none lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_rgba(239,68,68,0.3)] dark:border-red-900/30">
                            <h1 className="mb-4 text-4xl font-bold text-green-600 dark:text-green-400">
                                Hello World!
                            </h1>
                            <p className="mb-8 text-lg text-[#706f6c] dark:text-[#A1A09A]">
                                Welcome to your minimal Hello World application.
                            </p>
                            <div className="rounded-lg bg-red-50 p-6 border border-red-100 dark:bg-red-900/10 dark:border-red-900/30">
                                <p className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                    This is a simple Hello World application built with Laravel and React.
                                </p>
                            </div>
                        </div>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}