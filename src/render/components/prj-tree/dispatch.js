import utils from '../../../utils'
let { dispatch }= utils.storeUtils

import actions from './actions'
let { showFileContent } = actions

export default {
  dispatch_fileShowed_path: (action_payload) => {
    dispatch(showFileContent(action_payload))
  }
}