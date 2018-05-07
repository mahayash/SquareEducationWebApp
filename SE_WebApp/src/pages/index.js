import React from 'react'
import Link from 'gatsby-link'
import { Button } from 'react-bootstrap'
import SpotLightSlider from '../components/Slider/spotLightSlider'
import MultiContentSlider from '../components/Slider/multiContentSlider'

export default function IndexPage({ data }) {
  console.log('test' + data)
  let topScorer = []
  let subjectHighest = []
  let growthAchieved = []

  var dataStr = data.allMongodbSquareDbStudentscores.edges
  for (let i = 0; i < dataStr.length; i++) {
    const item = dataStr[i]
    switch (item.node.diplayInCategories) {
      case 1:
        topScorer.push(item)
        break
      case 2:
        subjectHighest.push(item)
        break
      case 3:
        growthAchieved.push(item)
        break
    }
  }
  console.log('test 2' + dataStr)

  return (
    /** Pre-defined  */
    <div>
      <SpotLightSlider />
      <MultiContentSlider
        displayValue={topScorer}
        displayInCategory={'Top Scorer'}
      />
      <MultiContentSlider
        displayValue={subjectHighest}
        displayInCategory={'Subject Highest'}
      />
      <MultiContentSlider
        displayValue={growthAchieved}
        displayInCategory={'Growth Achieved'}
      />
    </div>
  )
}
export const studentQuery = graphql`
  query studentResult {
    allMongodbSquareDbStudentscores {
      edges {
        node {
          studentName {
            last
            first
          }
          id
          percentScored
          examination
          school
          courses
          currentPercent
          diplayInCategories
          lastPercent
          studentRank
          scoredIn {
            algebra
            english
            geography
            geometry
            hindi
            history
            marathi
            science1
            science2
          }
        }
      }
    }
  }
`
