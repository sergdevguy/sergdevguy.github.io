import React, { useState, useEffect } from 'react'
import OkSvg from "../UI/Icons/taskStatus/OkSvg";
import CancelSvg from "../UI/Icons/taskStatus/CancelSvg";
import TrashSvg from "../UI/Icons/taskStatus/TrashSvg";
import RemoveSvg from "../UI/Icons/RemoveSvg";
import s from './Tasks.module.scss';

const StatusList = ({ opened, resetOpened, addStatus, openedStatusTask, removeIfTrash }) => {
    const [openedStatus, setOpenedStatus] = useState(true);

    const resetButton = (e) => {
        resetOpened();
        setOpenedStatus(false);
        e.stopPropagation();
    }

    useEffect(() => {
        setOpenedStatus(opened);
    }, [opened]);

    return (
        openedStatus &&
        <div className={s["tasks__item-status"]}>
            <div className={s["tasks__item-status-wrapper"]}>
                <div
                    onClick={(e) => {
                        addStatus({
                            'title': openedStatusTask,
                            'status': 'ok',
                        });
                        resetButton(e);
                    }}
                    className={s["tasks__item-status-svg"] + ' ' + s["_ok"]}
                >
                    {OkSvg}
                </div>
                <div
                    onClick={(e) => {
                        addStatus({
                            'title': openedStatusTask,
                            'status': 'cancel',
                        });
                        resetButton(e);
                    }}
                    className={s["tasks__item-status-svg"] + ' ' +  s["_cancel"]}
                >
                    {CancelSvg}
                </div>
                <div
                    onClick={(e) => {
                        addStatus({
                            'title': openedStatusTask,
                            'status': 'trash',
                        });
                        removeIfTrash();
                        resetButton(e);
                    }}
                    className={s["tasks__item-status-svg"] + ' ' + s["_trash"]}
                >
                    {TrashSvg}
                </div>
            </div>
            <div
                onClick={(e) => {
                    resetButton(e);
                }}
                className={s["tasks__item-status-svg"] + ' ' + s["_return"]}
            >
                {RemoveSvg}
            </div>
        </div >
    );
}

export default StatusList;