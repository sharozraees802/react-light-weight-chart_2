import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';
export const ChartComponent = props => {
	const {
		data,
		data1,
		data2,
		data3,
	} = props;
	const chartContainerRef = useRef();

	useEffect(
		() => {
			const handleResize = () => {
				chart.applyOptions({ width: chartContainerRef.current.clientWidth });
			};

			const chart = createChart(chartContainerRef.current, {
				layout: {
					background: { type: ColorType.Solid },
					
				},
				width: chartContainerRef.current.clientWidth,
				height: 300,
			});
			chart.timeScale().fitContent();

			const newSeries1 = chart.addLineSeries({color: 'rgb(5, 50, 120)'});
			
			let data_test = data.slice(0,-1)
			newSeries1.setData(data_test);


			
			const newSeries4 = chart.addLineSeries({color: 'rgb(10, 42, 65)'});
			newSeries4.setData(data3);

			
			const newSeries3 = chart.addLineSeries({color: 'rgb(240, 52, 52)'});
			newSeries3.setData(data2);

			const newSeries2 = chart.addLineSeries({color: 'rgb(240, 52, 52)'});
			newSeries2.setData(data1);
			
			


			//const newSeries = chart.addCandlestickSeries({ topColor: "green", bottomColor: "yellow" });
			//newSeries.setData(data);
			// newSeries3.setData([{ time: {year: 2022, month: 1, day: 22}, value: 0.531816900940186 },
			// 	{ time: {year: 2022, month: 1,Day:26}, value: 0.350850429478125 },
			// 	{ time: {year: 2022, month: 1,Day:27}, value: 0.05218443850655 },
			// 	{ time: {year: 2022, month: 1,Day:28}, value: 0.41022485894306 }]);
			
			
			


			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);

				chart.remove();
			};
		},
		[data,data1,data2,data3 ]
	);

	return (
		<div
			ref={chartContainerRef}
		/>
	);
};





