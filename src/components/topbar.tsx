import * as React from 'react';
import Image from 'next/image';

import { Toolbar } from '@mui/material';

export const Topbar = () => 
(
    <Toolbar>
        <Image
          src="/logo.svg"
          alt="UoPx Logo"
          width={204}
          height={60}
          priority
        />
    </Toolbar>
);