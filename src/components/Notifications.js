import React, { useState, useEffect } from 'react'
import supabase from './supabase'
import NewNotifCard from './NewNotifCard'

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
