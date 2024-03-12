import { Box, CircularProgress, Container, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Custom_Input_Field } from '../components/Custom_Input_Field'
import { database } from '../config/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { onValue, ref } from 'firebase/database';
import { set_user_auth } from '../store/slices/user_auth_slice';
import { useNavigate } from 'react-router-dom';
// import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';






const Dashboard = () => {
  const [data, setUsersData] = useState([])
  const [data1, setdata1] = useState([])

  const dispstch = useDispatch()
  const navigate = useNavigate()
  const userId = useSelector((state) => state.user_auth.user_id)
  // const data = useSelector((state) => state.user_auth.user_data)
  // console.log(userId);
  useEffect(() => {
    if (userId !== null && !data.length) getUserData()
    if (userId !== null && !data1.length) Donate_data()

  }
    , [])

  const getUserData = async () => {
    try {
      let dbRef = await ref(database, `users/${userId}`);
      onValue(dbRef, (snapshot) => {
        let data = snapshot.val();
        // console.log("DATA: ", data);
        if (!data) return;
        else {
          setUsersData({ ...data });
          dispstch(
            set_user_auth({ auth: true, ...userId, data, user_data: data })
          );
        }
      });
    } catch (err) {
      console.error(`Error fetching user data: ${err}`);
    }
  };

  const Donate_data = (e) => {
    // event.preventDefault();
    const data_ref = ref(database, "donater/")
    onValue(data_ref, (snapshot) => {
      const data1 = snapshot.val()

      const array = Object.values(data1)
      setdata1(array)
    })
  }
  const clickHandle = () => {
    navigate("/donate")
  }

  // console.log(data);


  return (
    <div>
      <div style={{ fontFamily: "sans-serif" }} className="bg-red-600 h-[80dvh]  flex justify-evenly">

        {data ? <div className="max-w-md w-[100%] h-[60dvh] space-y-5 bg-white py-5 px-4 rounded mt-16 ">
          <Paper>

            <Typography
              variant="h5"
              className="max-w w-[100%] space-y-5 bg-white py-5 px-4 rounded flex justify-center capitalize">
              Name : {data.Name}
            </Typography>
          </Paper>
          <Typography variant='h6' className='capitalize'>
            Father Name : {data.FatherName}
          </Typography>
          <Typography variant='h6' >
            Age : {data.age}
          </Typography>
          <Typography variant='h6' className='capitalize'>
            Gander : {data.Gander}
          </Typography>
          <Typography variant='h6' className='capitalize'>
            Email : {data.email}
          </Typography>
          <Typography variant='h6' className='capitalize'>
            Blood Group : {data.BloodGroup}
          </Typography>
          <Typography variant='h6'>
            CNIC Number : {data.CNIC}
          </Typography>
        </div> :
          <CircularProgress color='info' />
        }



      </div>

      <div>
        <div>
          {/* {data1.map((item, index) => {

            return (
              <div key={index}>
                <h1>Data:{item}</h1>
                <h1>name:{item.Name}</h1>
              </div>
            )
          })} */}
        </div>
        <div>

          <Container>
            <Paper  className='capitalize' sx={{ overflow: 'hidden', mt: 6 }}>
              <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                  <TableBody>

                    <TableRow >
                      {data1.map((item, index) => {

                        return (
                          <TableHead key={index}>
                            <TableRow>

                              <TableCell style={{borderRight:"1px solid gray"}} >
                                Name <br />
                                {item.Name}
                              </TableCell>
                              <TableCell style={{borderRight:"1px solid gray"}}>
                                Father_Name <br /> {item.FatherName}
                              </TableCell>
                              <TableCell style={{borderRight:"1px solid gray"}} >
                                Gender <br /> {item.Gander}
                              </TableCell>
                              <TableCell style={{borderRight:"1px solid gray"}} >
                                Address
                                <br />  {item.YourAddress}
                              </TableCell>
                              <TableCell style={{borderRight:"1px solid gray"}} >
                                Age <br /> {item.age}
                              </TableCell>
                              <TableCell style={{borderRight:"1px solid gray"}} >
                                CNIC_Number <br /> {item.CNIC}
                              </TableCell>
                              <TableCell style={{borderRight:"1px solid gray"}} >
                                Number <br /> {item.Number}
                              </TableCell>
                              <TableCell style={{borderRight:"1px solid gray"}} >
                              Blood_Group <br /> {item.BloodGroup}
                              </TableCell>
                              <TableCell style={{borderRight:"1px solid gray"}} >
                              Email <br /> {item.email}
                              </TableCell>
                              <TableCell style={{borderRight:"1px solid gray"}} >
                              User_resp <br /> {item.Donate_Revive}
                              </TableCell>

                            </TableRow>
                          </TableHead>
                        );
                      })}
                    </TableRow>

                  </TableBody>
                </Table>
              </TableContainer>

            </Paper>
          </Container>
        </div>
      </div>
      <div className='hover:cursor-pointer' onClick={clickHandle}>
        <Container>
          <img src="https://www.pngmart.com/files/7/Blood-Donation-PNG-Picture.png" alt="" />
        </Container>
      </div>
    </div>

  )
}

export default Dashboard
