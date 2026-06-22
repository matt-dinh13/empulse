---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/UseCase Model"
domain: "Analysis Model"
element_id: 1879431
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Calculate maximum validity of prepared documents

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/UseCase Model

## 📝 Notes

- System gets parameter defining number of days after approval of the contract when the client's documentation can be valid (Product Profile. Maximum documents preparation period).
	
- System gets date of approval of the contract.
	
- System calculates maximum validity of prepared documents as date of approval plus parameter - 1. If the parameter is not defined, maximum validity is unlimited.


E.g. If value of parameter=1, then maximum validity is approval date.

## 🔗 Connections (3)

- ← Dependency: [[01.182 Prepare documentation manually]]
- ← Dependency: [[01.096 Prepare documentation externally (UseCase 1879294)]]
- ← Dependency: [[Calculate validity of prepared documents]]

## 📊 Appears In (1 diagrams)

- Use Case: Prepare documentation to sign
