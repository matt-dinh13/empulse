---
type: Object
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Payment channels"
domain: "Analysis Model"
element_id: 1879167
diagrams: 1
connections: 0
tags:
  - object
  - analysis-model
---

# 🔸 Interest rates

> **Type**: Object · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Payment channels

## 📝 Notes

Source LDM:
Tariff Item Type.Code+Tariff Item.Percentage
where Tariff Item ->Tariff item type ->Tariff item category=“Interest“
and Tariff Item ->Tariff item type.Active=1

Localization code: PRD_OfferRELInterestRates

{ADD PAYM-5325}
Call product catalogue REST API to get  PIR values for list of code items (https://prc.ph00a1.cz.infra/swagger-ui/index.html#/CodeLists/getCodeListItems):
- name = "PIR_SETTINGS"
- codes = Codes of code list items delimited by comma
{/ADD}

## 📊 Appears In (1 diagrams)

- Custom: Tab-Payment channels

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Interest Type | string |  |
| Value | percentage |  |
