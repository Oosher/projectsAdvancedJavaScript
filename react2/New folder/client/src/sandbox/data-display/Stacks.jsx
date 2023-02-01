import { Divider, Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Stacks() {
    return <Stack direction="column" justifyContent="center" spacing={2} position="sticky" sx={{margin:"0 auto" }} divider={<Divider flexItem/>} width={10}>
                <Box  >a</Box>
                
                <Box  >b</Box>
                
                <Box  >c</Box>
        </Stack>
}
