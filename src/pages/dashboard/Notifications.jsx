import { useState } from "react";
import { Helmet } from "react-helmet";
import { FiCheckCircle, FiTag, FiCalendar, FiMessageSquare, FiCheck } from "react-icons/fi";
import "./Notifications.css";

const ICONS = {
  booking: FiCalendar,
  offer: FiTag,
  message: FiMessageSquare,
  system: FiCheckCircle,
};

const INITIAL = [
  { id: 1, type: "booking", title: "Booking confirmed", body: "Azure Cliff Residence, Sept 14–19.", time: "2h ago", read: false },
  { id: 2, type: "offer", title: "New offer in Lisbon", body: "15% off Alfama House this month.", time: "1d ago", read: false },
  { id: 3, type: "message", title: "Message from host", body: "Riad Nour: 'Looking forward to hosting you!'", time: "3d ago", read: true },
  { id: 4, type: "system", title: "Email verified", body: "Your account is fully set up.", time: "1w ago", read: true },
];

export default function Notifications() {
  const [items, setItems] = useState(INITIAL);

  const markAllRead = () => setItems((prev) => prev.map((n) => ({ ...n, read: true })));
  const markRead = (id) => setItems((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));

  const unreadCount = items.filter((n) => !n.read).length;

  return (
    <div className="notifications-page">
      <Helmet>
        <title>Notifications — Luxury Stay Hostel</title>
      </Helmet>
      <div className="notifications-head">
        <div>
          <h1>Notifications</h1>
          <p className="overview-sub">{unreadCount} unread</p>
        </div>
        {unreadCount > 0 && (
          <button className="btn btn-ghost btn-sm" onClick={markAllRead}>
            <FiCheck size={13} /> Mark all read
          </button>
        )}
      </div>

      <div className="notifications-list">
        {items.map((n) => {
          const Icon = ICONS[n.type];
          return (
            <button
              key={n.id}
              className={`notification-row ${n.read ? "" : "is-unread"}`}
              onClick={() => markRead(n.id)}
            >
              <span className="notification-row__icon">
                <Icon />
              </span>
              <span className="notification-row__body">
                <span className="notification-row__title">{n.title}</span>
                <span className="notification-row__text">{n.body}</span>
              </span>
              <span className="notification-row__time">{n.time}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
