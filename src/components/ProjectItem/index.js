import {
  ProjectItemLi,
  ProjectItemImage,
  ProjectItemName,
} from './styledComponents'

const ProjectItem = props => {
  const {projectDetails} = props
  const {id, name, imageUrl} = projectDetails
  return (
    <ProjectItemLi key={id}>
      <ProjectItemImage src={imageUrl} alt={name} />
      <ProjectItemName>{name}</ProjectItemName>
    </ProjectItemLi>
  )
}

export default ProjectItem
