import React, { useState } from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Processed mutation data from your Excel file
const mutationData = [
  {
    gene: "NRAS",
    cancerType: "Melanoma",
    frequency: 6.5,
    significance: "Pathogenic",
    response: "Resistant",
  },
  {
    gene: "PTEN",
    cancerType: "Endometrial Cancer",
    frequency: 4.1,
    significance: "Pathogenic",
    response: "Resistant",
  },
  {
    gene: "PIK3CA",
    cancerType: "Breast Cancer",
    frequency: 11.7,
    significance: "Pathogenic",
    response: "Resistant",
  },
  {
    gene: "ALK",
    cancerType: "Neuroblastoma",
    frequency: 3.2,
    significance: "VUS",
    response: "Unknown",
  },
  {
    gene: "BRAF",
    cancerType: "Melanoma",
    frequency: 9.8,
    significance: "Pathogenic",
    response: "Sensitive",
  },
  {
    gene: "BRCA1",
    cancerType: "Ovarian Cancer",
    frequency: 5.7,
    significance: "Pathogenic",
    response: "Resistant",
  },
  {
    gene: "EGFR",
    cancerType: "Lung Adenocarcinoma",
    frequency: 8.2,
    significance: "Likely Pathogenic",
    response: "Sensitive",
  },
  {
    gene: "IDH1",
    cancerType: "Glioma",
    frequency: 7.9,
    significance: "Pathogenic",
    response: "Sensitive",
  },
  {
    gene: "KRAS",
    cancerType: "Colorectal Cancer",
    frequency: 15.3,
    significance: "Pathogenic",
    response: "Resistant",
  },
  {
    gene: "TP53",
    cancerType: "Breast Cancer",
    frequency: 12.5,
    significance: "Pathogenic",
    response: "Resistant",
  },
];

// Process data for charts
const geneFrequencyData = mutationData.map((item) => ({
  name: item.gene,
  frequency: item.frequency,
  response: item.response === "Sensitive" ? "#A78BFA" : "#F472B6",
}));

const cancerTypeDistribution = mutationData.reduce((acc, item) => {
  const existing = acc.find((i) => i.name === item.cancerType);
  if (existing) {
    existing.value += 1;
  } else {
    acc.push({ name: item.cancerType, value: 1 });
  }
  return acc;
}, []);

const significanceData = mutationData.reduce((acc, item) => {
  const existing = acc.find((i) => i.name === item.significance);
  if (existing) {
    existing.value += 1;
  } else {
    acc.push({ name: item.significance, value: 1 });
  }
  return acc;
}, []);

const responseData = mutationData.reduce((acc, item) => {
  const existing = acc.find((i) => i.name === item.response);
  if (existing) {
    existing.value += 1;
  } else {
    acc.push({ name: item.response, value: 1 });
  }
  return acc;
}, []);

//Cancer Type Distribution
const COLORS = [
  "#0EA5E9",
  "#14B8A6",
  "#2DD4BF",
  "#22D3EE",
  "#8B5CF6",
  "#EC4899",
];

const LandingPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-50">
      {/* Header */}
      <div className="w-full flex justify-between items-center p-4 border-b bg-white shadow-sm z-50">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              RGenX
            </span>
            <span className="text-xs text-gray-500 -mt-1">
              Genomic Analysis Suite
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700">
              10 credits left
            </span>
          </div>

          <div className="hidden md:flex space-x-4 text-sm">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              How to use
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-medium">
              SA
            </div>
            <span className="font-medium text-gray-800 text-sm hidden md:inline">
              Dr. Sharad Aggarwal
            </span>
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar with animation */}
        <div
          className={`bg-gradient-to-b from-slate-800 to-slate-900 text-white p-4 flex flex-col justify-between overflow-y-auto transition-all duration-300 ${
            sidebarOpen ? "w-64" : "w-20"
          }`}
        >
          <div>
            <div
              className={`flex items-center justify-center mb-8 transition-all duration-300 ${
                sidebarOpen ? "h-16" : "h-12 mt-4"
              }`}
            >
              {sidebarOpen ? (
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    RGenX
                  </span>
                  <span className="text-xs text-slate-400 mt-1">
                    Genomic Analysis
                  </span>
                </div>
              ) : (
                <div className="w-8 h-8 rounded-md bg-blue-500 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                </div>
              )}
            </div>

            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`w-full flex items-center space-x-3 py-3 px-4 rounded-lg transition-all duration-200 ${
                  activeTab === "dashboard"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-blue-100 hover:bg-slate-700"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                {sidebarOpen && <span>Dashboard</span>}
              </button>

              <button
                onClick={() => setActiveTab("upload")}
                className={`w-full flex items-center space-x-3 py-3 px-4 rounded-lg transition-all duration-200 ${
                  activeTab === "upload"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-blue-100 hover:bg-slate-700"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                {sidebarOpen && <span>Upload VCF</span>}
              </button>

              <button
                onClick={() => setActiveTab("cases")}
                className={`w-full flex items-center space-x-3 py-3 px-4 rounded-lg transition-all duration-200 ${
                  activeTab === "cases"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-blue-100 hover:bg-slate-700"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                {sidebarOpen && <span>My Cases</span>}
              </button>
            </nav>
          </div>

          <div
            className={`text-xs text-slate-400 text-center pb-4 transition-opacity ${
              sidebarOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            v2.4.1 | © 2024 RGenX
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto p-6 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            {/* Dashboard Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Genomic Analysis Dashboard
                </h1>
                <p className="text-gray-600">
                  The most complex part of genetics, simplified and speeded up
                </p>
              </div>

              <div className="mt-4 md:mt-0 flex space-x-3">
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">
                    Last updated: Today
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Total Mutations
                    </p>
                    <h3 className="text-2xl font-bold text-gray-800 mt-1">
                      100
                    </h3>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-green-600 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  +12% from last month
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Pathogenic Mutations
                    </p>
                    <h3 className="text-2xl font-bold text-gray-800 mt-1">
                      84
                    </h3>
                  </div>
                  <div className="p-3 rounded-lg bg-purple-50 text-purple-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-green-600 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  +8% from last month
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Drug Sensitive
                    </p>
                    <h3 className="text-2xl font-bold text-gray-800 mt-1">
                      32
                    </h3>
                  </div>
                  <div className="p-3 rounded-lg bg-green-50 text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-green-600 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  +15% from last month
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Unique Genes
                    </p>
                    <h3 className="text-2xl font-bold text-gray-800 mt-1">
                      10
                    </h3>
                  </div>
                  <div className="p-3 rounded-lg bg-indigo-50 text-indigo-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-gray-500 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  No change from last month
                </div>
              </div>
            </div>

            {/* Main Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Gene Frequency Bar Chart */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-gray-800">
                    Mutation Frequency by Gene
                  </h3>
                  <div className="flex space-x-2">
                    <button className="p-1 rounded-md hover:bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={geneFrequencyData}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" width={80} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          borderRadius: "0.5rem",
                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                          border: "none",
                        }}
                        formatter={(value) => [`${value}%`, "Frequency"]}
                      />
                      <Legend />
                      <Bar
                        dataKey="frequency"
                        name="Frequency (%)"
                        // fill="#ef4444"
                        radius={[0, 4, 4, 0]}
                      >
                        {geneFrequencyData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={entry.frequency > 10 ? "#ffd900" : "#2855b2"}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Cancer Type Distribution Pie Chart */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-gray-800">
                    Cancer Type Distribution
                  </h3>
                  <div className="flex space-x-2">
                    <button className="p-1 rounded-md hover:bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={cancerTypeDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name}: ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {cancerTypeDistribution.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => [`${value} mutations`, "Count"]}
                        contentStyle={{
                          backgroundColor: "white",
                          borderRadius: "0.5rem",
                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                          border: "none",
                        }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Secondary Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Clinical Significance */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-gray-800">
                    Clinical Significance
                  </h3>
                  <div className="flex space-x-2">
                    <button className="p-1 rounded-md hover:bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={significanceData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          borderRadius: "0.5rem",
                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                          border: "none",
                        }}
                      />
                      <Legend />
                      <Bar
                        dataKey="value"
                        name="Count"
                        fill="#C4B5FD"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Drug Response */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-gray-800">
                    Drug Response
                  </h3>
                  <div className="flex space-x-2">
                    <button className="p-1 rounded-md hover:bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={responseData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={60}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name}: ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {responseData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={
                              entry.name === "Sensitive"
                                ? "#A78BFA"
                                : entry.name === "Resistant"
                                ? "#F472B6"
                                : "#DDD6FE"
                            }
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => [`${value} mutations`, "Count"]}
                        contentStyle={{
                          backgroundColor: "white",
                          borderRadius: "0.5rem",
                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                          border: "none",
                        }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
// //------------------------------1------------------
// import React, { useState } from "react";
// import {
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   Cell,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   ScatterChart,
//   Scatter,
//   ZAxis,
// } from "recharts";
// import Rgenx_logo from "../assets/Rgenx_logo.png";
// import Vgenomics_logo from "../assets/Vgenomics_logo.png";

// // Processed mutation data from your Excel file
// const mutationData = [
//   {
//     gene: "NRAS",
//     cancerType: "Melanoma",
//     frequency: 6.5,
//     significance: "Pathogenic",
//     response: "Resistant",
//   },
//   {
//     gene: "PTEN",
//     cancerType: "Endometrial Cancer",
//     frequency: 4.1,
//     significance: "Pathogenic",
//     response: "Resistant",
//   },
//   {
//     gene: "PIK3CA",
//     cancerType: "Breast Cancer",
//     frequency: 11.7,
//     significance: "Pathogenic",
//     response: "Resistant",
//   },
//   {
//     gene: "ALK",
//     cancerType: "Neuroblastoma",
//     frequency: 3.2,
//     significance: "VUS",
//     response: "Unknown",
//   },
//   {
//     gene: "BRAF",
//     cancerType: "Melanoma",
//     frequency: 9.8,
//     significance: "Pathogenic",
//     response: "Sensitive",
//   },
//   {
//     gene: "BRCA1",
//     cancerType: "Ovarian Cancer",
//     frequency: 5.7,
//     significance: "Pathogenic",
//     response: "Resistant",
//   },
//   {
//     gene: "EGFR",
//     cancerType: "Lung Adenocarcinoma",
//     frequency: 8.2,
//     significance: "Likely Pathogenic",
//     response: "Sensitive",
//   },
//   {
//     gene: "IDH1",
//     cancerType: "Glioma",
//     frequency: 7.9,
//     significance: "Pathogenic",
//     response: "Sensitive",
//   },
//   {
//     gene: "KRAS",
//     cancerType: "Colorectal Cancer",
//     frequency: 15.3,
//     significance: "Pathogenic",
//     response: "Resistant",
//   },
//   {
//     gene: "TP53",
//     cancerType: "Breast Cancer",
//     frequency: 12.5,
//     significance: "Pathogenic",
//     response: "Resistant",
//   },
// ];

// // Process data for charts
// const geneFrequencyData = mutationData.map((item) => ({
//   name: item.gene,
//   frequency: item.frequency,
//   response: item.response === "Sensitive" ? "#14B8A6" : "#EF4444",
// }));

// const cancerTypeDistribution = mutationData.reduce((acc, item) => {
//   const existing = acc.find((i) => i.name === item.cancerType);
//   if (existing) {
//     existing.value += 1;
//   } else {
//     acc.push({ name: item.cancerType, value: 1 });
//   }
//   return acc;
// }, []);

// const significanceData = mutationData.reduce((acc, item) => {
//   const existing = acc.find((i) => i.name === item.significance);
//   if (existing) {
//     existing.value += 1;
//   } else {
//     acc.push({ name: item.significance, value: 1 });
//   }
//   return acc;
// }, []);

// const responseData = mutationData.reduce((acc, item) => {
//   const existing = acc.find((i) => i.name === item.response);
//   if (existing) {
//     existing.value += 1;
//   } else {
//     acc.push({ name: item.response, value: 1 });
//   }
//   return acc;
// }, []);

// const COLORS = [
//   "#0EA5E9",
//   "#14B8A6",
//   "#2DD4BF",
//   "#22D3EE",
//   "#8B5CF6",
//   "#EC4899",
// ];

// const LandingPage = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [activeTab, setActiveTab] = useState("dashboard");

//   return (
//     <div className="flex flex-col h-screen overflow-hidden bg-gray-50">
//       {/* Header */}
//       <div className="w-full flex justify-between items-center p-4 border-b bg-white shadow-sm z-50">
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             className="p-2 rounded-md hover:bg-gray-100 transition-colors"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-gray-600"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </button>
//           <img
//             src={Rgenx_logo}
//             alt="RgenX Logo"
//             className="h-8 transition-all duration-300"
//           />
//         </div>

//         <div className="flex items-center space-x-6">
//           <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full">
//             <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
//             <span className="text-sm font-medium text-blue-700">
//               10 credits left
//             </span>
//           </div>

//           <div className="flex space-x-4 text-sm">
//             <a
//               href="#"
//               className="text-gray-600 hover:text-blue-600 transition-colors"
//             >
//               Privacy Policy
//             </a>
//             <a
//               href="#"
//               className="text-gray-600 hover:text-blue-600 transition-colors"
//             >
//               How to use
//             </a>
//           </div>

//           <div className="flex items-center space-x-2">
//             <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-medium">
//               SA
//             </div>
//             <span className="font-medium text-gray-800 text-sm hidden md:inline">
//               Dr. Sharad Aggarwal
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Content area */}
//       <div className="flex flex-1 overflow-hidden">
//         {/* Sidebar with animation */}
//         <div
//           className={`bg-gradient-to-b from-slate-800 to-slate-900 text-white p-4 flex flex-col justify-between overflow-y-auto transition-all duration-300 ${
//             sidebarOpen ? "w-64" : "w-20"
//           }`}
//         >
//           <div>
//             <div
//               className={`flex items-center justify-center mb-8 transition-all duration-300 ${
//                 sidebarOpen ? "h-16" : "h-12 mt-4"
//               }`}
//             >
//               {sidebarOpen ? (
//                 <img
//                   src={Vgenomics_logo}
//                   alt="Vgenomics Logo"
//                   className="h-10 transition-opacity duration-300"
//                 />
//               ) : (
//                 <div className="w-8 h-8 rounded-md bg-blue-500 flex items-center justify-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-white"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
//                   </svg>
//                 </div>
//               )}
//             </div>

//             <nav className="space-y-2">
//               <button
//                 onClick={() => setActiveTab("dashboard")}
//                 className={`w-full flex items-center space-x-3 py-3 px-4 rounded-lg transition-all duration-200 ${
//                   activeTab === "dashboard"
//                     ? "bg-blue-600 text-white shadow-md"
//                     : "text-blue-100 hover:bg-slate-700"
//                 }`}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
//                 </svg>
//                 {sidebarOpen && <span>Dashboard</span>}
//               </button>

//               <button
//                 onClick={() => setActiveTab("upload")}
//                 className={`w-full flex items-center space-x-3 py-3 px-4 rounded-lg transition-all duration-200 ${
//                   activeTab === "upload"
//                     ? "bg-blue-600 text-white shadow-md"
//                     : "text-blue-100 hover:bg-slate-700"
//                 }`}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 {sidebarOpen && <span>Upload VCF</span>}
//               </button>

//               <button
//                 onClick={() => setActiveTab("cases")}
//                 className={`w-full flex items-center space-x-3 py-3 px-4 rounded-lg transition-all duration-200 ${
//                   activeTab === "cases"
//                     ? "bg-blue-600 text-white shadow-md"
//                     : "text-blue-100 hover:bg-slate-700"
//                 }`}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
//                 </svg>
//                 {sidebarOpen && <span>My Cases</span>}
//               </button>

//               <button
//                 onClick={() => setActiveTab("reports")}
//                 className={`w-full flex items-center space-x-3 py-3 px-4 rounded-lg transition-all duration-200 ${
//                   activeTab === "reports"
//                     ? "bg-blue-600 text-white shadow-md"
//                     : "text-blue-100 hover:bg-slate-700"
//                 }`}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 {sidebarOpen && <span>Reports</span>}
//               </button>
//             </nav>
//           </div>

//           <div
//             className={`text-xs text-slate-400 text-center pb-4 transition-opacity ${
//               sidebarOpen ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             v2.4.1 | © 2024 VGenomics
//           </div>
//         </div>

//         {/* Main content */}
//         <div className="flex-1 overflow-auto p-6 bg-gradient-to-br from-gray-50 to-white">
//           <div className="max-w-7xl mx-auto">
//             {/* Dashboard Header */}
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//               <div>
//                 <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
//                   Genomic Analysis Dashboard
//                 </h1>
//                 <p className="text-gray-600">
//                   The most complex part of genetics, simplified and speeded up
//                 </p>
//               </div>

//               <div className="mt-4 md:mt-0 flex space-x-3">
//                 <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 flex items-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-blue-500 mr-2"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   <span className="text-sm font-medium">
//                     Last updated: Today
//                   </span>
//                 </div>

//                 <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 mr-2"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
//                     <path
//                       fillRule="evenodd"
//                       d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   <span>Export Report</span>
//                 </button>
//               </div>
//             </div>

//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <p className="text-sm font-medium text-gray-500">
//                       Total Mutations
//                     </p>
//                     <h3 className="text-2xl font-bold text-gray-800 mt-1">
//                       100
//                     </h3>
//                   </div>
//                   <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//                 <div className="mt-4 flex items-center text-sm text-green-600 font-medium">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-4 w-4 mr-1"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   +12% from last month
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <p className="text-sm font-medium text-gray-500">
//                       Pathogenic Mutations
//                     </p>
//                     <h3 className="text-2xl font-bold text-gray-800 mt-1">
//                       84
//                     </h3>
//                   </div>
//                   <div className="p-3 rounded-lg bg-red-50 text-red-600">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//                 <div className="mt-4 flex items-center text-sm text-green-600 font-medium">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-4 w-4 mr-1"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   +8% from last month
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <p className="text-sm font-medium text-gray-500">
//                       Drug Sensitive
//                     </p>
//                     <h3 className="text-2xl font-bold text-gray-800 mt-1">
//                       32
//                     </h3>
//                   </div>
//                   <div className="p-3 rounded-lg bg-green-50 text-green-600">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//                 <div className="mt-4 flex items-center text-sm text-green-600 font-medium">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-4 w-4 mr-1"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   +15% from last month
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <p className="text-sm font-medium text-gray-500">
//                       Unique Genes
//                     </p>
//                     <h3 className="text-2xl font-bold text-gray-800 mt-1">
//                       10
//                     </h3>
//                   </div>
//                   <div className="p-3 rounded-lg bg-purple-50 text-purple-600">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//                 <div className="mt-4 flex items-center text-sm text-gray-500 font-medium">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-4 w-4 mr-1"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   No change from last month
//                 </div>
//               </div>
//             </div>

//             {/* Main Charts */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//               {/* Gene Frequency Bar Chart */}
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
//                 <div className="flex justify-between items-center mb-6">
//                   <h3 className="text-lg font-bold text-gray-800">
//                     Mutation Frequency by Gene
//                   </h3>
//                   <div className="flex space-x-2">
//                     <button className="p-1 rounded-md hover:bg-gray-100">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5 text-gray-500"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="h-80">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <BarChart
//                       data={geneFrequencyData}
//                       layout="vertical"
//                       margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//                     >
//                       <XAxis type="number" />
//                       <YAxis dataKey="name" type="category" width={80} />
//                       <Tooltip
//                         contentStyle={{
//                           backgroundColor: "white",
//                           borderRadius: "0.5rem",
//                           boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                           border: "none",
//                         }}
//                         formatter={(value) => [`${value}%`, "Frequency"]}
//                       />
//                       <Legend />
//                       <Bar
//                         dataKey="frequency"
//                         name="Frequency (%)"
//                         fill="#8884d8"
//                         radius={[0, 4, 4, 0]}
//                       >
//                         {geneFrequencyData.map((entry, index) => (
//                           <Cell key={`cell-${index}`} fill={entry.response} />
//                         ))}
//                       </Bar>
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>

//               {/* Cancer Type Distribution Pie Chart */}
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
//                 <div className="flex justify-between items-center mb-6">
//                   <h3 className="text-lg font-bold text-gray-800">
//                     Cancer Type Distribution
//                   </h3>
//                   <div className="flex space-x-2">
//                     <button className="p-1 rounded-md hover:bg-gray-100">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5 text-gray-500"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="h-80">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <PieChart>
//                       <Pie
//                         data={cancerTypeDistribution}
//                         cx="50%"
//                         cy="50%"
//                         labelLine={false}
//                         outerRadius={80}
//                         fill="#8884d8"
//                         dataKey="value"
//                         label={({ name, percent }) =>
//                           `${name}: ${(percent * 100).toFixed(0)}%`
//                         }
//                       >
//                         {cancerTypeDistribution.map((entry, index) => (
//                           <Cell
//                             key={`cell-${index}`}
//                             fill={COLORS[index % COLORS.length]}
//                           />
//                         ))}
//                       </Pie>
//                       <Tooltip
//                         formatter={(value) => [`${value} mutations`, "Count"]}
//                         contentStyle={{
//                           backgroundColor: "white",
//                           borderRadius: "0.5rem",
//                           boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                           border: "none",
//                         }}
//                       />
//                       <Legend />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>
//             </div>

//             {/* Secondary Charts */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               {/* Clinical Significance */}
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
//                 <div className="flex justify-between items-center mb-6">
//                   <h3 className="text-lg font-bold text-gray-800">
//                     Clinical Significance
//                   </h3>
//                   <div className="flex space-x-2">
//                     <button className="p-1 rounded-md hover:bg-gray-100">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5 text-gray-500"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="h-64">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <BarChart data={significanceData}>
//                       <XAxis dataKey="name" />
//                       <YAxis />
//                       <Tooltip
//                         contentStyle={{
//                           backgroundColor: "white",
//                           borderRadius: "0.5rem",
//                           boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                           border: "none",
//                         }}
//                       />
//                       <Legend />
//                       <Bar
//                         dataKey="value"
//                         name="Count"
//                         fill="#82ca9d"
//                         radius={[4, 4, 0, 0]}
//                       />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>

//               {/* Drug Response */}
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
//                 <div className="flex justify-between items-center mb-6">
//                   <h3 className="text-lg font-bold text-gray-800">
//                     Drug Response
//                   </h3>
//                   <div className="flex space-x-2">
//                     <button className="p-1 rounded-md hover:bg-gray-100">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5 text-gray-500"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="h-64">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <PieChart>
//                       <Pie
//                         data={responseData}
//                         cx="50%"
//                         cy="50%"
//                         labelLine={false}
//                         outerRadius={60}
//                         fill="#8884d8"
//                         dataKey="value"
//                         label={({ name, percent }) =>
//                           `${name}: ${(percent * 100).toFixed(0)}%`
//                         }
//                       >
//                         {responseData.map((entry, index) => (
//                           <Cell
//                             key={`cell-${index}`}
//                             fill={COLORS[index % COLORS.length]}
//                           />
//                         ))}
//                       </Pie>
//                       <Tooltip
//                         formatter={(value) => [`${value} mutations`, "Count"]}
//                         contentStyle={{
//                           backgroundColor: "white",
//                           borderRadius: "0.5rem",
//                           boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                           border: "none",
//                         }}
//                       />
//                       <Legend />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
//*------------------3------------------
// import React, { useState } from "react";
// import {
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   Cell,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// // Processed mutation data from your Excel file
// const mutationData = [
//   {
//     gene: "NRAS",
//     cancerType: "Melanoma",
//     frequency: 6.5,
//     significance: "Pathogenic",
//     response: "Resistant",
//   },
//   {
//     gene: "PTEN",
//     cancerType: "Endometrial Cancer",
//     frequency: 4.1,
//     significance: "Pathogenic",
//     response: "Resistant",
//   },
//   {
//     gene: "PIK3CA",
//     cancerType: "Breast Cancer",
//     frequency: 11.7,
//     significance: "Pathogenic",
//     response: "Resistant",
//   },
//   {
//     gene: "ALK",
//     cancerType: "Neuroblastoma",
//     frequency: 3.2,
//     significance: "VUS",
//     response: "Unknown",
//   },
//   {
//     gene: "BRAF",
//     cancerType: "Melanoma",
//     frequency: 9.8,
//     significance: "Pathogenic",
//     response: "Sensitive",
//   },
//   {
//     gene: "BRCA1",
//     cancerType: "Ovarian Cancer",
//     frequency: 5.7,
//     significance: "Pathogenic",
//     response: "Resistant",
//   },
//   {
//     gene: "EGFR",
//     cancerType: "Lung Adenocarcinoma",
//     frequency: 8.2,
//     significance: "Likely Pathogenic",
//     response: "Sensitive",
//   },
//   {
//     gene: "IDH1",
//     cancerType: "Glioma",
//     frequency: 7.9,
//     significance: "Pathogenic",
//     response: "Sensitive",
//   },
//   {
//     gene: "KRAS",
//     cancerType: "Colorectal Cancer",
//     frequency: 15.3,
//     significance: "Pathogenic",
//     response: "Resistant",
//   },
//   {
//     gene: "TP53",
//     cancerType: "Breast Cancer",
//     frequency: 12.5,
//     significance: "Pathogenic",
//     response: "Resistant",
//   },
// ];

// // Process data for charts
// const geneFrequencyData = mutationData.map((item) => ({
//   name: item.gene,
//   frequency: item.frequency,
//   response: item.response === "Sensitive" ? "#14B8A6" : "#EF4444",
// }));

// const cancerTypeDistribution = mutationData.reduce((acc, item) => {
//   const existing = acc.find((i) => i.name === item.cancerType);
//   if (existing) {
//     existing.value += 1;
//   } else {
//     acc.push({ name: item.cancerType, value: 1 });
//   }
//   return acc;
// }, []);

// const significanceData = mutationData.reduce((acc, item) => {
//   const existing = acc.find((i) => i.name === item.significance);
//   if (existing) {
//     existing.value += 1;
//   } else {
//     acc.push({ name: item.significance, value: 1 });
//   }
//   return acc;
// }, []);

// const responseData = mutationData.reduce((acc, item) => {
//   const existing = acc.find((i) => i.name === item.response);
//   if (existing) {
//     existing.value += 1;
//   } else {
//     acc.push({ name: item.response, value: 1 });
//   }
//   return acc;
// }, []);

// const COLORS = [
//   "#0EA5E9",
//   "#14B8A6",
//   "#2DD4BF",
//   "#22D3EE",
//   "#8B5CF6",
//   "#EC4899",
// ];

// const LandingPage = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [activeTab, setActiveTab] = useState("dashboard");

//   return (
//     <div className="flex flex-col h-screen overflow-hidden bg-gray-50">
//       {/* Header */}
//       <div className="w-full flex justify-between items-center p-4 border-b bg-white shadow-sm z-50">
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             className="p-2 rounded-md hover:bg-gray-100 transition-colors"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-gray-600"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </button>
//           <div className="flex flex-col">
//             <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
//               RGenX
//             </span>
//             <span className="text-xs text-gray-500 -mt-1">
//               Genomic Analysis Suite
//             </span>
//           </div>
//           {/* <div className="text-2xl font-bold text-gray-800">
//             Genomic Dashboard
//           </div> */}
//         </div>

//         <div className="flex items-center space-x-6">
//           <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full">
//             <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
//             <span className="text-sm font-medium text-blue-700">
//               10 credits left
//             </span>
//           </div>

//           <div className="hidden md:flex space-x-4 text-sm">
//             <a
//               href="#"
//               className="text-gray-600 hover:text-blue-600 transition-colors"
//             >
//               Privacy Policy
//             </a>
//             <a
//               href="#"
//               className="text-gray-600 hover:text-blue-600 transition-colors"
//             >
//               How to use
//             </a>
//           </div>

//           <div className="flex items-center space-x-2">
//             <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-medium">
//               SA
//             </div>
//             <span className="font-medium text-gray-800 text-sm hidden md:inline">
//               Dr. Sharad Aggarwal
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Content area */}
//       <div className="flex flex-1 overflow-hidden">
//         {/* Sidebar with animation */}
//         <div
//           className={`bg-gradient-to-b from-slate-800 to-slate-900 text-white p-4 flex flex-col justify-between overflow-y-auto transition-all duration-300 ${
//             sidebarOpen ? "w-64" : "w-20"
//           }`}
//         >
//           <div>
//             <div
//               className={`flex items-center justify-center mb-8 transition-all duration-300 ${
//                 sidebarOpen ? "h-16" : "h-12 mt-4"
//               }`}
//             >
//               {!sidebarOpen && (
//                 <div className="w-8 h-8 rounded-md bg-blue-500 flex items-center justify-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-white"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
//                   </svg>
//                 </div>
//               )}
//             </div>

//             <nav className="space-y-2">
//               <button
//                 onClick={() => setActiveTab("dashboard")}
//                 className={`w-full flex items-center space-x-3 py-3 px-4 rounded-lg transition-all duration-200 ${
//                   activeTab === "dashboard"
//                     ? "bg-blue-600 text-white shadow-md"
//                     : "text-blue-100 hover:bg-slate-700"
//                 }`}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
//                 </svg>
//                 {sidebarOpen && <span>Dashboard</span>}
//               </button>

//               <button
//                 onClick={() => setActiveTab("upload")}
//                 className={`w-full flex items-center space-x-3 py-3 px-4 rounded-lg transition-all duration-200 ${
//                   activeTab === "upload"
//                     ? "bg-blue-600 text-white shadow-md"
//                     : "text-blue-100 hover:bg-slate-700"
//                 }`}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 {sidebarOpen && <span>Upload VCF</span>}
//               </button>

//               <button
//                 onClick={() => setActiveTab("cases")}
//                 className={`w-full flex items-center space-x-3 py-3 px-4 rounded-lg transition-all duration-200 ${
//                   activeTab === "cases"
//                     ? "bg-blue-600 text-white shadow-md"
//                     : "text-blue-100 hover:bg-slate-700"
//                 }`}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
//                 </svg>
//                 {sidebarOpen && <span>My Cases</span>}
//               </button>
//             </nav>
//           </div>

//           <div
//             className={`text-xs text-slate-400 text-center pb-4 transition-opacity ${
//               sidebarOpen ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             v2.4.1
//           </div>
//         </div>

//         {/* Main content */}
//         <div className="flex-1 overflow-auto p-6 bg-gradient-to-br from-gray-50 to-white">
//           <div className="max-w-7xl mx-auto">
//             {/* Dashboard Header */}
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//               <div>
//                 <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
//                   Genomic Analysis Dashboard
//                 </h1>
//                 <p className="text-gray-600">
//                   The most complex part of genetics, simplified and speeded up
//                 </p>
//               </div>

//               <div className="mt-4 md:mt-0 flex space-x-3">
//                 <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 flex items-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-blue-500 mr-2"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   <span className="text-sm font-medium">
//                     Last updated: Today
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <p className="text-sm font-medium text-gray-500">
//                       Total Mutations
//                     </p>
//                     <h3 className="text-2xl font-bold text-gray-800 mt-1">
//                       100
//                     </h3>
//                   </div>
//                   <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//                 <div className="mt-4 flex items-center text-sm text-green-600 font-medium">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-4 w-4 mr-1"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   +12% from last month
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <p className="text-sm font-medium text-gray-500">
//                       Pathogenic Mutations
//                     </p>
//                     <h3 className="text-2xl font-bold text-gray-800 mt-1">
//                       84
//                     </h3>
//                   </div>
//                   <div className="p-3 rounded-lg bg-red-50 text-red-600">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//                 <div className="mt-4 flex items-center text-sm text-green-600 font-medium">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-4 w-4 mr-1"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   +8% from last month
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <p className="text-sm font-medium text-gray-500">
//                       Drug Sensitive
//                     </p>
//                     <h3 className="text-2xl font-bold text-gray-800 mt-1">
//                       32
//                     </h3>
//                   </div>
//                   <div className="p-3 rounded-lg bg-green-50 text-green-600">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//                 <div className="mt-4 flex items-center text-sm text-green-600 font-medium">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-4 w-4 mr-1"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   +15% from last month
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <p className="text-sm font-medium text-gray-500">
//                       Unique Genes
//                     </p>
//                     <h3 className="text-2xl font-bold text-gray-800 mt-1">
//                       10
//                     </h3>
//                   </div>
//                   <div className="p-3 rounded-lg bg-purple-50 text-purple-600">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//                 <div className="mt-4 flex items-center text-sm text-gray-500 font-medium">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-4 w-4 mr-1"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   No change from last month
//                 </div>
//               </div>
//             </div>

//             {/* Main Charts */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//               {/* Gene Frequency Bar Chart */}
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
//                 <div className="flex justify-between items-center mb-6">
//                   <h3 className="text-lg font-bold text-gray-800">
//                     Mutation Frequency by Gene
//                   </h3>
//                   <div className="flex space-x-2">
//                     <button className="p-1 rounded-md hover:bg-gray-100">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5 text-gray-500"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="h-80">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <BarChart
//                       data={geneFrequencyData}
//                       layout="vertical"
//                       margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//                     >
//                       <XAxis type="number" />
//                       <YAxis dataKey="name" type="category" width={80} />
//                       <Tooltip
//                         contentStyle={{
//                           backgroundColor: "white",
//                           borderRadius: "0.5rem",
//                           boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                           border: "none",
//                         }}
//                         formatter={(value) => [`${value}%`, "Frequency"]}
//                       />
//                       <Legend />
//                       <Bar
//                         dataKey="frequency"
//                         name="Frequency (%)"
//                         fill="#8884d8"
//                         radius={[0, 4, 4, 0]}
//                       >
//                         {geneFrequencyData.map((entry, index) => (
//                           <Cell key={`cell-${index}`} fill={entry.response} />
//                         ))}
//                       </Bar>
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>

//               {/* Cancer Type Distribution Pie Chart */}
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
//                 <div className="flex justify-between items-center mb-6">
//                   <h3 className="text-lg font-bold text-gray-800">
//                     Cancer Type Distribution
//                   </h3>
//                   <div className="flex space-x-2">
//                     <button className="p-1 rounded-md hover:bg-gray-100">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5 text-gray-500"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="h-80">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <PieChart>
//                       <Pie
//                         data={cancerTypeDistribution}
//                         cx="50%"
//                         cy="50%"
//                         labelLine={false}
//                         outerRadius={80}
//                         fill="#8884d8"
//                         dataKey="value"
//                         label={({ name, percent }) =>
//                           `${name}: ${(percent * 100).toFixed(0)}%`
//                         }
//                       >
//                         {cancerTypeDistribution.map((entry, index) => (
//                           <Cell
//                             key={`cell-${index}`}
//                             fill={COLORS[index % COLORS.length]}
//                           />
//                         ))}
//                       </Pie>
//                       <Tooltip
//                         formatter={(value) => [`${value} mutations`, "Count"]}
//                         contentStyle={{
//                           backgroundColor: "white",
//                           borderRadius: "0.5rem",
//                           boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                           border: "none",
//                         }}
//                       />
//                       <Legend />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>
//             </div>

//             {/* Secondary Charts */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               {/* Clinical Significance */}
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
//                 <div className="flex justify-between items-center mb-6">
//                   <h3 className="text-lg font-bold text-gray-800">
//                     Clinical Significance
//                   </h3>
//                   <div className="flex space-x-2">
//                     <button className="p-1 rounded-md hover:bg-gray-100">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5 text-gray-500"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="h-64">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <BarChart data={significanceData}>
//                       <XAxis dataKey="name" />
//                       <YAxis />
//                       <Tooltip
//                         contentStyle={{
//                           backgroundColor: "white",
//                           borderRadius: "0.5rem",
//                           boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                           border: "none",
//                         }}
//                       />
//                       <Legend />
//                       <Bar
//                         dataKey="value"
//                         name="Count"
//                         fill="#82ca9d"
//                         radius={[4, 4, 0, 0]}
//                       />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>

//               {/* Drug Response */}
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
//                 <div className="flex justify-between items-center mb-6">
//                   <h3 className="text-lg font-bold text-gray-800">
//                     Drug Response
//                   </h3>
//                   <div className="flex space-x-2">
//                     <button className="p-1 rounded-md hover:bg-gray-100">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5 text-gray-500"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="h-64">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <PieChart>
//                       <Pie
//                         data={responseData}
//                         cx="50%"
//                         cy="50%"
//                         labelLine={false}
//                         outerRadius={60}
//                         fill="#8884d8"
//                         dataKey="value"
//                         label={({ name, percent }) =>
//                           `${name}: ${(percent * 100).toFixed(0)}%`
//                         }
//                       >
//                         {responseData.map((entry, index) => (
//                           <Cell
//                             key={`cell-${index}`}
//                             fill={
//                               entry.name === "Sensitive"
//                                 ? "#14B8A6"
//                                 : entry.name === "Resistant"
//                                 ? "#EF4444"
//                                 : "#8B5CF6"
//                             }
//                           />
//                         ))}
//                       </Pie>
//                       <Tooltip
//                         formatter={(value) => [`${value} mutations`, "Count"]}
//                         contentStyle={{
//                           backgroundColor: "white",
//                           borderRadius: "0.5rem",
//                           boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                           border: "none",
//                         }}
//                       />
//                       <Legend />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
