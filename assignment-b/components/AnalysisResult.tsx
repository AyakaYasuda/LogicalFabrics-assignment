import React, { useContext } from 'react'
import { analyzedDataCtx } from '../pages/context/analyzed-data-context'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const AnalysisResult = () => {
  const { state: results } = useContext(analyzedDataCtx)

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Label</TableCell>
            <TableCell align='right'>Score</TableCell>
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
              <TableCell align='right'>{(result.score*100).toFixed(4)}%</TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AnalysisResult
