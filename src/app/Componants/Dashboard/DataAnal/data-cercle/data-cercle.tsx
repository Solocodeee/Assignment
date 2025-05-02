"use client";

import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const ApexChart = () => {
  const [state] = useState<{
    series: number[];
    options: ApexOptions;
  }>({
    series: [50, 30, 20],
    options: {
      chart: {
        type: "donut",
        width: "100%", // جعل العرض مرنًا ليشغل 100% من المساحة المتاحة
      },
      labels: ["Sale", "Distribute", "Return"],
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%", // يأخذ كامل العرض في الشاشات الصغيرة
            },
            legend: {
              position: "bottom", // يظهر في الأسفل عند الشاشات الصغيرة
              horizontalAlign: "center",
              offsetY: 10,
              show: true,
            },
          },
        },
        {
          breakpoint: 768,
          options: {
            chart: {
              width: "80%", // تحديد العرض على شاشات التابلت
            },
            legend: {
              position: "bottom",
              horizontalAlign: "center",
              offsetY: 10,
              show: true,
            },
          },
        },
        {
          breakpoint: 1024,
          options: {
            chart: {
              width: "70%", // تحديد العرض على الشاشات الأكبر
            },
            legend: {
              position: "bottom",
              horizontalAlign: "center",
              offsetY: 10,
              show: true,
            },
          },
        },
      ],
      legend: {
        position: "bottom", // جعلها في الأسفل
        horizontalAlign: "center", // جعلها أفقية
        offsetY: 10, // تحديد المسافة
        show: true, // التأكد من أن الأسطورة تظهر
      },
    },
  });

  return (
    <div className="bg-white py-20  flex justify-center items-center">
    <div className="w-full max-w-[447px] h-auto bg-white">
      <div className="chart-wrap">
        <div id="chart">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="donut"
            width="100%"
          />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default ApexChart;
