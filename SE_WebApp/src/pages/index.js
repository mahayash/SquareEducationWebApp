import React from 'react'
import Link from 'gatsby-link'
import { Button } from 'react-bootstrap';
import SpotLightSlider from '../components/Slider/spotLightSlider';


export default function IndexPage({ data }) {
  console.log('test' + data)
  var dataStr = data.allMongodbSquareDbStudentscores.edges
  console.log('test 2' + dataStr)

  return (
    
    <SpotLightSlider />
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

// export const homeQuery = graphql`
//   query postDataQuery {
//     allMongodbSquarePosts {
//       edges {
//         node {
//           title
//         }
//       }
//     }
//   }
// `;

// export const homeQuery = graphql`
//   query courseDataQuery {
//     allMongodbSeLmsCourses {
//       edges {
//         node {
//           id
//           Title
//           Description
//         }
//       }
//     }
//   }
// `;
