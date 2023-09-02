import { useState, useEffect } from 'react'
import retrievePosts from '../logic/retrievePosts'
import retrieveUser from '../logic/retrieveUser'
import CreatePostModal from '../components/CreatePostModal'
import EditPostModal from '../components/EditPostModal'
import DeletePostModal from '../components/DeletePostModal'
import CashoutModal from '../components/CashoutModal'
import ChargeModal from '../components/ChargeModal'
import context from '../context'
import { extractUserIdFromToken } from '../helpers'

function Home(props) {
    console.log('Home -> render')

    const [view, setView] = useState('all')
    const [user, setUser] = useState(null)
    const [all, setAll] = useState([])
    const [modal, setModal] = useState(null)
    const [postId, setPostId] = useState(null)

    useEffect(() => {
        try {
            retrievePosts(context.token, (error, posts) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setAll(posts)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    useEffect(() => {
        try {
            retrieveUser(context.token, (error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setUser(user)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleLogout = () => {
        context.userId = null

        props.onLoggedOut()
    }

    const handlePosts = event => {
        event.preventDefault()

        const all = retrievePosts(context.email)
        setAll(all)
        setView('all')
    }

    const handleOpenCreatePostModal = () => setModal('create-post')

    const handleCancelCreatePost = () => setModal(null)

    const handlePostCreated = () => {
        try {
            retrievePosts(context.token, (error, posts) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setAll(posts)
                setView('all')
                setModal(null)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleOpenEditPostModal = postId => {
        setModal('edit-post')
        setPostId(postId)
    }

    const handleCancelEditPost = () => {
        setModal(null)
        setPostId(null)
    }

    const handlePostEdited = () => {
        try {
            retrievePosts(context.token, (error, posts) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setAll(posts)
                setView('all')
                setModal(null)
                setPostId(null)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleOpenDeletePostModal = postId => {
        setModal('delete-post')
        setPostId(postId)
    }

    const handleCancelDeletePost = () => {
        setModal(null)
        setPostId(null)
    }

    const handlePostDeleted = () => {
        try {
            retrievePosts(context.token, (error, posts) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setAll(posts)
                setView('all')
                setModal(null)
                setPostId(null)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const userId = extractUserIdFromToken()

    const handleOpenCashoutModal = userId => {
        setModal('cashout-balance')
        setUser(userId)
    }


    const handleCancelCashout = () => {
        setModal(null)
    }

    const handleCashedout = () => {
        try {
            retrieveBalance(context.token, (error, balance) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setAll(posts)
                setView('all')
                setModal(null)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleOpenChargeModal = userId => {
        setModal('charge-balance')
        setUser(userId)
    }

    const handleCancelCharge = () => {
        setModal(null)
    }

    const handleCharged = () => {
        try {
            retrieveBalance(context.token, (error, balance) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setAll(posts)
                setView('all')
                setModal(null)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="home-page">
        <header className="home-header">
            <h1 className="home-title">🍀Good Luck, {user ? user.name : 'World'}!🍀</h1>
            <p className="balance">{user ? user.balance : '?'}€</p>
            <button className="charge-button" onClick={handleOpenChargeModal}>Charge🚀</button>
            <button className="cashout-button" onClick={handleOpenCashoutModal}>Cashout🤑</button>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </header>

        {view === 'all' && <main className="posts">
            {all.map(post => {
                return <article key={post.id} className="post">
                    <h2>{post.author.name}</h2>
                    <img src={post.image} className="post-image" />
                    <p>{post.text}</p>
                    <time>{post.date.toString()}</time>
                    {userId === post.author.id && <>
                        <button onClick={() => handleOpenEditPostModal(post.id)}>📝</button>
                        <button onClick={() => handleOpenDeletePostModal(post.id)}>🗑️</button>
                    </>}
                </article>
            })}
        </main>}

        <footer className="home-footer">
            <button className="create-post-button" onClick={handleOpenCreatePostModal}>+</button>
        </footer>

        {modal === 'create-post' && <CreatePostModal onCancel={handleCancelCreatePost} onCreated={handlePostCreated} />}

        {modal === 'edit-post' && <EditPostModal postId={postId} onCancel={handleCancelEditPost} onEdited={handlePostEdited} />}

        {modal === 'delete-post' && <DeletePostModal postId={postId} onCancel={handleCancelDeletePost} onDeleted={handlePostDeleted} />}

        {modal === 'cashout-balance' && <CashoutModal onCancel={handleCancelCashout} onCashedout={handleCashedout} />}

        {modal === 'charge-balance' && <ChargeModal onCancel={handleCancelCharge} onCharged={handleCharged} />}

        <div className="audio-home off">
            <audio src="public/home.mp3" controls autoPlay loop>
            Your browser does not support the audio element.
            </audio>
        </div>
    </div>
}

export default Home