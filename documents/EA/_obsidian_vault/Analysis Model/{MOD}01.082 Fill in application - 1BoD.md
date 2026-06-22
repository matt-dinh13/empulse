---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Fill in application - 2SP/Access Rights"
domain: "Analysis Model"
element_id: 1811348
diagrams: 11
connections: 22
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.082 Fill in application - 1BoD

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Fill in application - 2SP/Access Rights

## 📝 Notes

This use case describes how first block of data (1BoD) is filled in within the two stage sales process.

## 🔗 Connections (20)

- ← Dependency: [[Client consent - product AF (GUIElement 1330400)]]
- ← Dependency: [[Client identification (GUIElement 1462038)]]
- ← UseCase «include»: [[{MOD}01.020 Create contract]]
- ← Realisation: [[Fill in application (GUIElement 1755487)]]
- ← Dependency: [[Product AF]]
- → NoteLink: [[First block of data _ First block of data]]
- → Dependency: [[Order of documents and attributes on them]]
- → Dependency: [[Algorithm_ Generate Contract Code]]
- → Dependency: [[Algorithm_ Generate Deal Code]]
- → Dependency: [[Get document containers for applicable client scoring segment]]
- → Dependency: [[Document distribution in AF]]
- → Dependency: [[Creation of document object]]
- → Realisation: [[01.082 Fill in application - 1BoD (all salesrooms)]]
- → Dependency: [[Consent documents]]
- → Realisation: [[01.082 Fill in application - 1BoD]]
- → Dependency: [[Access control to Contract by Salesroom]]
- → Realisation: [[Application form filling for 2SP - 1BoD]]
- → UseCase «include»: [[01.080 Fill in application (UseCase 1821367)]]
- ← UseCase «include»: [[01.010 Choose product offer (UseCase 1827711)]]
- ← Association: [[User (Actor 1880892)]]

## 📊 Appears In (11 diagrams)

- Custom: Access Rights
- Custom: Create contract
- Custom: Offer detail - Panel of buttons
- Custom: PAYM-1613 - createOrUpdateContract2BankAccount
- Custom: PAYM-1613 - other methods
- Custom: PAYM-1613 - savingOfPaymentChannels
- Custom: Product AF
- Use Case: Contract origination
- Use Case: Fill in application
- Use Case: Fill in application - 2SP
- Use Case: Photo component
