import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ChatActionsCreator from '../../actions/chatActionsCreator'

const ListMessages = () => {
  const { isFetching, error, messages } = useSelector(state => state.chat);
  const {getMessagesRequest} = bindActionCreators(ChatActionsCreator, useDispatch());
  useEffect(()=>{
    getMessagesRequest();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 
  return (
    <section>
      {isFetching && <h2>Loading...</h2>}
      {error && <h3>{JSON.stringify(error)}</h3>}
      <ul>
        {messages.length > 0 &&
          messages.map(msg => (
            <li key={msg._id}>
              {msg.content} from {msg.user}
            </li>
          ))}
      </ul>
    </section>
  )
}

export default ListMessages;
