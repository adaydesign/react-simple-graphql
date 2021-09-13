import React, { useContext, useMemo } from 'react'
import {
    useQuery,
    gql
} from "@apollo/client";
import { FilterContext } from './App';

const Table = () => {
    const [filter] = useContext(FilterContext)
    const VOCAB_QUERY = useMemo(() => {
        return gql`
            query VocabsQuery {
            vocabs(where: {${filter.type}_contains: "${filter.text}"}) {
                meaning
                id
                vocab
            }
            }
            `;
    }, [filter])
    const { loading, error, data } = useQuery(VOCAB_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            <h3>display : {data.vocabs?.length || 0} word(s)</h3>
            {data.vocabs && data.vocabs.map((i, index) => <li key={`li_${index}`}>{i.vocab}={i.meaning}</li>)}
        </div>
    )
}

export default Table
