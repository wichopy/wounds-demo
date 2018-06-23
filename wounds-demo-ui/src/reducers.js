// import ACTIONS

const defaultState = {}

const app = (state = defaultState, action) => {
  const actionType = action.actionType

  switch (actionType) {
    case 'HELLO':
      return {
        ...state,
        hello: 'world',
      }
  }
}

export default app
