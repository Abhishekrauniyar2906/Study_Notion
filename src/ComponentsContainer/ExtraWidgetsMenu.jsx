import { useState } from "react";
import UpcomingDeadlines from "../ComponentsContainer/UpComingDeadlines";
import Messages from "./Messages";
import FeedbackSection from "../ComponentsContainer/FeedbackSection";
import Leaderboard from "../ComponentsContainer/Leaderboards";
import CourseSuggestions from "../ComponentsContainer/CourseSuggestions";
import TaskList from "../ComponentsContainer/TaskList";
import Announcements from "../ComponentsContainer/Announcements";
import UserActivityHeatmap from "./UserActivityHeatmap";

const ExtraWidgetsMenu = () => {
  const [activeWidget, setActiveWidget] = useState("deadlines");

  const menuItems = [
    { label: "Deadlines", value: "deadlines" },
    { label: "Messages", value: "messages" },
    { label: "Feedback", value: "feedback" },
    { label: "Leaderboard", value: "leaderboard" },
    { label: "Suggestions", value: "suggestions" },
    { label: "Tasks", value: "tasks" },
    { label: "Announcements", value: "announcements" },
    { label: "Activity Heatmap", value: "heatmap" },
  ];

  const renderContent = () => {
    switch (activeWidget) {
      case "deadlines":
        return <UpcomingDeadlines />;
      case "messages":
        return <Messages />;
      case "feedback":
        return <FeedbackSection />;
      case "leaderboard":
        return <Leaderboard />;
      case "suggestions":
        return <CourseSuggestions />;
      case "tasks":
        return <TaskList />;
      case "announcements":
        return <Announcements />;
      case "heatmap":
        return <UserActivityHeatmap />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-zinc-950 drop-shadow-sm shadow-blue-200 backdrop-blur-sm border
     border-zinc-900
     rounded-2xl  shadow-sm  p-6">
      <h2 className="text-2xl font-semibold mb-4">📂 Extra Dashboard Features</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {menuItems.map((item) => (
          <button
            key={item.value}
            onClick={() => setActiveWidget(item.value)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 ${
              activeWidget === item.value ? "bg-blue-600 text-white" : "bg-zinc-950 drop-shadow-sm shadow-blue-200 backdrop-blur-sm border  border-zinc-90  rounded-2xl  shadow-sm p-6  text-gray-300"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="bg-zinc-950 drop-shadow-sm shadow-blue-200 backdrop-blur-sm border
     border-zinc-900
     rounded-2xl  shadow-sm p-6 ">{renderContent()}</div>
    </div>
  );
};

export default ExtraWidgetsMenu;
