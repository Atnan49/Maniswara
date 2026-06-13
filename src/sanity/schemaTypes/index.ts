import { type SchemaTypeDefinition } from 'sanity'

import { menuCategoryType } from './menuCategory'
import { menuItemType } from './menuItem'
import { promoType } from './promo'
import { settingsType } from './settings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [menuCategoryType, menuItemType, promoType, settingsType],
}
