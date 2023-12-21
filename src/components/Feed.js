import React, { useEffect, useState } from 'react'
import '../styles/feed.css'
import InputOption from './InputOption'
import CreateIcon from "@material-ui/icons/Create"
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Post from './Post.js'
import firebase from 'firebase/compat/app'
import { db } from '../app/firebase.js'

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [postInput, setPostInput] = useState("");

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => {
                setPosts(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                })))
            })
    }, [])

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts')
            .add({
                name: 'Eesa Wazir',
                description: 'This is a test description',
                message: postInput,
                photoUrl: '',
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })

        setPostInput("");
    }

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form className='postForm'>
                        <input value={postInput} onChange={e => setPostInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7fc15e" />
                </div>
            </div>

            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
        </div>
    )
}

export default Feed