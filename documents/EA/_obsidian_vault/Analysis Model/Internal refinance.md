---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Consolidation"
domain: "Analysis Model"
element_id: 1612893
diagrams: 1
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 Internal refinance

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Consolidation

## 📝 Notes

Grid containing the list of client's existing internal loan contracts (i.e. contracts with HCI), that shall be consolidated/refinanced by respective application.

Visibly only if at least one internal refinanced contract exists for the application (i.e. Contract->Temporary_Application->TempAppl_Refinanced_Contract[.Is_Internal=TRUE] exits).

Note: The ordering of individual records within the grid cannot be changed by user.

Localization code:
CON_Internal_Refinance

## 📊 Appears In (1 diagrams)

- Custom: Tab - Consolidation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Contract number | Contract Code |  |
| Amount | Financial Amount |  |
