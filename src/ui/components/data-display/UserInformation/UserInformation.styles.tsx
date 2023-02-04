import { Avatar, Box, Rating, styled, Theme } from '@mui/material';
export const UserInformationContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isRating',
})<{ isRating: boolean }>`
  display: grid;
  ${({ theme, isRating }) => handleGrid(theme, isRating)}
  gap: ${({ theme }) => theme.spacing(0.5, 2)};
  align-items: center;
  background-color: ${({ theme }) => theme.palette.grey[50]};
`;

function handleGrid(theme: Theme, isRating: boolean) {
  if (!isRating) {
    return `
      grid-template-columns: 60px 1fr;
      grid-template-areas: 'avatar name' 'avatar rating' 'avatar description';
      grid-template-rows: repeat(3, auto);
      padding: ${theme.spacing(3)};
    `;
  }

  return `
    grid-template-columns: 45px 1fr auto;
    grid-template-rows: repeat(2, auto);
    grid-template-areas: 'avatar name rating' 'avatar description rating';
    padding: ${theme.spacing(2, 4)};
  `;
}

export const UserName = styled('div')`
  grid-area: name;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  font-weight: bold;
`;

export const UserDescription = styled('div')`
  grid-area: description;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

export const UserPicture = styled(Avatar)`
  grid-area: avatar;
  width: 100%;
  height: initial;
  aspect-ratio: 1;
`;

export const RatingStyled = styled(Rating)`
  grid-area: rating;

  &.MuiRating-root {
    font-size: 14px;
  }
`;
