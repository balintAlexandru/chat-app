// LIBRARIES
import styled, { css } from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import StarRateIcon from "@mui/icons-material/StarRate";
import MessageIcon from "@mui/icons-material/Message";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0rem 1.1rem 0rem 1.1rem;
  background-color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const UsersContent = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background-color: black;
`;
export const UserListWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color:red;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  height: 7%;
  margin: 3.5rem 0 1.5rem 0;
  /* background-color:red; */
`;
export const Search = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  outline: none;
  border: 0.1rem solid #ffffff5e;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  color: white;
  padding-left: 1.5rem;
  &::placeholder {
    font-size: 1.6rem;
    color: white;
    opacity: 80%;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;
export const UserProfile = styled.div`
  width: 100%;
  height: 25%;
  padding-top: 3.3rem;
  border-top: 0.05rem solid #ffffff29;
`;

export const UserIconsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;
export const ProfileIcon = styled(PersonIcon)`
  &.MuiSvgIcon-root {
    color: white;
    font-size: 2.5rem;
    cursor: pointer;
  }
`;
export const AddFriendIcon = styled(PersonAddIcon)`
  &.MuiSvgIcon-root {
    color: white;
    font-size: 2.5rem;
    cursor: pointer;
  }
`;
export const MessageContact = styled(MessageIcon)`
  &.MuiSvgIcon-root {
    color: white;
    font-size: 2.5rem;
    cursor: pointer;
  }
`;
