import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import tokenomicsData from 'src/static/tokenomics-data';

const Chart = dynamic(() => import('src/components/apexcharts'), { ssr: false });

const Tokenomics = props => {
    const { setShowData } = props;

    useEffect(() => {
        const elms = document.querySelectorAll('.apexcharts-legend-series');

        const elmsArr = Array.from(elms);

        elmsArr.map(elm => {
            return elm.addEventListener('mouseenter', () => {
                const seriesname = elm.getAttribute('seriesname').replace(/x/g, ' ');

                const data = tokenomicsData.find(item => item.title.toLowerCase() === seriesname.toLowerCase());

                setShowData(data);
            });
        });
    }, [setShowData]);

    const series = tokenomicsData.map(data => data.percentage);
    const labels = tokenomicsData.map(data => data.title);

    const options = {
        chart: {
            type: 'donut',
            events: {
                dataPointSelection: (_event, _chartContext, config) => {
                    // const data = tokenomicsData.get(config.w.globals.labels[config.dataPointIndex]);
                    const data = tokenomicsData.find(
                        d => d.title.toLowerCase() === config.w.globals.labels[config.dataPointIndex].toLowerCase()
                    );

                    setShowData(data);
                },
                dataPointMouseEnter(_event, _chartContext, config) {
                    // console.log( config.w.globals.labels[config.dataPointIndex] );

                    const data = tokenomicsData.find(
                        d => d.title.toLowerCase() === config.w.globals.labels[config.dataPointIndex].toLowerCase()
                    );

                    setShowData(data);
                },
            },
            // background: '#000'
        },
        legend: {
            position: 'bottom',
        },
        title: {
            text: '',
        },
        stroke: {
            colors: ['#DEDEDE'],
        },
        labels,
        fill: {
            opacity: 0.8,
        },
        colors: ['#23213b', '#3e45bd'],
        tooltip: {
            enabled: true,
            followCursor: false,
            custom({ seriesIndex, w }) {
                return `<div className="p-2" style="background: ${w.globals.colors[seriesIndex]}"><span>${w.globals.labels[seriesIndex]} ${series[seriesIndex]}% </span></div>`;
            },
            fixed: {
                enabled: false,
                position: 'topRight',
                offsetX: 0,
                offsetY: 0,
            },
        },
        responsive: [
            {
                breakpoint: 769,
                options: {
                    chart: {
                        width: 350,
                        height: 350,
                    },
                    legend: {
                        // position: 'bottom'
                    },
                },
            },
        ],
    };
    return <Chart options={options} series={series} type="donut" width="100%" />;
};

export default Tokenomics;
