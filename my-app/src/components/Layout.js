export default function Layout({children}) {
    return (
        
        <div classname="container">
        <header>
            <h1>nyheter.no</h1>
            <nav>
                <li>om oss</li>
                <li>siste nytt</li>
                <li>tips oss</li>
            </nav>
        </header>

        <main>
            {children}
        </main>

        <footer>
            <span>ikoner</span>
        </footer>
        
        </div>
    )
}