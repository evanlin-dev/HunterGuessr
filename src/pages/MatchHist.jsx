import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MatchHist.css';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

function createData(name, time, score) {
    return { name, time, score };
}

const columns = [
    {
        field: 'date',
        headerName: 'Date',
        width: 150
    },
    {
        field: 'username',
        headerName: 'User',
        headerAlign: 'center',
        width: 150,
        editable: false,
    },
    {
        field: 'time',
        headerName: 'Time',
        headerAlign: 'center',
        width: 150,
        editable: false,
        //type: 'number',

    },
    {
        field: 'score',
        headerName: 'Score',
        type: 'number',
        width: 110,
        editable: false,
    },
];


// Sample data, DELETE AND ADD LOGIC WHEN DB IS CONNECTED
const rows = [
    { id: 1, date: '11/6/2024', time: '1:00', username: 'James Baxter', score: 50 },
    
];

const MatchHist = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  if (!isLoggedIn) {
    return (
        <div>
            <h2>Match History</h2>
            <div className="data-table">
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    disableSelectionOnClick
                    disableColumnSelector
                    disableCellFocusOutline
                    sx={{
                        backgroundColor: '#f0f0f0', // Header background color
                        color: '#333', // Header text color
                        fontSize: '16px',
                        '& .MuiDataGrid-row': {
                            backgroundColor: '#fff', // Row background color
                            '&:nth-of-type(odd)': {
                                backgroundColor: '#f9f9f9', // Alternate row color
                            },
                        },
                        '& .MuiDataGrid-selectedRowCount': {
                            color: '#f0f0f0', // Footer row count text color
                        },
                        '& .MuiTablePagination-root': {
                            backgroundColor: '#f0f0f0', // Header background color
                            color: '#333', // Header text color
                        },
                        '& .MuiDataGrid-cell:hover': {
                            backgroundColor: '#fff', // Row background color
                            '&:nth-of-type(odd)': {
                                backgroundColor: 'inherit',
                            },
                        },
                    }}
                />
            </div>
            <button type="main-page-button" onClick={() => navigate('/')}>Back to Main Page</button>
        </div>
    );
  }

  return (
    <div>
      <h2>Match History</h2>
      <div className="data-table">
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableSelectionOnClick
          disableColumnSelector
          disableCellFocusOutline
          sx={{
            backgroundColor: '#f0f0f0', // Header background color
            color: '#333', // Header text color
            fontSize: '16px',
            '& .MuiDataGrid-row': {
              backgroundColor: '#fff', // Row background color
              '&:nth-of-type(odd)': {
                backgroundColor: '#f9f9f9', // Alternate row color
              },
            },
            '& .MuiDataGrid-selectedRowCount': {
              color: '#f0f0f0', // Footer row count text color
            },
            '& .MuiTablePagination-root': {
              backgroundColor: '#f0f0f0', // Header background color
              color: '#333', // Header text color
            },
            '& .MuiDataGrid-cell:hover': {
              backgroundColor: '#fff', // Row background color
              '&:nth-of-type(odd)': {
                backgroundColor: 'inherit',
              },
            },
          }}
        />
      </div>
      <button type="main-page-button" onClick={() => navigate('/')}>Back to Main Page</button>
    </div>
  );
};

export default MatchHist;
