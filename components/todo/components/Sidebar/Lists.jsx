import React from 'react';
import classNames from 'classnames';
import TextWithIcon from "../UI/Text/TextWithIcon";
import CircleSvg from "../UI/Icons/CircleSvg";
import RemoveSvg from "../UI/Icons/RemoveSvg";
import s from './Lists.module.scss';

const Lists = ({ tasks, removeTask, setActiveList }) => {
    return (
        <>
            {
                tasks.length === 0
                    ?
                    <div className={s["lists-list__no-list"]}>Создай группу задач (дом, работа и т.п.)</div>
                    :
                    ''
            }

            {Array.isArray(tasks) &&
                tasks.map(task => (
                    <div
                        key={task.title}
                        className={classNames(s['lists-list'], { [s._active]: task.active })}
                    >
                        <div
                            className={s["lists-list__text"]}
                            onClick={() => setActiveList(task)}
                        >
                            <TextWithIcon
                                text={task.title}
                                icon={CircleSvg}
                                color={task.color}
                            />
                        </div>
                        <div
                            onClick={() => removeTask(task)}
                            className={s["lists-list__remove-button"]}
                        >
                            {RemoveSvg}
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default Lists;