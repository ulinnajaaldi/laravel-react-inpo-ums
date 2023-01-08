import React from "react";

export default function Card({ news }) {
    const isNews = (news) => {
        return news.map((data, index) => {
            return (
                <div className="" key={index}>
                    <div className="flex gap-4 border shadow-md p-4 rounded-xl">
                        <div className="btn-disabled w-10 h-10 rounded-full flex items-center justify-center bg-accent-focus text-white mt-1">
                            {(
                                data.author.split("@")[0].charAt(0) +
                                data.author
                                    .split("@")[0]
                                    .charAt(
                                        data.author.split("@")[0].length - 1
                                    )
                            ).toUpperCase()}
                        </div>
                        <div className="flex flex-col w-[800px] ">
                            <div className="flex gap-2 items-center">
                                <h2 className="font-bold text-lg">
                                    {data.title}
                                </h2>
                                <p className="font-extralight text-sm">
                                    {data.author}
                                </p>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div>{data.description}</div>
                                <div className="card-actions justify-start">
                                    <div className="badge badge-outline text-xs">
                                        {data.category}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex items-start justify-center gap-2">
                        <div className="card w-full bg-base-100 shadow-xl border">
                            <div className="card-body">
                                <h2 className="card-title">{data.title}</h2>
                                <p>{data.description}</p>
                                <p>{data.author}</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">
                                        {data.category}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            );
        });
    };

    return !news && news.lenght === 0 ? <p>Data Kosong</p> : isNews(news);
}
