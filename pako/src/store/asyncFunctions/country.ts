
import { store } from "../index"
import { ACTIONS } from "../actions/index"
import { CurrentCountry, getCountryService } from "../services/countryService"
function getDispatchStore() {
    return store.dispatch
}

export async function getCountryAction(countryName: string) {
    const dispatch = getDispatchStore()
    dispatch(setLoader(true))
    try {
        const currentCountry = await getCountryService(countryName)
        dispatch(getCountrySuccess(currentCountry))
    } catch (ex: any) {
        dispatch(getCountryError({ message: ex.message }))
    } finally {
        dispatch(setLoader(false))
    }
}

function setLoader(value: boolean) {
    return { type: ACTIONS.CURRENT_COUNTRY.GET_COUNTRY_SET_LOADER, payload: value }
}
function getCountrySuccess(currentCountry: CurrentCountry) {
    return { type: ACTIONS.CURRENT_COUNTRY.GET_CURRENT_COUNTRY_SUCCESS, payload: currentCountry }
}
function getCountryError(error: { message: string }) {
    return { type: ACTIONS.CURRENT_COUNTRY.GET_CURRENT_COUNTRY_ERROR, payload: error }
}