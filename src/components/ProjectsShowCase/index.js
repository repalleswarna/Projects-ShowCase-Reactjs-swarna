import {Component} from 'react'
import Loader from 'react-loader-spinner'
import ProjectItem from '../ProjectItem'
import {
  AppContainer,
  NavContainer,
  NavHeader,
  NavLogo,
  ContentSection,
  Content,
  SelectionOption,
  OptionInput,
  ProjectsUnorderedList,
  FailureViewContainer,
  FailureViewImage,
  FailureHeading,
  FailureNote,
  RetryButton,
  LoaderContainer,
} from './styledComponents'
/* This is the list (static data) used in the application. You can move it to any component if needed. */
const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

class ProjectShowCase extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    projectsData: [],
    activeCategoryFilterId: categoriesList[0].id,
  }

  componentDidMount() {
    this.fetchProjectsData()
  }

  fetchProjectsData = async () => {
    const {activeCategoryFilterId} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const projectsApiUrl = `https://apis.ccbp.in/ps/projects?category=${activeCategoryFilterId}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(projectsApiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.projects.map(eachProject => ({
        id: eachProject.id,
        name: eachProject.name,
        imageUrl: eachProject.image_url,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        projectsData: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeCategoryOption = event => {
    this.setState(
      {activeCategoryFilterId: event.target.value},
      this.fetchProjectsData,
    )
  }

  renderCategoryFiltersList = () => {
    const {activeCategoryFilterId} = this.state
    return (
      <SelectionOption
        id="activeOption"
        value={activeCategoryFilterId}
        onChange={this.onChangeCategoryOption}
      >
        {categoriesList.map(eachCategory => {
          const {id, displayText} = eachCategory
          return (
            <OptionInput key={id} value={id}>
              {displayText}
            </OptionInput>
          )
        })}
      </SelectionOption>
    )
  }

  renderProjectsListView = () => {
    const {projectsData} = this.state

    return (
      <ProjectsUnorderedList>
        {projectsData.map(eachProject => (
          <ProjectItem key={eachProject.id} projectDetails={eachProject} />
        ))}
      </ProjectsUnorderedList>
    )
  }

  onRetry = () => {
    this.fetchProjectsData()
  }

  renderFailureView = () => (
    <FailureViewContainer>
      <FailureViewImage
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureNote>
        We cannot seem to find the page you are looking for.
      </FailureNote>
      <RetryButton onClick={this.onRetry}>Retry</RetryButton>
    </FailureViewContainer>
  )

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader color="#0284c7" height={80} type="ThreeDots" width={80} />
    </LoaderContainer>
  )

  renderProjects = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProjectsListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <AppContainer>
        <NavContainer>
          <NavHeader>
            <NavLogo
              src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
              alt="website logo"
            />
          </NavHeader>
        </NavContainer>
        <ContentSection>
          <Content>
            {this.renderCategoryFiltersList()}
            {this.renderProjects()}
          </Content>
        </ContentSection>
      </AppContainer>
    )
  }
}

export default ProjectShowCase
