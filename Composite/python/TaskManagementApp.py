from Tasks import Task, SimpleTask, TaskList

def main() -> None:
    simple_task_1: Task = SimpleTask(title="Complete Coding")
    simple_task_2: Task = SimpleTask(title="Write Documentation")
    
    project_tasks: Task = TaskList(title="Project Tasks")
    project_tasks.add_task(simple_task_1)
    project_tasks.add_task(simple_task_2)
    
    phase_1_tasks: Task = TaskList(title="Phase 1 Tasks")
    phase_1_tasks.add_task(SimpleTask(title="Design"))
    phase_1_tasks.add_task(SimpleTask(title="Development"))
    
    project_tasks.add_task(phase_1_tasks)
    
    project_tasks.display()
    

if __name__ == '__main__':
    main()