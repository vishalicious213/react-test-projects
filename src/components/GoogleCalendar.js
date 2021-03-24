import React from 'react'

function GCal() {
    const gapi = window.gapi
    const CLIENT_ID = "564792052033-7o0s9tajh3lko0f1pr1t79cgnkvdcc5p.apps.googleusercontent.com"
    const API_KEY = "AIzaSyCrmzBW1hL3t2pkYn4vC9bnqOv_ZnTXBLE"
    const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    const SCOPES = "https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar"

    gapi.load('client:auth2', () => {
        console.log('loaded client')
        
        gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES,
        })
        
        gapi.client.load('calendar', 'v3', () => console.log('loaded calendar'))
    })

    const handleAddEvent = () => {
            gapi.auth2.getAuthInstance().signIn()
            .then(() => {
                const eventStartTime = new Date()
                const eventEndTime = new Date()
                eventEndTime.setMinutes(eventEndTime.getMinutes() + 30)

                var event = {
                    'summary': 'Awesome Event 3!',
                    'location': '800 Howard St., San Francisco, CA 94103',
                    'description': 'Really great refreshments',
                    'start': {
                    'dateTime': eventStartTime,
                    'timeZone': 'America/Los_Angeles'
                    },
                    'end': {
                    'dateTime': eventStartTime,
                    'timeZone': 'America/Los_Angeles'
                    },
                    // 'recurrence': [
                    //   'RRULE:FREQ=DAILY;COUNT=2'
                    // ],
                    'attendees': [
                    {'email': 'lpage@example.com'},
                    {'email': 'sbrin@example.com'}
                    ],
                    'reminders': {
                    'useDefault': false,
                    'overrides': [
                        {'method': 'email', 'minutes': 24 * 60},
                        {'method': 'popup', 'minutes': 10}
                    ]
                    }
                }

                // const event = {
                //     summary: 'Dog groom',
                //     location: '13009 Oakland Rd, Ridgely, MD 21660',
                //     description: "Groomingzzzz",
                //     start: {
                //         dateTime: eventStartTime,
                //         timeZone: 'America/New_York',
                //     },
                //     end: {
                //         dateTime: eventEndTime,
                //         timeZone: 'America/New_York',
                //     }
                // }

                var request = gapi.client.calendar.events.insert({
                'calendarId': 'primary',
                'resource': event,
                })

                request.execute(event => {
                console.log('ADDING EVENT', event)
                window.open(event.htmlLink)
                })
            })
        // })
    }

    const handleGetEvents = () => {
        console.log('GETTING EVENTS')
        gapi.client.calendar.events
        .list({
            'calendarId': 'primary',
            //   'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 10,
            'orderBy': 'startTime'
        })
        .then(response => {
            const events = response.result.items
            console.log('EVENTS: ', events)
        })
    }

    return (
        <div className="App">
        <header className="App-header">
            <p>Click to add event to Google Calendar</p>
            {/* <p style={{fontSize: 18}}>Uncomment the get events code to get events</p> */}
            {/* <p style={{fontSize: 18}}>Don't forget to add your Client Id and Api key</p> */}
            <div style={{display: 'flex'}}>
                <button style={{width: 100, height: 30, marginRight: '1rem'}} onClick={handleAddEvent}>Add Event</button>
                <button style={{width: 100, height: 30}} onClick={handleGetEvents}>Get Events</button>
            </div>
        </header>
        </div>
    )
}

export default GCal