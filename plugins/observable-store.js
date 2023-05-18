import { store } from './store'

/**
 * Injects the store into the context
 * @param context
 * @param inject
 */
export default (context, inject) => {
  inject('store', store)
}
