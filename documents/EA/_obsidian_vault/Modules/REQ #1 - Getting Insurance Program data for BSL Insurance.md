---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-548 INSR - integrate BSL to module API"
domain: "Modules"
element_id: 1601389
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 REQ #1 - Getting Insurance Program data for BSL Insurance

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-548 INSR - integrate BSL to module API

## 📝 Notes

A list of use cases/rule where REST INSR get insurance program will be called:

	
- 11.010 Create insurance contract
	
- 11.122 Finalize insurance period (Calculate net revenue share for insurance company, Create Premium Payment Channel)
	
- 11.020 Add insurance period (Calculate net revenue share for insurance company, Determine register inclusion date)
	
- 08.010 Show service information - Insurance Program name showing
	
- InsuranceTransactionRequest message (CITR) - salesroom code related to insurance program
	
- CELAccountTransactionsRequest message (CATR) – change relation to InsuranceProgramExternalId only
	
- 05.230 Process outgoing payment  - Generate payment orders from outgoing payments -  – change relation to InsuranceProgramExternalId only


ClmFeatureFlag.useNewInsrProgram (boolean) is used for distinction which function (BSL/INSR) is to be used

## 📊 Appears In (1 diagrams)

- Custom: CSI-548 INSR - integrate BSL to module API
