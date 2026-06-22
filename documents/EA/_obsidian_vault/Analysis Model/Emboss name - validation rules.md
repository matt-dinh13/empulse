---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/Product"
domain: "Analysis Model"
element_id: 1787136
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Emboss name - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/Product

## 📝 Notes

If rule Emboss Name Setting Allowed returns False and embossName is empty string then return (embossName is valid).
System calls CMS for validation of emboss name (CardModificationWS.VerifyEmbossedName) 
with parameters of VerifyEmbossedNameRequest:
- embossedName,
- cardHolderName (firstName, middleName, surname),
- cardType = value is evaluated  according to the rule Get Renewal Card Type with parameter TA ->OFP ->Offer Card Service->Service.
which returns VerifyEmbossedNameResponse:
- resultCode
- embossNameViolatedRules.
If resultCode<> SUCCESS then validation fails and error message is displayed according to returned resultCode:
INSUFFICIENT_PARAMETERS_FOR_EMBOSSNAME_VALIDATION (MSG_ErrEmbossMissingParameters)
MISSING_SURNAME (MSG_ErrEmbossSurname)
INVALID_CHARACTERS (MSG_ErrEmbossInvalidChars)
LENGTH_VIOLATION (MSG_ErrEmbossInvalidLength)
otherwise (MSG_ErrEmbossOtherError)
If CMS does not respond then system logs an error and error message is displayed (MSG_CMSNotResponding).

Parameters for VerifyEmbossNameRequest:
- embossedName (checked value from the form)
- values cardHolderName(firstName, middleName, surname) are taken from AppForm (section Personal data) according to country specific rules for mapping of names(1-6)

## 🔗 Connections (4)

- ← Dependency: [[{MOD}Emboss name]]
- → Dependency: [[Emboss Name Setting Allowed]]
- → Dependency: [[Get Renewal Card Type]]
- → Dependency: [[CardModificationWS (Interface 1598798)]]

## 📊 Appears In (1 diagrams)

- Custom: Product validation
