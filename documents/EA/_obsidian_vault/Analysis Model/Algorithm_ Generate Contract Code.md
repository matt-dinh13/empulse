---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Fill in application - 1SP/UseCase Model"
domain: "Analysis Model"
element_id: 1878438
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Algorithm: Generate Contract Code

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Fill in application - 1SP/UseCase Model

## 📝 Notes

Each object of Contract will have 10 digit Contract Code in format: YYSSSSSSSS
Where:
Code		Length	Description
YY  		2	Calculation of (actual year (in YYYY format) minus 1980)
SSSSSSSS	8	Sequence starting 00000001
{DEL 2016.04}C	1	Control digit for modulo 11{/DEL}
YY example: for year 2011 is stored number 31 (actual year (2011) minus 1980 = 31)
{DEL 2016.04}If Contract Code is not Modulo 11 then system will create Contract Code with next available number from sequence.{/DEL}

## 🔗 Connections (2)

- ← Dependency: [[{MOD}01.081 Fill in application - 1SP]]
- ← Dependency: [[{MOD}01.082 Fill in application - 1BoD]]

## 📊 Appears In (2 diagrams)

- Use Case: Fill in application - 1SP
- Use Case: Fill in application - 2SP
