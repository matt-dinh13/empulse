---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1822829
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Default Emboss name

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

System calls CMS for generation of default emboss name (CardModificationWS.CreateEmbossedName) 
with parameters of CreateEmbossedNameRequest:
- cardHolderName (firstName, middleName, surname) - see below,
- cardType = value is evaluated  according to the rule Get Renewal Card Type with parameter TA ->OFP ->Offer Card Service->Service.
which returns
CreateEmbossedNameResponse:
- embossedName
- resultCode
If CMS does not respond then system logs an error and error message is displayed (MSG_CMSNotResponding).
If result code = SUCCESS then returned embossedName is set to the field Emboss name as default.
If result code = INSUFFICIENT_PARAMETERS_FOR_EMBOSSNAME_CREATION error message (MSG_ErrEmbossInsuffParameters) is displayed and embossedName is set to empty string.
If another result code is returned error message (MSG_ErrEmbossCreation) is displayed and embossedName is set to empty string.

Values cardHolderName (firstName, middleName, surname) are taken from AppForm (section Personal data) according to country specific rules for mapping of names(1-6).

## 🔗 Connections (4)

- ← Dependency: [[{MOD}Emboss name]]
- ← Dependency: [[Generate Emboss name (GUIElement 1716422)]]
- → Dependency: [[CardModificationWS (Interface 1598798)]]
- → Dependency: [[Get Renewal Card Type]]

## 📊 Appears In (1 diagrams)

- Custom: Product business rules
