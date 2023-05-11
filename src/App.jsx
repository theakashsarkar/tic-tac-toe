function Profile() {
    return (
        <img
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="Akash"
        />
    )
}

const person = {
    name : 'Akash',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
}
const today = new Date();

function formDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: "long"}
    ).format(date)
}

export default function TodoList()
{
    return (
        <>
            <div style={person.theme}>
                <h1>{ person.name }</h1>
            </div>
            <h1>To Do List for {formDate(today)}</h1>
        </>

    )
}