import React, { useEffect, useState } from 'react'
import Message from './Message'
import './Chat.css'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import GifIcon from '@material-ui/icons/Gif'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import { selectUser } from './features/userSlice'
import { useSelector } from 'react-redux'
import { selectChannelId, selectChannelname } from './features/appSlice'
import { db } from './firebase'
import firebase from 'firebase/compat/app'





const Chat = () => {

    const user = useSelector(selectUser)
    const ChannelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelname)
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([])

    useEffect(() => {
        if (ChannelId) {
            db.collection('channels')
                .doc(ChannelId)
                .collection("messages")
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) => (
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                ));
        }

    }, [ChannelId])

    const sendMessage = (e) =>{
        e.preventDefault();

        db.collection('channels').doc(ChannelId).collection('messages')
        .add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            message:input,
            user: user,
     
        })
        setInput("")
    }


    return (
        <div className='chat'>
            <ChatHeader channelName={channelName} />
            <div className='chat__messages'>
                {
                    messages.map((message) => {
                        return <Message  message={message.message} user={message.user} timestamp={message.timestamp}/>
                    
                   
                 
                })
                    }

            </div>
            <div className='chat__input'>
                <AddCircleIcon fontSize="large" />
                <form>
                    <input type='text' placeholder={`Message#${channelName}`} value={input} onChange={(e) => setInput(e.target.value)} disabled={!ChannelId} />
                    <button className='chat__inputButton' type='submit' onClick={sendMessage} >Send Messages</button>
                </form>

                <div className='chat__inputIcons'>
                    <CardGiftcardIcon fontSize="large" />
                    <GifIcon fontSize="large" />
                    <EmojiEmotionsIcon fontSize="large" />
                </div>
            </div>
        </div>
    )
}

export default Chat