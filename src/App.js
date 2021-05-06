import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';

const App = () => {
    return (
        <div>
            <AppHeader />
                <div className="container">
                    <div className="left">
                        <SongList />
                    </div>
                    <div className="right panel">
                        <SongDetail />
                    </div>
                </div>
            <AppFooter />
        </div>
    )
}

export default App;