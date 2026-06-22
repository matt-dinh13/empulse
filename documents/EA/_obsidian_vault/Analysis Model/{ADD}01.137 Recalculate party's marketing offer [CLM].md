---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/Offer management/Access rights"
domain: "Analysis Model"
element_id: 1836173
diagrams: 4
connections: 4
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}01.137 Recalculate party's marketing offer [CLM]

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Offer management/Access rights

## 📝 Notes

{ADD CLM-5227/}

The purpose of this technical use case is to initiate the recalculation of marketing offers for a particular party by performing the following sub-operations:

	
- Update the data of the respective party stored in PIF (with data collected on the front-end of the source application) either in customer or an applicant structures
	
- Provide additional offer recalculation input data that is not directly related to the party to an external module in order to trigger the scoring of the party and subsequent recalculation of their marketing offer itself.


This use case was derived from LOR's original 01.137 Recalculate party's marketing offer to split the code base in support of future modularisation out of BSL into a new module.

## 🔗 Connections (4)

- → Realisation: [[01.137 Recalculate party's marketing offer]]
- → Association: [[Party Scoring Tool (PST)]]
- → Association: [[Zeebe (WF engine for μ-service orchestration)]]
- ← UseCase «include»: [[{ADD}01.143 Recalculate clients's x-sell offer [CLM]]]

## 📊 Appears In (4 diagrams)

- Custom: Access rights
- Custom: CBL-17584 (CLM-5227) BOS/Zeebe implementation of PST: consumers calling new APIs Pt 1
- Use Case: Customer offers - UseCase Model
- Use Case: Offer management
