import React, { Fragment } from 'react'
import { useQuery } from '@apollo/client';

import GET_AUTHORS from '../graphql/getAuthors';


const Author = () => {
    const result = useQuery(GET_AUTHORS);
    const {data, error, loading} = useQuery(GET_AUTHORS);

    console.log(result);

  if (loading) return <p>loading...</p>
  if (error) return <p>"Error... ${error.message}"</p>
  
    return (
    <Fragment>
        {data.posts.map((author) =>(
            <div key={author.lenght}>
                {author.rows.title} - {author.pages}
            </div>
        ))}
    </Fragment>
  )
}

export default Author;

