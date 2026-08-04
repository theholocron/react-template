import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Task } from "./task";

const defaultTask = {
	id: "1",
	title: "Test task",
	state: "TASK_INBOX" as const,
};

const defaultProps = {
	task: defaultTask,
	onArchiveTask: vi.fn(),
	onTogglePinTask: vi.fn(),
	onEditTitle: vi.fn(),
	onDeleteTask: vi.fn(),
};

describe("Task", () => {
	it("renders the task title", () => {
		render(<Task {...defaultProps} />);
		expect(screen.getByDisplayValue("Test task")).toBeInTheDocument();
	});

	it("shows pin button for inbox tasks", () => {
		render(<Task {...defaultProps} />);
		expect(screen.getByLabelText("pin")).toBeInTheDocument();
	});

	it("shows unpin button for pinned tasks", () => {
		render(<Task {...defaultProps} task={{ ...defaultTask, state: "TASK_PINNED" }} />);
		expect(screen.getByLabelText("unpin")).toBeInTheDocument();
	});

	it("hides pin button for archived tasks", () => {
		render(<Task {...defaultProps} task={{ ...defaultTask, state: "TASK_ARCHIVED" }} />);
		expect(screen.queryByLabelText("pin")).not.toBeInTheDocument();
	});

	it("calls onDeleteTask when delete is clicked", () => {
		const onDeleteTask = vi.fn();
		render(<Task {...defaultProps} onDeleteTask={onDeleteTask} />);
		fireEvent.click(screen.getByLabelText("delete"));
		expect(onDeleteTask).toHaveBeenCalledWith("1");
	});

	it("calls onArchiveTask when archive is clicked", () => {
		const onArchiveTask = vi.fn();
		render(<Task {...defaultProps} onArchiveTask={onArchiveTask} />);
		fireEvent.click(screen.getByLabelText("archiveButton-1"));
		expect(onArchiveTask).toHaveBeenCalledWith("ARCHIVE_TASK", "1");
	});
});
