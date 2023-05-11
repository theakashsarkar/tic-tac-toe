export default function App() {
    return (
        <Toolbar
            onPlayMovie = {() => alert('Playing')}
            onUploadImage = {() => alert('Uploading')}
        />
    );
}

function Toolbar({ onPlayMovie, onUplaodImage })
{
    return (
        <>
            <Button onClick={onPlayMovie}>
                Play Movie
            </Button>
            <Button onClick={onUplaodImage}>
                Uplaod Image
            </Button>
        </>
    );
}

function Button({ onClick, children })
{
    return (
        <button onClick={onClick}>{children}</button>
    )
}