import Head from 'next/head';

export default function Home() {
    return (
        <div className="">
            <Head>
                <title>Next App ++ Tailwind CSS</title>
                <meta
                    name="description"
                    content="create next app ++ tailwind"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto h-screen">
                <div className="h-full flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-medium tracking-wide">
                        Next App ++ Tailwind CSS ++ Prettier
                    </h1>
                    <h3 className="text-lg">Template</h3>
                </div>
            </main>
        </div>
    );
}
