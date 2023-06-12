function Home(props) {
    //TODO wdh
    const viewState = React.useState('posts')
    const view = viewState[0]
    const setView = viewState[1]
    //TODO wdh

    const mineState = React.useState([])
    const mine = mineState[0]
    const setMine = mineState[1]

    const favsState = React.useState([])
    const favs = favsState[0]
    const setFavs = favsState[1]

    const user = retrieveUser(context.email)
    const posts = retrievePosts(context.email)

    const handleLogout = () => {
        delete context.email

        props.onLoggedOut()
    }

    const handleMinePosts = event => {
        event.preventDefault()

        const mine = retrieveMinePosts(context.email)
        setMine(mine)
        setView('mine')
    }

    const handleFavPosts = event => {
        event.preventDefault()

        const favs = retrieveFavPosts(context.email)
        setFavs(favs)
        setView('favs')
    }

    console.log('Home -> render')

    return <div className="welcome">
        <header className ="welcome-header">
            <h1 className="headline">Welcome, {user.name}!</h1>
            <a href="" className="mine-link" onClick={handleMinePosts}>🫵</a>
            <a href="" className="star" onClick={handleFavPosts}>⭐️</a>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </header>

        {view === 'posts' && <main className="posts">
            {posts.map(post => {
                const user = retrieveUser(post.user)

                return <article class="post">
                    <h2>{user.name}</h2>
                    <img src={post.picture} class="post-image" />
                    <p>{post.text}</p>
                    <time>{post.date.toString()}</time>
                </article>
            })}
        </main>}

        {view === 'favs' && <main className="fav-posts">
            {favs.map(post => {
                const user = retrieveUser(post.user)

                return <article class="post">
                    <h2>{user.name}</h2>
                    <img src={post.picture} class="post-image" />
                    <p>{post.text}</p>
                    <time>{post.date.toString()}</time>
                </article>
            })}
        </main>}

        {view === 'mine' && <main className="mine-posts">
            {mine.map(post => {
                const user = retrieveUser(post.user)

                return <article class="post">
                    <h2>{user.name}</h2>
                    <img src={post.picture} class="post-image" />
                    <p>{post.text}</p>
                    <time>{post.date.toString()}</time>
                </article>
            })}
        </main>}

        <footer className="welcome-footer">
            <button className="create-button">+</button>
        </footer>

        <div className="modal modal-post off">
            <form className="post-form">
                <label htmlFor="picture">Picture</label>
                <input type="url" name="picture" id="picture"></input>

                <label htmlFor="text">Text</label>
                <textarea name="text"></textarea>

                <button type="submit">Share</button>
                <button className="cancel">Cancel</button>
            </form>
        </div>

        <div className="modal modal-modify off">
            <form className="post-form">
              <input type="hidden" name="postId" />
              
              <label htmlFor="picture">Picture</label>
              <input type="url" name="picture" id="picture"></input>

              <label htmlFor="text">Text</label>
              <textarea name="text"></textarea>

              <button type="submit">Modify</button>
              <button className="cancel">Cancel</button>
            </form>
        </div>

        <div className="modal modal-sell off">
            <form className="post-form">
              <input type="hidden" name="postId" />

              <label htmlFor="price">Price</label>
              <input type="number" name="price" id ="price"></input>

              <button type="submit">Sell</button>
              <button className="cancel">Cancel</button>
            </form>
        </div>

        <div className="modal modal-buy off">
            <form className="post-form">
              <input type="hidden" name="postId" />
              
              <p>Buy this Post htmlFor <span></span>€?</p>

              <button type="submit">Buy</button>
              <button className="cancel">Cancel</button>
            </form>
        </div>
    </div>
}