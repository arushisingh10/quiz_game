import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import "./Result.css";

/*
  Displays the result page.
*/

const Result = ({ name, score, questions, scoreTable }) => {
  const navigate = useNavigate();

  console.log(scoreTable)
  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  const columns = [
    { field: 'id', headerName: 'Question No.', sortable: false, width: 150 },
    { field: 'question', headerName: 'Question', sortable: false, width: 800 },
    {
      field: 'status',
      headerName: 'Status',
      sortable: false,
      align: "right",
      width: 90,
      renderCell: (params) => {
        if(params.value == "Correct")
          return <DoneIcon style={{color:"green"}}/>;
        else {
          return <ClearIcon style={{color:"red"}}/>;
        }
      }
    }
  ];

  let rows = []
  scoreTable.forEach((score, index) => {
    rows.push({ id: index+1, question: questions[index]?.question, status: score})
  }) 

  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <div>
        Correct : {score} Incorrect : {10-score}
      </div>
      <div className='productList' style={{height: "200px"}}>
        <Box sx={{ height: 500, width: '100%' }}>
          <DataGrid
              rows={rows}
              disableSelectionOnClick
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              disableColumnMenu
              hideFooter={true}
          />
        </Box>
      </div>
      <div>      
        <Button
          variant="contained"
          color="primary"
          style={{marginTop: '10px'}}
          size="large"
          href="/"
        >
          Go to homepage
        </Button>
      </div>
    </div>
  );
};

export default Result;
