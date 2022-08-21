import React, { useContext } from 'react'
import { analyzedDataCtx } from '../context/analyzed-data-context'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const AnalysisResult = () => {
  const { state: results } = useContext(analyzedDataCtx)

  return (
    <div className='container py-4 mx-auto'>
      {results.length === 0 ? (
        <p className='my-5'>No Results...</p>
      ) : (
        <TableContainer>
          <Table sx={{ minWidth: 250, maxWidth: 550, margin: 'auto' }}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <h2>Label</h2>
                </TableCell>
                <TableCell align='right'>
                  <h2>Score</h2>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((result) => (
                <TableRow
                  key={result.mid}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component='th' scope='row'>
                    {result.description}
                  </TableCell>
                  <TableCell align='right'>
                    {(result.score * 100).toFixed(4)}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  )
}

export default AnalysisResult
