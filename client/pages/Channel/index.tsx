import React, { useCallback } from 'react';
import { Container, Header } from './styles';
import ChatBox from '@components/ChatBox';
import useInput from '@hooks/useInput';
import ChatList from '@components/ChatList';
import { useParams } from 'react-router';
import axios from 'axios';
import { IChat, IDM } from '@typings/db';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';

const Channel = () => {
  const [chat, onChangeChat, setChat] = useInput('');
  const { workspace, id } = useParams<{ workspace: string; id: string }>();

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      console.log('sumbit channel', chat);
      if (chat?.trim()) {
      }
    },
    [chat],
  );

  return (
    <Container>
      <Header>채널</Header>
      {/* <ChatList /> */}
      <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} />
    </Container>
  );
};

export default Channel;
