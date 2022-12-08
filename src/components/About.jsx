import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { readList } from '../redux/modules/todos';
import styled from 'styled-components';

export default function About() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const detail = useSelector((state) => state.todos.todos);
  console.log(useSelector((state) => state));
  const { id } = useParams();

  useEffect(() => {
    dispatch(readList(id));
  }, []);
  return (
    <StWrapper>
      <StInner>
        {detail.map((item) => {
          return (
            <StContainer key={item.id}>
              <StTitle className=''>
                <p>ID: {item.id}</p>
                <StButton onClick={() => navigate(`/`)}>돌아가기</StButton>
              </StTitle>
              <StContent>
                <p>{item.title}</p>
                <div className='content_box'>
                  <span className='content_span'>{item.content}</span>
                </div>
              </StContent>
            </StContainer>
          );
        })}
      </StInner>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  width: 100%;
`;
const StInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
const StContainer = styled.div`
  width: 300px;
  height: 140px;
  padding: 30px;
  border: 1px solid gray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const StTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StButton = styled.button`
  padding: 5px 10px;
  background: '#eee';
  border: 1px solid grey;
  border-radius: 3px;
  cursor: pointer;
`;
