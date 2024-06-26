import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f1f5f9;
`
export const NavHeader = styled.nav`
  display: flex;
  justify-content: flex-start;
  width: 90%;
  padding: 20px;
`
export const NavLogo = styled.img`
  width: 150px;
`
export const ContentSection = styled.div`
  display: flex;
  justify-content: center;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  padding: 20px;
`
export const SelectionOption = styled.select`
  height: 50px;
  width: 35%;
  box-shadow: 0 6px 20px 0 #e8e8e8;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  outline: none;
  padding-left: 15px;
`
export const OptionInput = styled.option`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  color: #475569;
`

export const ProjectsUnorderedList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px;
`
export const FailureViewImage = styled.img`
  width: 40%;
`
export const FailureHeading = styled.h1`
  font-family: Roboto;
  font-size: 30px;
  font-weight: 500;
  color: #475569;
  margin: 0px;
  margin-top: 10px;
`
export const FailureNote = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  color: #475569;
`
export const RetryButton = styled.button`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  background-color: #328af2;
  border: none;
  border-radius: 5px;
  padding: 10px;
  padding-left: 25px;
  padding-right: 25px;
  cursor: pointer;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
