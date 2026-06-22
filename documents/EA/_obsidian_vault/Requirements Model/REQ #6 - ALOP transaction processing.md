---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-244 (CLM-971) Cash on card with separate limit (ALOP)"
domain: "Requirements Model"
element_id: 1612014
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #6 - ALOP transaction processing

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-244 (CLM-971) Cash on card with separate limit (ALOP)

## 📝 Notes

Goal of this requirement is to create ALOP transaction and send it to the AM module, evaluate and process response.
API - AuthorizeTransactionWithIPVariant will be used. Tx Type = ALOP. Supplement code will be added into LOAN_CODE parameter

Next, receiving and processing disbursement confirmation will be included here.
Important events to be notified:

	
- ALOP accepted (transaction authorization)
	
- ALOP is paid


Steps of the Expected CLM support of the ALOP process are to be covered: 10 - 13

Planned development: Sprint #85
Changes tagged in the SD as: CSI-150

## 🔗 Connections (1)

- → Generalization: [[ALOP Process description of CLM part support]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-244 (CLM-971) Cash on card with separate limit (ALOP)
