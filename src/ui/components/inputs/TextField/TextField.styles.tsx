import { styled, TextField, TextFieldProps } from '@mui/material';

export const TextFieldStyles = styled(TextField)<TextFieldProps>`
  .MuiInputBase-root {
    bakcground-color: ${({ theme }) => theme.palette.grey[50]};
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;
