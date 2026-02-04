import React from 'react'
import MacWindow from './MacWindow'
import githubData from '../../assets/github.json'
import './github.scss'
const GitCard = ({data = {id: 1, image: "", title: "", description: "", tags: [], github: "", demo: ""}}) => {
    return <div className="card">
        <img src={data.image} alt="" />
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <div className="tags">
            {data.tags.map((tag,index) => {
                return <div className="tag" key={index}>{tag}</div>
            })}
        </div>
        <div className="urls">
            <a href={data.github}>Repository</a>
            <a href={data.demo}>{data.demo && "Live Demo"}</a>
        </div>
    </div>
}

const Github = ({windowName, setWindowsState}) => {
  return (
    <div>
      <MacWindow windowName = {windowName} setWindowsState = {setWindowsState}>
        <div className="cards">
            {githubData.map((project) => {
                return <GitCard key={project.id} data = {project}/>
            })}
        </div>
      </MacWindow>
    </div>
  )
}

export default Github
