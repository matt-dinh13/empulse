---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-580 (CBL-1941) External refinance"
domain: "Requirements Model"
element_id: 1281478
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Adding new payment purpose and outgoing payment type for External refinance

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-580 (CBL-1941) External refinance

## 📝 Notes

BSL:

	
- Payment Purpose Type enumeration - add new purpose type External refinance (RF)
	
- New Outgoing Payment Type will be added - External refinance (ERF) in both data model and transfer object (Dto) for OutgoingPaymentsWS
	
- Show payments of type External refinance (ERF) in Outgoing payment browser in GUI when Show all payment types checkbox is unchecked
	
- Cooperate with PCG on initial settings of Payment Channel To Product Type for External refinance


CBSA:

	
- New Outgoing Payment Type will be added to OutgoingPaymentTypeDto
	
- Processing OutgoingPaymentTypeDto will be updated

## 🔗 Connections (1)

- → Generalization: [[PAYM-580 (CBL-1941) External refinance (Requirement 1281479)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-580 (CBL-1941) External refinance
