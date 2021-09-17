import React, { useState, useEffect } from "react";
import Lists from "./Lists";
import Button from "./Button";
import s from './Sidebar.module.scss';

const Sidebar = ({ tasks, addTask, removeTask, setActiveList }) => {
    const [userTaskColor, setUserTaskColor] = useState('#000000');

    const activeTaskColor = (tasks) => {
        const activeTask = tasks.filter((task) => {
            return task.active;
        });

        setUserTaskColor(hexToRGB(activeTask[0]?.color, 0.2));

        function hexToRGB(hex, alpha) {
            if (!hex) {
                hex = "#000000"
            }
            let r = parseInt(hex.slice(1, 3), 16),
                g = parseInt(hex.slice(3, 5), 16),
                b = parseInt(hex.slice(5, 7), 16);

            return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
        }
    }

    useEffect(() => {
        activeTaskColor(tasks);
    }, [tasks, userTaskColor]);

    return (
        <div
            style={{ background: userTaskColor }}
            className={s["sidebar"]}
        >
            <div className={s["sidebar__lists"]}>
                <Lists
                    tasks={tasks}
                    removeTask={removeTask}
                    setActiveList={setActiveList}
                />
            </div>
            <div className={s["sidebar__button"]}>
                <Button addTask={addTask} />
            </div>
        </div>
    )
}

export default Sidebar;