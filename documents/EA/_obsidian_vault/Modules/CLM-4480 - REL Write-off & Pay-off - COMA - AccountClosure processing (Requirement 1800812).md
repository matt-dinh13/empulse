---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-1321/CLM-4480 - REL Write-off & Pay-off - COMA - AccountClosure processing"
domain: "Modules"
element_id: 1800812
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 CLM-4480 - REL Write-off & Pay-off - COMA - AccountClosure processing

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-1321/CLM-4480 - REL Write-off & Pay-off - COMA - AccountClosure processing

## 📝 Notes

Pay-off

	
- Change contract status - 
	
- Create business event - as date use payOffDate from AccountClosure
	
- Update/Create CST request - 
	
- If CST request.Request ID is not null then send RabbitMQ notificationContractPayOffProcessingResult to Loxon - OSB will do transformation from
	
- Send Kafka event ContractPaidOff - 


Write-off

	
- Change contract status - Done in CLM-4405
	
- Create business event - as date use writeOffDate from AccountClosure
	
- Update/Create CST request - Done in CLM-4405
	
- Send Kafka event ContractWrittenOff - Done in CLM-4405

## 📊 Appears In (1 diagrams)

- Custom: CLM-4480 - REL Write-off & Pay-off - COMA - AccountClosure processing
