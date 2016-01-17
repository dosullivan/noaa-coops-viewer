// Feed history changes to stores

export const HISTORY_UPDATE = 'HISTORY_UPDATE'

const updateHistory = (location) => ({ type: HISTORY_UPDATE, payload: location })

export const syncHistoryWithStore = (history, store) => {
  history.listen(location => {
    console.log(location)
    store.dispatch(updateHistory(location))
  })
}
