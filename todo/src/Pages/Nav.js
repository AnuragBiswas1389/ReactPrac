
import { Link } from "react-router-dom";
import styled from "styled-components";

function Nav() {

  const LI = styled.li`
    color: black;
    font-weight: 900;
    background-color: rgb(218, 92, 92);
    margin: 4px;
    padding: 4px;
    color: rgb(230, 81, 81);
    font-size: small;
    font-weight: 400;
    cursor: pointer;
    user-select: none; /* - disabling text selection for better ui*/

    border-radius: 1px;
  `;

  const UL = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 1rem;
  `;

  const Container = styled.section`
    background-color: rgb(218, 92, 92);
  `;

  const SLink = styled(Link)`
    font-weight: 400;
    color: black;
    text-decoration: none;

    &:hover {
      background-color: rgb(223, 69, 67);
    }
    &:active {
      background-color: rgb(223, 67, 67);
    }
  `;

  return (
    <>
      <Container>
        <UL>
          <LI>
            <SLink to="/">
              Home
            </SLink>
          </LI>
          <LI>
            <SLink to="/AddTask" >
              Add Task
            </SLink>
          </LI>
          <LI>
            <SLink to="Account" >
              Account
            </SLink>
          </LI>
        </UL>
      </Container>
    </>
  );
}

export default Nav;
