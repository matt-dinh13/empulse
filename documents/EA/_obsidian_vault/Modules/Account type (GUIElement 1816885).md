---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/MTCACC/User Interface"
domain: "Modules"
element_id: 1816885
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Account type

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/MTCACC/User Interface

## 📝 Notes

LDM: SERVICE.MTCACC.AccountType{DEL PCG-2984}.Name{/DEL}
System gets list of account types (Code + Name) from external module (Account management (AM)) by rest service call GET request: /openapi/v2/technicalService/enums  with following parameters:
- enumName = accountTypes

If external module does not respond then message MSG_AM_NotAvailable is displayed and UC ends.

Prefilled with SERVICE.MTCACC.AccountType

Localization code: SER_AccountType

## 📊 Appears In (1 diagrams)

- Custom: Set MTCACC Service properties
