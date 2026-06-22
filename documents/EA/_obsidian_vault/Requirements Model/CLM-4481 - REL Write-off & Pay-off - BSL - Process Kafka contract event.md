---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-1321 (CLM-4481) - REL Write-off & Pay-off - BSL - Process Kafka contract event"
domain: "Requirements Model"
element_id: 1826273
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CLM-4481 - REL Write-off & Pay-off - BSL - Process Kafka contract event

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-1321 (CLM-4481) - REL Write-off & Pay-off - BSL - Process Kafka contract event

## 📝 Notes

Process ContractPaidOff

	
- add CLM Feature flag as switch for processing pay-off in COMA or BSL


	
- Send ContractPaidOffSE
- Separate CSI processing/adapter in CSI package
-- Deactivate insurance contract - check idempotency

        - Separate CLM processing/adapter in CLM package
        -- Contract full info
        --If last finished CST Request.Request id is not null then send JMS ContractPayoffProcessingResult

Process ContractWrittenOff

	
- Send ContractWrittenOffSE
- Separate CLM processing/adapter in CLM package
-- Contract full info
-- Skip sending of WriteOffNotificationDto for REL contract

## 📊 Appears In (1 diagrams)

- Custom: CBL-1321 (CLM-4481) - REL Write-off & Pay-off - BSL - Process Kafka contract event
