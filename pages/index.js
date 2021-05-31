import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import Tweet from '../components/tweet';

export default function Home() {
    const [content, setContent] = useState('');
    const [thread_content, setThreadContent] = useState([]);
    const inputRef = useRef(null);
    const tweetLength = 280;

    useEffect(() => {
        inputRef.current.focus();
    }, [inputRef]);

    useEffect(() => {
        let content_arr = [];
        let num_chars = content.length;
        // console.log(num_chars);
        if (num_chars < tweetLength) {
            content_arr.push(content);
            setThreadContent(content_arr);
        } else {
            let index = 0;
            while (index < num_chars) {
                content_arr.push(content.slice(index, index + tweetLength));
                index += tweetLength;
                console.log(index);
            }
            setThreadContent(content_arr);
        }
        // console.log(content_arr);
    }, [content]);

    let tweets = [];

    for (let i = 0; i < thread_content.length; i++) {
        tweets.push(
            <Tweet
                content={thread_content[i]}
                key={i}
                name="Twitter name"
                handle="twitter-handle"
            />
        );
    }

    return (
        <div className="h-screen flex flex-col">
            <Head>
                <title>Next App ++ Tailwind CSS</title>
                <meta
                    name="description"
                    content="create next app ++ tailwind"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex border-b justify-between p-2 items-center">
                <span className="font-bold tracking-wider">Twitter Thread</span>
                <div className="">
                    <button className="flex items-center border rounded-full p-2 border-blue-500 hover:bg-blue-500 focus:outline-none hover:text-white">
                        <span>Login to Twitter</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <main className="h-full flex flex-row">
                <div className="w-full p-8 bg-gray-100">
                    <textarea
                        className="w-full h-full focus:outline-none resize-none shadow-md rounded p-4"
                        ref={inputRef}
                        name="textbox"
                        id="textbox"
                        placeholder="Start typing ... "
                        onChange={e => setContent(e.target.value)}
                    ></textarea>
                </div>

                <div className="w-full p-8 border-l overflow-y-auto bg-gray-100">
                    {tweets}
                </div>
            </main>
        </div>
    );
}
