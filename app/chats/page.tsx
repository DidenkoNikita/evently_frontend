'use client';

import i18n from "i18next";

import resources from "@/locales/resource";

import { Footer } from "@/components/Footer/Footer";
import { HeaderChats } from "@/components/HeaderChats/HeaderChats";

import css from './page.module.css'
import { Search } from "@/components/icons/search.icon";
import { Chat } from "@/components/Chat/Chat";
import { useEffect, useState } from "react";
import { store } from "@/store/store";
import { getUserList } from "@/store/actions/getUserList";
import { socket } from "@/utils/socket";
import { useSelector } from "react-redux";
import { State } from "@/store/initialState";
import { getChats } from "@/store/actions/getChats";
import { SearchComponent } from "@/components/SearchComponent/SearchComponent";

i18n.init({
  resources,
  lng: "en"
});

export default function Chats(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [id, setId] = useState<number | null>(null);

  useEffect(() => {
    store.dispatch(getUserList());
    const userId = JSON.parse(sessionStorage.getItem('user_id') || '');
    setId(Number(userId))
    socket.emit('getChats', userId);
    socket.on('chatData', (data) => {
      // setLoading(false);
      store.dispatch(getChats(data));
    });

    socket.on('createChat', (chatData) => {
      console.log("новый чат создан", chatData);
      // setChatsData(prevChatsData => [...prevChatsData, chatData]);
    });

  }, []);

  const chats = useSelector((state: State) => state.chats);
  // if (chats.length === 0) {
  //   return (
  //     <div className={css.loading}>
  //       <LoadingComponent />
  //     </div>
  //   )
  // }

  const filteredChat = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log('after', filteredChat);
  

  const sort = filteredChat.sort((a, b) => {
    const dateA = new Date(a.timeMessage).getTime();
    const dateB = new Date(b.timeMessage).getTime();
    console.log(dateA > dateB);
    
    return dateB - dateA;
  });
  console.log('before',sort);
  

  return (
    <div className={css.wrapper}>
      <HeaderChats 
        link="/home"
        title={i18n.t('chats')} 
      />
      <SearchComponent 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className={css.chatsList}>
        {chats.length > 0 ? (
          filteredChat.length > 0 ? (
            sort.map((chat) => (
              <Chat 
                key={chat.id} 
                data={chat}
                id={id}
                chatId={chat.id}
              />
            ))
          ) : (
            <div className={css.text}>
              You don't have this chat...
            </div>
          )
        ) : (
          <div className={css.text}>
            You don't have any chats yet...
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

