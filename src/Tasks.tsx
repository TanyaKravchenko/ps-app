import React from 'react';

type TasksPropsType = {
    data: DataType
}

type DataType = {
    title: string
    tasks: Array<TaskType>
    students: Array<string>
}

type TaskType = {
    taskId: number
    title: string
    isDone: boolean
}

export const Tasks = (props: TasksPropsType) => {

    return (
        <>
            <h1>{props.data.title}</h1>
            <ul>
                {props.data.tasks.map((el, index) => {
                    return (
                        <li key={index}>
                            <span>{el.taskId}</span>
                            <span>{el.title}</span>
                            <span>{el.isDone}</span>
                        </li>
                    )
                })}
            </ul>
            <ul>
                {props.data.students.map((el, index) => {
                    return (
                        <div key={index}>
                            {el}
                        </div>
                    )
                })}
            </ul>
        </>
    );
}