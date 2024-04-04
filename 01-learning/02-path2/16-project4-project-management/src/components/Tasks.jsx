import NewTask from "./NewTask";

export default function Tasks({ tasks, selectedProjectId, onAdd, onDelete }) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone700 mb-4">Tasks</h2>
            <NewTask onAdd={onAdd} />
            {tasks.length === 0 && <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>}
            {tasks.length > 0 && (
                <ul className="p-4 mt-8 bg-stone-200 rounded-md ">
                    {tasks.map(
                        (task) =>
                            task.projectId === selectedProjectId && (
                                <li
                                    key={task.id}
                                    className="flex justify-between my-4"
                                >
                                    <span>{task.text}</span>
                                    <button className="bg-stone-300 text-stone-700 hover:text-red-500 px-2 py-1 rounded-md">
                                        Clear
                                    </button>
                                </li>
                            )
                    )}
                </ul>
            )}
        </section>
    );
}
