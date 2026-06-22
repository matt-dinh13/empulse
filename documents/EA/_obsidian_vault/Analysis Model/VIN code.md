---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract search/User Interface Model"
domain: "Analysis Model"
element_id: 1822447
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ VIN code

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract search/User Interface Model

## 📝 Notes

Serial number of the commodity.

Not visible in KZ.

In LDM search for:
System tries to get the commodity (code representing the commodity ID) according to the rule Search application commodity with following parameters on the input:
   - SearchCriterionType = 'SERIAL_NUMBER'
   - SearchCriterionValue = "*" + input value from the field //E.g. '*123456'

Localization code:
GEN_VINCODE

## 🔗 Connections (2)

- → Dependency: [[Search application commodity]]
- → Dependency: [[Contract search criteria restrictions - common]]

## 📊 Appears In (1 diagrams)

- Custom: Search for contract
