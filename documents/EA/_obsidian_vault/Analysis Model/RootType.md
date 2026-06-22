---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONSENT_DATA"
domain: "Analysis Model"
element_id: 1878203
diagrams: 4
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 RootType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONSENT_DATA

## 📝 Notes

Object containing the root data, which can be possibly used in relation with various entities.

## 🔗 Connections (4)

- ← Generalization «XSDextension»: [[consentData]]
- ← Generalization «XSDextension»: [[directDebitMandateForm]]
- ← Generalization «XSDextension»: [[contractData]]
- → Dependency «use»: [[LanguageType]]

## 📊 Appears In (4 diagrams)

- Logical: HO_CONSENT_DATA
- Logical: HO_CONTRACT_DATA - client data
- Logical: HO_DIRECT_DEBIT_MANDATE_FORM
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| language | LanguageType |  |
