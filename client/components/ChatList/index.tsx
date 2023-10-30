import React, { VFC, useCallback, useEffect, useRef, useState } from 'react';
import { ChatZone, Section, StickyHeader } from './styles';
import { IDM } from '@typings/db';
import Chat from '@components/Chat';
import { Scrollbars } from 'react-custom-scrollbars';

// chatSections = {
//   '2023-10-30':[chatlist]
// }

interface Props {
  chatSections: { [key: string]: IDM[] };
}
const ChatList: VFC<Props> = ({ chatSections }) => {
  const scrollbarRef = useRef(null);

  const onScroll = useCallback(() => {}, []);

  return (
    <ChatZone>
      <Scrollbars autoHide ref={scrollbarRef} onScrollFrame={onScroll}>
        {Object.entries(chatSections).map(([date, chats]) => {
          return (
            <Section>
              <StickyHeader className={`section-${date}`} key={date}>
                <button>{date}</button>
              </StickyHeader>
              {chats.map((chat) => (
                <Chat key={chat.id} data={chat} />
              ))}
            </Section>
          );
        })}
      </Scrollbars>
    </ChatZone>
  );
};

export default ChatList;
