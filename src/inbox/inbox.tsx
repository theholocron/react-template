import { TaskList, useTasks } from "../tasks";

export interface InboxProps {
	error?: string;
}

type TaskState = "TASK_PINNED" | "TASK_INBOX" | "TASK_ARCHIVED";

export function Inbox (props: InboxProps) {
	const {
		error = "",
	} = props;

	const [tasks, dispatch] = useTasks();

	// Archive or move the task back to inbox
	const archiveTask = (actionType: "ARCHIVE_TASK" | "INBOX_TASK", id: string) => {
		dispatch({ type: actionType, id });
	};

	// Delete task by id
	const deleteTask = (id: string) => {
		dispatch({ type: "DELETE_TASK", id });
	};

	// Toggle between pinning and unpinning the task
	const togglePinTask = (state: TaskState, id: string) => {
		dispatch({
			type: state === "TASK_PINNED" ? "INBOX_TASK" : "PIN_TASK",
			id,
		});
	};

	// Edit task title
	const editTitle = (title: string, id: string) => {
		dispatch({ type: "EDIT_TITLE", id, title });
	};

	if (error) {
		return (
			<div className="page lists-show">
				<div className="wrapper-message">
					<span className="icon-face-sad" />
					<p className="title-message">Oh no!</p>
					<p className="subtitle-message">Something went wrong</p>
				</div>
			</div>
		);
	}

	return (
		<div className="page lists-show">
			<nav>
				<h1 className="title-page">Taskbox</h1>
			</nav>
			<TaskList
				tasks={tasks}
				onArchiveTask={archiveTask}
				onTogglePinTask={togglePinTask}
				onEditTitle={editTitle}
				onDeleteTask={deleteTask}
			/>
		</div>
	);
}
