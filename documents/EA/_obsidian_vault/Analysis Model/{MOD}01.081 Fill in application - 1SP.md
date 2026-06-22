---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Fill in application - 1SP/Access Rights"
domain: "Analysis Model"
element_id: 1741188
diagrams: 10
connections: 22
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.081 Fill in application - 1SP

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Fill in application - 1SP/Access Rights

## 📝 Notes

This use case enables user to fill in application form with all necessary data. Form is pre-filled by information entered during product offer selection. User fills in data to application, information about photo or photo itself can be saved into application also. This use case is intended for 1-phase process. 

This is a generic use case, for particular variants based on country specifics, see a particular inherited use case.

## 🔗 Connections (20)

- ← Dependency: [[Client consent - product AF (GUIElement 1330400)]]
- → Dependency: [[Get client's remotely created applications to display]]
- → Dependency: [[Algorithm_ Calculate DDM limit]]
- → Realisation: [[Access control to Contract by Salesroom]]
- → Dependency: [[Consent documents]]
- → Realisation: [[01.081 Fill in application - 1SP]]
- → Dependency: [[Order of documents and attributes on them]]
- → Dependency: [[Algorithm_ Generate Contract Code]]
- → Dependency: [[Document distribution in AF]]
- → Realisation: [[Application form filling for 1SP]]
- → Realisation: [[01.081Fill in application - 1SP (all salesrooms)]]
- → Dependency: [[Algorithm_ Generate Deal Code]]
- → Dependency: [[Creation of document object]]
- → UseCase «invoke»: [[01.080 Fill in application (UseCase 1821367)]]
- ← Realisation: [[Fill in application (GUIElement 1755487)]]
- ← Dependency: [[Product AF]]
- ← Dependency «invokes»: [[01.010 Choose product offer (UseCase 1827711)]]
- ← UseCase «extend»: [[01.120 Delete contract document]]
- ← UseCase «extend»: [[{MOD}01.100 Add contract document]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (10 diagrams)

- Custom: Access Rights
- Custom: Offer detail - Panel of buttons
- Custom: PAYM-1613 - createOrUpdateContract2BankAccount
- Custom: PAYM-1613 - other methods
- Custom: PAYM-1613 - savingOfPaymentChannels
- Custom: Product AF
- Use Case: Contract origination
- Use Case: Fill in application
- Use Case: Fill in application - 1SP
- Use Case: Photo component
