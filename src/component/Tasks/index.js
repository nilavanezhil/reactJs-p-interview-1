import {TaskName, TagsCategory, ListItem} from './style.js'

const Tasks = props => {
  const {taskDetails} = props
  const {taskName, taskCategory} = taskDetails

  return (
    <ListItem>
      <TaskName>{taskName}</TaskName>
      <TagsCategory>{taskCategory}</TagsCategory>
    </ListItem>
  )
}

export default Tasks
