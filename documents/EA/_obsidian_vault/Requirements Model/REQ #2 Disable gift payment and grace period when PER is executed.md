---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6572 (CLM-2126) Disable gift payment and grace period when PER is executed"
domain: "Requirements Model"
element_id: 1457069
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #2 Disable gift payment and grace period when PER is executed

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6572 (CLM-2126) Disable gift payment and grace period when PER is executed

## 📝 Notes

Goal of this task is to cancel Gift Payment or Grace Period services on the processed contract when:

	
- Partial Early Repayment is executed


	
- global database parameter CANCEL_GIFTP_ON_PER_EXE = True for Gift Payment


	
- global database parameter CANCEL_GRPER_ON_PER_EXE = True for Grace Period

## 📊 Appears In (1 diagrams)

- Custom: CBL-6572 (CLM-2126) Disable gift payment and grace period when PER is executed
