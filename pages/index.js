import React from 'react'
import posts from '../data/post'
import Link from 'next/link'

export default class extends React.Component {
  static getInitialProps () {
    return { posts: posts }
  }

  render () {
    return (
      <div>
      <div>
        <h3> NEXTHRONE - THE REVELATION OF GAME OF THRONES CHARACTERS </h3>
      </div>
      <table className="this_table">
        <thead id="this_header">
          <tr>
              <th id="this_th">Character</th>
              <th>Real Name</th>
          </tr>
        </thead>
        <tbody>
          {
              this.props.posts.map( (post, i) => (
                  <tr key={i}>
                      <td>{ post.codeName }</td>
                      <td>
                        <Link href={`/account?id=${post.id}`}>{ post.realName }</Link>
                      </td>
                  </tr>
              ))
          }
       </tbody>
       <style jsx>{`
      th {
	    background: #00cccc;
	    color: #fff;
	    text-transform: uppercase;
	    fontSize: 12px;
	    padding: 12px 35px;
	  }
	  header {
	    font: 15px Monaco;
	    text-align: center;
	  }
	  table {
	    font-family: Arial;
	    margin: 25px auto;
	    border-collapse: collapse;
	    border: 1px solid #eee;
	    border-bottom: 2px solid #00cccc;
	  }

	  td {
	    color: #999;
	    border: 1px solid #eee;
	    padding: 12px 35px;
	    border-collapse: collapse;
	  }

	  list {
	    padding: 50px;
	    text-align: center;
	  }

	  photo {
	    display: inline-block;
	  }

	  photoLink {
	    color:	 #333;
	    verticalAlign: middle;
	    cursor:	 pointer;
	    background:	#eee;
	    display: inline-block;
	    width: 250px;
	    height: 250px;
	    line-height:	250px;
	    margin:	10px;
	    border:	2px solid transparent;

	    }
    `}</style>
      </table>
      </div>
    )
  }
}
