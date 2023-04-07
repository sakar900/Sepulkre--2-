import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
} from '@mui/material';
// components
import Label from '../components/label';
import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';
// sections
import { UserListHead, UserListToolbar } from '../sections/@dashboard/user';
// mock
import USERLIST from '../_mock/user';

// ----------------------------------------------------------------------


export default function UserPage() {
  
  return( <>
    <Helmet><title> Pricing Page| Sepulkre </title></Helmet>
   <Typography variant="h4" sx={{ mb: 5 }}>
          <strong style={{  color: "#37517e",fontSize: '32px' }}>Hi, Welcome back</strong>
    </Typography>
    </>
  );
  
}
