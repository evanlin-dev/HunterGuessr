import React from 'react';
import './Stats.css';
import { Pie, Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Stats = () => {
  const gamesPlayed = 30;
  const scores = Array.from({ length: gamesPlayed }, () => Math.floor(Math.random() * 100) + 50);
  const totalScore = scores.reduce((acc, score) => acc + score, 0);
  const averageScore = (totalScore / gamesPlayed).toFixed(2);

  const totalGamesPlayedAllUsers = 500;
  const averageScoreAllUsers = 75.5;
  const totalUsers = [10, 12, 15, 17, 20];

  const pieChartData = {
    labels: ['Total Score', 'Games Played', 'Average Score'],
    datasets: [
      {
        label: 'User Statistics',
        data: [totalScore, gamesPlayed, averageScore],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieChartOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#f0f0f0',
        },
      },
      title: {
        display: true,
        text: 'Total Score, Games Played & Average Score',
        color: '#f0f0f0',
      },
    },
  };

  const lineChartData = {
    labels: Array.from({ length: gamesPlayed }, (_, i) => `Game ${i + 1}`),
    datasets: [
      {
        label: 'Score per Game',
        data: scores,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };

  const lineChartOptions = {
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: '#f0f0f0',
        },
        grid: {
          color: '#555555',
        },
      },
      y: {
        min: 0,
        max: 500,
        ticks: {
          color: '#f0f0f0',
          stepSize: 50,
          beginAtZero: true,
        },
        grid: {
          color: '#555555',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#f0f0f0',
        },
      },
      title: {
        display: true,
        text: 'Score Per Game',
        color: '#f0f0f0',
      },
    },
  };

  const averageScoreChartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
    datasets: [
      {
        label: 'Average Score',
        data: [75, 80, 70, 90, averageScoreAllUsers],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const averageScoreChartOptions = {
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: '#f0f0f0',
        },
        grid: {
          color: '#555555',
        },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          color: '#f0f0f0',
          stepSize: 10,
          beginAtZero: true,
        },
        grid: {
          color: '#555555',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#f0f0f0',
        },
      },
      title: {
        display: true,
        text: 'Average Score Over Time',
        color: '#f0f0f0',
      },
    },
  };

  const totalUsersChartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
    datasets: [
      {
        label: 'Total Users',
        data: totalUsers,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const totalUsersChartOptions = {
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: '#f0f0f0',
        },
        grid: {
          color: '#555555',
        },
      },
      y: {
        min: 0,
        max: 25,
        ticks: {
          color: '#f0f0f0',
          stepSize: 5,
          beginAtZero: true,
        },
        grid: {
          color: '#555555',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#f0f0f0',
        },
      },
      title: {
        display: true,
        text: 'Total Users Growth Over Time',
        color: '#f0f0f0',
      },
    },
  };

  return (
    <div className="container">
      <div className="stats-page">
        <div className="stats-wrapper">
          <div className="stats-container">
            <h2>User Statistics</h2>
            <div className="chart-container">
              <Pie data={pieChartData} options={pieChartOptions} />
            </div>
            <div className="chart-container">
              <Line data={lineChartData} options={lineChartOptions} />
            </div>
          </div>

          <div className="summary-container">
            <h2>Overall User Statistics</h2>
            <div className="chart-container">
              <Bar data={averageScoreChartData} options={averageScoreChartOptions} />
            </div>
            <div className="chart-container">
              <Line data={totalUsersChartData} options={totalUsersChartOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
