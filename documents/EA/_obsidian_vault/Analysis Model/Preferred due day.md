---
type: GUIElement
stereotype: "combo"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model"
domain: "Analysis Model"
element_id: 1686337
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Preferred due day

> **Type**: GUIElement · **Stereotype**: «combo»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model

## 📝 Notes

Transformed from text to combo box.
LDM: OfferFinancialParameters.PreferredDueDate
Visible and enabled according the rule Allow change of Preferred Due day.
{PCG-2005 ADD}The Preferred due day combo-box on Product offer detail screen is filled with data from DUE_DAYS_MAP from service (see Service PREFDD). If not filled in service take data from global parameter (current functionality){/ADD}
{DEL}Map of available preferred due days is defined by global parameter{/DEL}(see Product Catalog Global Parameter):
PreferredDueDaysMapCEL - for offers based on CEL product
PreferredDueDaysMapREL - for offers based on REL product
Each available day is displayed as an item (day number) in combo box. Empty value must be available.

Default: 
Current value of OfferFinancialParameters.PreferredDueDay.
If the default value = 31 then the field is empty and disabled.
If the default value <= 28 and is not defined in combo box then it is added as available item.
Localization code: PRD_PreferredDueDay

## 🔗 Connections (2)

- → Dependency: [[Allow change of Preferred Due day]]
- → Dependency: [[Preferred due day - validation]]

## 📊 Appears In (1 diagrams)

- Custom: Change product offer parameters
