---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-1321/CLM-4405 - REL Write-off - COMA - AccountClosure processing"
domain: "Modules"
element_id: 1800802
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 CLM-4405 REL Write-off - COMA - AccountClosure processing

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-1321/CLM-4405 - REL Write-off - COMA - AccountClosure processing

## 📝 Notes

Add support for RabbitMQ
Process AM RabbitMQ message AccountClosureResult:

	
- check contract status, if status = H ends processing
	
- create/update CST request in status FINISH (resultType = WRITEOFF_SUCESSFUL)
	
- create/update CST request in status RES_ERROR (resultType = WRITEOFF_ERROR)
	
- Change contract status to Write-off (H)
	
- send Kafka notification Contract written-off

## 📊 Appears In (1 diagrams)

- Custom: CLM-4405 - REL Write-off - COMA - AccountClosure processing
