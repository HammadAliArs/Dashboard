import React from "react";
import Chart from "chart.js";

export default function CardLineChart() {
  React.useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "rgba(76, 81, 191, 0.2)", // Light blue fill
            borderColor: "#4c51bf", // Blue border
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: true,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: true,
            backgroundColor: "rgba(220, 53, 69, 0.2)", // Light red fill
            borderColor: "#dc3545", // Red border
            data: [40, 68, 86, 74, 56, 60, 87],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
        },
        legend: {
          labels: {
            fontColor: "#4a5568", // Dark gray for legend
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "#6b7280", // Gray for labels
              },
              display: true,
              scaleLabel: {
                display: false,
              },
              gridLines: {
                display: false,
                color: "rgba(156, 163, 175, 0.2)", // Subtle grid lines
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "#6b7280", // Gray for labels
              },
              display: true,
              scaleLabel: {
                display: false,
              },
              gridLines: {
                color: "rgba(156, 163, 175, 0.2)", // Subtle grid lines
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3 bg-gray-100">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-gray-600 mb-1 text-xs font-semibold">
                Overview
              </h6>
              <h2 className="text-gray-800 text-xl font-semibold">Sales value</h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
