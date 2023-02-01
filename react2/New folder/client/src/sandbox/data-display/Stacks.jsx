import { Divider, Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Stacks() {
    return <Stack direction="column" alineItems="center" justifyContent="center" spacing={2} position="sticky" sx={{margin:"0 auto" }}>
                <Box  >a</Box>
                <Divider/>
                <Box  >b</Box>
                <Divider/>
                <Box  >c</Box>
        </Stack>
}
