import React from "react";

export default function Card({ news }) {
    const isNews = (news) => {
        return news.map((data, index) => {
            return (
                <div
                    className="card w-full md:w-96 bg-base-100 shadow-xl"
                    key={index}
                >
                    <figure>
                        <img
                            src="https://placeimg.com/400/225/arch"
                            alt="Shoes"
                        />
                    </figure>
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
            );
        });
    };

    return !news && news.lenght === 0 ? <p>Data Kosong</p> : isNews(news);
}
