import NewNotifCard from './NewNotifCard'

const Notifications = () => {

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
            <span onClick={handleOpenNotifs} id="notifIcon" class="material-symbols-rounded">notifications</span>
            <div id="notifTray">
                <span onClick={handleCloseNotifs} id="notifCloseIcon" style={{ margin: '1rem' }} class="material-symbols-rounded">close</span>
                <div id="notifList">
                    <NewNotifCard title="Notif1" description="Test" />
                    <NewNotifCard title="Notif2" description="Test" />
                    <NewNotifCard title="Notif2" description="Test" />
                    <NewNotifCard title="Notif2" description="Test" />
                    <NewNotifCard title="Notif2" description="Test" />
                    <NewNotifCard title="Notif2" description="Test" />
                    <NewNotifCard title="Notif2" description="Test" />
                    <NewNotifCard title="Notif2" description="Test" />
                </div>
            </div>
        </div>
    );
}

export default Notifications;