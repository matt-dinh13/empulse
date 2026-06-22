---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Fill in application - 1SP/UseCase Model"
domain: "Analysis Model"
element_id: 1878450
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Algorithm: Generate Deal Code

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Fill in application - 1SP/UseCase Model

## 📝 Notes

Each object of Deal will have 12 digit Deal Code in format: YYFSSSSSSSSC
Where:
Code	Length	Description
YY	2	Calculation of (actual year (in YYYY format) minus 1980)
F	1	Free position (maybe for regions or other purposes. It can be different in different countries). Defined by Global Parameter DealCodeFreePosition
SSSSSSS	8	Sequence starting 00000001
C	1	Control digit for modulo 11
YY example: for year 2011 is stored number 31 (actual year (2011) minus 1980 = 31)
If Deal Code is not Modulo 11 then system will create Deal Code with next available number from sequence.

## 🔗 Connections (2)

- ← Dependency: [[{MOD}01.081 Fill in application - 1SP]]
- ← Dependency: [[{MOD}01.082 Fill in application - 1BoD]]

## 📊 Appears In (2 diagrams)

- Use Case: Fill in application - 1SP
- Use Case: Fill in application - 2SP
