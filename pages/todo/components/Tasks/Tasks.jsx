import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import StatusList from './StatusList';
import TextWithIcon from "../UI/Text/TextWithIcon";
import AddSvg from "../UI/Icons/AddSvg";
import RemoveSvg from "../UI/Icons/RemoveSvg";
import s from './Tasks.module.scss';

const Tasks = ({ activeTaskList, addTaskList, addStatus, removeIfTrash }) => {
    const [addListButtonOpened, setAddListButtonOpened] = useState(false);
    const [listInputTitle, setListInputTitle] = useState('');
    const [openedStatusTask, setOpenedStatusTask] = useState('');
    const [openedTask, setOpenedTask] = useState(false);
    const [emptyInputError, setEmptyInputError] = useState(false);
    const inputRef = useRef(null);

    const resetOpened = () => {
        setOpenedTask(false);
        setOpenedStatusTask('');
    }

    const resetButton = (e) => {
        setAddListButtonOpened(false);
        setListInputTitle('');
        setEmptyInputError(false);
        e.stopPropagation();
    }

    return (
        <div className={s["tasks"]}>
            {
                !activeTaskList.length
                    ?
                    <div className={s["tasks__no-tasks"]}>Задач пока нет</div>
                    :
                    ""
            }
            {
                activeTaskList &&
                activeTaskList.map((task) => (
                    <div
                        onClick={(e) => {
                            if (!setOpenedStatusTask) {
                                return;
                            }
                            setOpenedStatusTask(e.currentTarget.outerText);
                            setOpenedTask(true);
                        }}
                        key={task.title}
                        className={classNames(
                            s['tasks__item'],
                            {
                                [s._ok]: (task.status === 'ok'),
                                [s._cancel]: (task.status === 'cancel'),
                            }
                        )}
                    >
                        <div className={classNames(
                            s['tasks__item-text'],
                            {
                                [s._blur]: (task.title === openedStatusTask && openedTask)
                            })}>
                            {task.title}
                        </div>
                        {
                            (openedStatusTask === task.title && openedTask)
                                ?
                                <StatusList resetOpened={resetOpened} opened={true} addStatus={addStatus} openedStatusTask={openedStatusTask} removeIfTrash={removeIfTrash} />
                                :
                                <StatusList resetOpened={resetOpened} opened={false} addStatus={addStatus} openedStatusTask={openedStatusTask} removeIfTrash={removeIfTrash} />
                        }

                    </div>
                ))
            }
            <div
                onClick={() => {
                    setAddListButtonOpened(true);
                }}
                className={s["tasks__button"]}
            >
                <div className={s["tasks__button-item"]}>
                    <TextWithIcon
                        text='Добавить задачу'
                        icon={AddSvg}
                    />
                </div>
                {
                    addListButtonOpened &&
                    <>
                        <div className={s["tasks__button-screen-hider"]}></div>
                        <div className={s["tasks__button-item"] + ' ' + s['_second']}>
                            <div
                                onClick={(e) => resetButton(e)}
                                className={s["tasks__button-item-close"]}
                            >
                                {RemoveSvg}
                            </div>
                            <input
                                className={classNames(s['tasks__button-item-row'], 'input', { [s._error]: emptyInputError })}
                                onChange={(e) => setListInputTitle(e.target.value)}
                                value={listInputTitle}
                                type="text"
                                placeholder="Введите задачу"
                                autoFocus
                                ref={inputRef}
                            />
                            <button
                                className={s["tasks__button-item-row"] + ' ' + 'button'}
                                onClick={(e) => {
                                    if (!listInputTitle) {
                                        setEmptyInputError(true);
                                        inputRef.current.focus();
                                        return;
                                    }
                                    addTaskList({
                                        'title': listInputTitle.trim(),
                                        'status': '',
                                    });
                                    resetButton(e);
                                }}
                            >Добавить</button>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default Tasks;