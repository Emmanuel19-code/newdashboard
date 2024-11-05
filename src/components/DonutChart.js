import React from "react";
import ApexCharts from "react-apexcharts";

const DonutChart = () => {
  // The series array contains the values for each segment in the donut chart
  const series = [298, 249, 89]; // Values for Cyan (41%), Orange (33%), Blue (26%)

  const options = {
    chart: {
      type: "donut",
    },
    labels: ["Occupied", "Orange", "Maintenance"], // Labels for each segment
    colors: [ "#1e40af","#00bcd4", "#ff9800"], 
    stroke: {
      width: 0, // No borders between the segments
    },
    dataLabels: {
      enabled: false, // Disable data labels on the segments
    },
    legend: {
      show: false, // Hide the legend
    },
    plotOptions: {
      pie: {
        donut: {
          size: "90%", // Adjust thickness to make sure there is enough space for the text
        },
      },
    },
    annotations: {
      position: "front",
      yaxis: [
        {
          y: 0,
          borderColor: "green",
          label: {
            text: "Total Users", 
            style: {
              color: "red", // Text color
              fontSize: "18px", // Font size
              fontWeight: 600, // Font weight (bold)
            
            },
          },
        },
      ],
    },
  };

  return (
    <div className="donut-chart-container w-44 h-44">
      <ApexCharts options={options} series={series} type="donut" width="100%" height="100%" />
    </div>
  );
};

export default DonutChart;
