import { IDM, IChat } from '@typings/db';
import React, { VFC, memo, useMemo } from 'react';
import { ChatWrapper } from './styles';
import gravatar from 'gravatar';
import dayjs from 'dayjs';
import regexifyString from 'regexify-string';
import { Link, useParams } from 'react-router-dom';

interface Props {
  data: IDM | IChat;
}

const Chat: VFC<Props> = ({ data }) => {
  // dm은 보내는사람과 받는 사람을 알아야 하지만 channel에서는 보내는 사람과 채널만 알면 된다.
  const user = 'Sender' in data ? data.Sender : data.User;
  const { workspace } = useParams<{ workspace: string }>();

  // @[이름](숫자)랑 줄바꿈 정규표현식
  const result = useMemo(
    () =>
      regexifyString({
        input: data.content,
        pattern: /@\[(.+?)]\((\d+?)\)|\n/g, // /d=>숫자, +=>1개 이상, ?=>0개나 1개, *=>0개 이상
        decorator(match, index) {
          const arr = match.match(/@\[(.+?)]\((\d+?)\)/)!;
          if (arr) {
            return (
              <Link key={match + index} to={`/workspace/${workspace}/dm/${arr[2]}`}>
                @{arr[1]}
              </Link>
            );
          }
          return <br key={index} />;
        },
      }),
    [data.content],
  );

  return (
    <ChatWrapper>
      <div className="chat-img">
        <img src={gravatar.url(user.email, { s: '36px', d: 'retro' })} alt={user.nickname} />
      </div>
      <div className="chat-text">
        <div className="chat-user">
          <b>{user.nickname}</b>
          <span>{dayjs(data.createdAt).format('h:mm A')}</span>
        </div>
        <div>{result}</div>
      </div>
    </ChatWrapper>
  );
};

export default memo(Chat);
