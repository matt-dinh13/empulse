---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-1321 (CLM-4407) - REL Write-off - BSL AccountClosure processing"
domain: "Requirements Model"
element_id: 1826257
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CLM-4407 - REL Write-off - BSL AccountClosure processing

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-1321 (CLM-4407) - REL Write-off - BSL AccountClosure processing

## 📝 Notes

Implement in BSL:

	
- check contract status, if status = T ends processing
	
- create/update CST request in status FINISH (resultType in (TERMINATION_SUCESSFUL, CANCEL_SUCESSFUL, PAYOFF_SUCESSFUL))
	
- create/update CST request in status RES_ERROR (resultType = CANCEL_ERROR, PAYOFF_ERROR)
	
- Adjust Pay-off processing behaviour:
- Remove check for CST pay-off request and create CST pay-off request if overpayment = 0
- Send JMS ContractPayoffProcessingResult only when requestID is not null
- Remove call of LCS SOAP TerminationStatus (leftover after synchronous pay-off)

## 📊 Appears In (1 diagrams)

- Custom: CBL-1321 (CLM-4407) - REL Write-off - BSL AccountClosure processing
