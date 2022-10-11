import React, { Fragment } from 'react'
import { useQuery } from '@apollo/client';

import GET_AUTHORS from '../graphql/getAuthors';


const Author = () => {
    const {loading, error, data} = useQuery(GET_AUTHORS);

    console.log(data);

  if (loading) return <p>loading...</p>
  if (error) return <p>"Error... ${error.message}"</p>
  
    return (
    <Fragment>
        {data.posts.map((posts) =>(
            <div key={posts.lenght}>
                {posts.rows.title} - {author.pages}
            </div>
        ))}
    </Fragment>
  )
}

export default Author;

