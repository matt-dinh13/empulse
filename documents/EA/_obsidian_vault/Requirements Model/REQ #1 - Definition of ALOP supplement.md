---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-244 (CLM-971) Cash on card with separate limit (ALOP)"
domain: "Requirements Model"
element_id: 1612002
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Definition of ALOP supplement


> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-244 (CLM-971) Cash on card with separate limit (ALOP)

## 📝 Notes

Goal of this requirement is extension of the current Supplement domain with new attributes and entities.
Supposed ALOP Supplement definition (new):

	
- Supplement Type = ALOP
	
- Supplement transaction type (can be CASH or POS)
	
- If a notification (message) is send on a status change
	
- If can be canceled manually on Contract supplement tab
	
- Extend possibility of LAP vector setting (replace Supplement.Evaluation Request Type)
	
- Extend possibility of  Supplement process setting (replace/extend Supplement Cancellation Setting entity)


Due to replacing Supplement.Evaluation Request Type attribute with a new Evaluation Request Definition entity, it is needed to change getting of Scoring Type (initialWfCode) in the current CLIP and LRES vectors for LAP approval.

Due to replacing the Supplement Cancellation Setting, it is needed to change getting definition of cancellation timeout in Create contract supplement rule and Change status of Contract Supplement

Planned development: Sprint #80

## 🔗 Connections (1)

- → Generalization: [[ALOP Process description of CLM part support]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-244 (CLM-971) Cash on card with separate limit (ALOP)
