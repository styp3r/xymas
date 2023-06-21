import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js';
import NewNotifCard from './NewNotifCard'

const supabase = createClient('https://lgydkxizvydkathymrad.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxneWRreGl6dnlka2F0aHltcmFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyMTU5ODAsImV4cCI6MTk5OTc5MTk4MH0.nj-_Ft-7vGi22FnKEEfCh8eH5Cd3KimkjyOxagZsvHg');


const Notifications = () => {

    const [notifData, setNotifData] = useState([]);

    useEffect(() => {

        const fetchNotifications = async () => {
            try {
                const { data, error } = await supabase
                    .from('notifications')
                    .select('id, notifTitle, notifDesc, priority')
                if (error) {
                    throw error;
                }

                setNotifData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        //fetchNotifications();
    }, []);

    function handleOpenNotifs() {
        document.getElementById("notifTray").style.display = 'block';
        document.getElementById("notifIcon").style.color = "#4b4b4b";
    }

    function handleCloseNotifs() {
        document.getElementById("notifTray").style.display = 'none';
        document.getElementById("notifIcon").style.color = "#9da5aa";
    }

    return (
        <div id="notifications">
            <span onClick={handleOpenNotifs} id="notifIcon" className="material-symbols-rounded">notifications</span>
            <div id="notifTray">
                <span onClick={handleCloseNotifs} id="notifCloseIcon" style={{ margin: '1rem' }} className="material-symbols-rounded">close</span>
                <div id="notifList">
                    {notifData.map((nd) => <NewNotifCard key={nd.id} title={nd.notifTitle} description={nd.notifDesc} priority={nd.priority} />)}
                </div>
            </div>
        </div>
    );
}

export default Notifications;
