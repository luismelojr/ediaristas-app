import React, { PropsWithChildren } from 'react';
import { SystemProps } from '@mui/system';
import {
  RatingStyled,
  UserDescription,
  UserInformationContainer,
  UserName,
  UserPicture,
} from './UserInformation.styles';

export interface UserInformationProps {
  title: string;
  picture: string;
  rating: number;
  description?: string;
  sx?: SystemProps;
  isRating?: boolean;
}

const UserInformation: React.FC<PropsWithChildren<UserInformationProps>> = ({
  picture,
  rating,
  description,
  title,
  sx,
  isRating = false,
}) => {
  return (
    <UserInformationContainer sx={sx} isRating={isRating}>
      <UserPicture src={picture}>{title[0]}</UserPicture>
      <RatingStyled value={rating} readOnly />
      <UserName>{title}</UserName>
      {description && <UserDescription>{description}</UserDescription>}
    </UserInformationContainer>
  );
};

export default UserInformation;
