import React, { useEffect, useState } from 'react'
import Graph_4 from './Graph_4'
import { GraphSummary } from '@/@core/types/graph.type';

const SEO_Here_Graph = () => {
    const [graphSummary, setGraphSummary] = useState<GraphSummary>({
        totalKeywords: 0,
        totalSearchVolume: 0,
        changes: 0,
    });
    const formatNumber = (value: number) => {
        if (value >= 1_000_000_000) {
            return `${(value / 1_000_000_000).toFixed(1).replace(".0", "")}B`;
        }

        if (value >= 1_000_000) {
            return `${(value / 1_000_000).toFixed(1).replace(".0", "")}M`;
        }

        if (value >= 1_000) {
            return `${(value / 1_000).toFixed(1).replace(".0", "")}K`;
        }

        return value.toString();
    };
    const rankingCardsData = [
        {
            title: "Google Rankings",
            value: graphSummary.totalKeywords,
            isChange: false,
        },
        // {
        //     title: "Google Change",
        //     value: Math.abs(graphSummary.changes),
        //     isChange: true,
        // },
        {
            title: "Google Change",
            value: 375,
            isChange: true,
        },
        {
            title: "Search Volume",
            value: formatNumber(graphSummary.totalSearchVolume),
            isChange: false,
        },
    ];
    const isPositive = true
    return (
        <div className="bg-[#FDFDFD] w-full rounded-[20px]">


            <div className="flex items-center justify-end mb-4 bg-white">
                <Graph_4 onSummaryChange={setGraphSummary} />            </div>

            {/* CARDS */}
            {/* <div className="flex gap-4 ">
                {rankingCardsData.map((card: any, index: number) => {
                    return (
                        <div
                            key={index}
                            className={`rounded-[10px] border border-[#000000]/10 hover:border-[#000000] bg-white md:py-3 md:px-5 w-full transition-all duration-500`}
                        >
                            <p className={`text-[9px] w-fit mx-auto md:text-[14px] font-medium mb-1 md:mb-2`}>
                                {card?.title}
                            </p>
                            <h3
                                className={`flex w-fit mx-auto gap-1.5 text-[18px] md:text-[22px] lg:text-[26px] xl:text-[30px] font-semibold ${card.isChange
                                    ? isPositive
                                        ? "text-[#58A555]"
                                        : "text-[#D50000]"
                                    : "text-black"
                                    }`}
                            >
                                {card.isChange && (
                                    <span className="text-[14px] lg:text-[18px]">
                                        {isPositive ? "▲" : "▼"}
                                    </span>
                                )}
                                {card.value}
                            </h3>
                        </div>
                    );
                })}
            </div> */}
        </div>
    )
}

export default SEO_Here_Graph