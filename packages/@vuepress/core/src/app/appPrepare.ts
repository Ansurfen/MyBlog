import { debug } from '@vuepress/utils'
import type { App } from '../types'
import {
  prepareClientAppEnhances,
  prepareClientAppRootComponents,
  prepareClientAppSetups,
  prepareLayoutComponents,
  preparePageComponent,
  preparePageData,
  preparePagesComponents,
  preparePagesData,
  preparePagesRoutes,
  prepareSiteData,
} from './prepare'

const log = debug('vuepress:core/app')

/**
 * Prepare files for development or build
 *
 * - page components
 * - routes
 * - site data
 * - other files that generated by plugins
 */
export const appPrepare = async (app: App): Promise<void> => {
  log('prepare start')

  // generate page component files
  for (const page of app.pages) {
    await preparePageComponent(app, page)
  }
  await preparePagesComponents(app)

  // generate page data files
  for (const page of app.pages) {
    await preparePageData(app, page)
  }
  await preparePagesData(app)

  // generate routes file
  await preparePagesRoutes(app)

  // generate layout components map file
  await prepareLayoutComponents(app)

  // generate site data file
  await prepareSiteData(app)

  // generate client app enhances file
  await prepareClientAppEnhances(app)

  // generate client app root components file
  await prepareClientAppRootComponents(app)

  // generate client app setups file
  await prepareClientAppSetups(app)

  // plugin hook: onPrepared
  await app.pluginApi.hooks.onPrepared.process(app)

  log('prepare finish')
}
