import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],
    });
    // undefined: no project selected, not adding a project
    // null: adding a new project, no project selected

    function handleStartAddProject() {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: null,
            };
        });
    }

    function handleAddProject(projectData) {
        setProjectsState((prevState) => {
            const newProject = {
                id: Math.random().toString(),
                ...projectData,
            };
            return {
                ...prevState,
                projects: [...prevState.projects, newProject],
            };
        });
    }

    console.log(projectsState);

    let content;

    if (projectsState.selectedProjectId === null) {
        content = <NewProject onAddProject={handleAddProject} />;
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectSelected onSave onStartAddProject={handleStartAddProject} />;
    }

    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectsSidebar onStartAddProject={handleStartAddProject} />
            {content}
        </main>
    );
}

export default App;
