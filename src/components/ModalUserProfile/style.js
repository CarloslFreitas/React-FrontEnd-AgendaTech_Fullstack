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
    max-width: 369px;
    width: 100%;
    gap: 22px;
    
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

  form {
    padding: 45px 22px 22px 22px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    > span {
          background: var(--color-color-primary);
          border: 1.22px solid var(--color-color-primary);
          padding: 5px;
          color: white;
          align-self: flex-end;
          cursor: pointer;
          width: 120px;
          border-radius: 3px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 10px;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          height: 35px;
    }
  }
`
