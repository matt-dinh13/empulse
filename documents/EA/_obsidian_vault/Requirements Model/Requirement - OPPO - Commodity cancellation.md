---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-5309 OPPO - IMEI unblocking API (CBL-28662)"
domain: "Requirements Model"
element_id: 1857244
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Requirement - OPPO - Commodity cancellation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-5309 OPPO - IMEI unblocking API (CBL-28662)

## 📝 Notes

On top of as-is setting process, add Kafka notification bsl.contract-supplement.v7. From it system uses notifications:

	
- net.homecredit.hs.contractsupplement.TransactionSupplementApprovedEvent
	
- net.homecredit.hs.contractsupplement.TransactionSupplementCancelledEvent


ApprovedEvent is used in Use Case Process contract supplement creation notification and is part of this task due to other processes (validation rule for IMEI duplicity, SN duplicity).
CancelledEvent is used in Use Case Process contract supplement cancelation notification and will be used by existing Commodity cancellation of OPPO related commodityId

The data for in both cases is taken from typeSpecificData.salesQuotes[].transactions[].commodityExternalId where commodityExternalId = commodityId. This is specific for IN country.

For OPPO commodity unblocking, Salesroom code is used. Information if retrieved from

## 📊 Appears In (1 diagrams)

- Custom: PCG-5309 OPPO - IMEI unblocking API (CBL-28662)
