---
type: Requirement
stereotype: "business rule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Messages processing/Business Rules"
domain: "Analysis Model"
element_id: 1835807
diagrams: 13
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Send ContractFullInfoRequest

> **Type**: Requirement · **Stereotype**: «business rule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Messages processing/Business Rules

## 📝 Notes

{ADD CLM-4643/}
Input: Contract
 

	
- If Contract has no financial parameters (Contract -> Financial parameters do not exist) then an exception is logged: "Skipping sending of ContractFullInfo for {Contract.Code}, financial parameters are missing, most likely application not contract yet." and rule ends.
	
- System sends RabbitMQ ContractFullInfo notification for given contract.

## 🔗 Connections (1)

- ← Dependency: [[01.864 Generate notifications about contract securitization]]

## 📊 Appears In (13 diagrams)

- Custom: Business Rules
- Custom: CBL-14685 (CLM-4204) Migrate ContractFullInfoRequest to RabbitMQ
- Use Case: Cancel contract after sign
- Use Case: Contract finishing automatically
- Use Case: Contract finishing manually
- Use Case: Contract sale
- Use Case: Contract securitization
- Use Case: Pay-off CEL contract
- Use Case: Pay-off contracts from external system
- Use Case: Pay-off REL contract
- Use Case: Processing Contract Signed Event - Use Case Model
- Use Case: REL contract termination request
- Use Case: Write-off CEL contract
