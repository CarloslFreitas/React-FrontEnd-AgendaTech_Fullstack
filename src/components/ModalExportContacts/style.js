import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3S;
  padding: 0 15px;

  .modal-content {
    max-width: 769px;
    width: 100%;
    gap: 22px;

    display: flex;
    flex-direction: column;
    
    border-radius: 4px;
    background: var(--color-grey-3);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

    animation: appearsModal 1s ease-in-out;
  }

  .closeModal {
    color: var(--color-grey-0);
    font-family: 'Nunito';
    font-size: 18px;
    font-weight: 600;

    transition: .2s ease-in-out;
    cursor: pointer;
    :hover{
      transform: scale(1.4);
      color: var(--color-negative);
    }
  }
  .modal-header {
    height: 50px;
    background-color: var(--color-grey-2);
    border-radius: 4px 4px 0 0;
    display: flex;
    align-items: center;
    padding: 12px 20px 12px 20px;
    justify-content: space-between;
  }

  
  button {
    height: 30px;
    width: 200px;
    align-self: center;

    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: white;
    text-decoration: none;

    border-radius: 5px;
    margin-bottom: 20px;

    background: var(--color-color-primary);
    border: 1.22px solid var(--color-color-primary);
  }

  .listContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    /* border: solid 1px white; */
    overflow-y: auto;
    > h1 {
      color: white;
      font-family: 'Inter', sans-serif;
      height: 50px;
      border-bottom: solid 1.5px white;
      margin-bottom: 20px;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
 .listColums{
  display: flex;
  width: 100%;
  height: 300px;
  overflow: auto;
  flex-wrap: wrap;
  justify-content: space-around;
  /* border: solid 1px white; */

  > ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    > h2 {
      color: white;
      font-family: 'Inter', sans-serif;
    }
  }

 }
`
