---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-17318 (CSI-1688) BNPL - Use Merchant in transaction attribute"
domain: "Requirements Model"
element_id: 1699259
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-1800 BNPL - Add Partner name and Seller additional date to Transaction Supplement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-17318 (CSI-1688) BNPL - Use Merchant in transaction attribute

## 📝 Notes

Goal of the task is to bring information about Partner name (merchant name) and some additional information about Seller who (or where is) originated transaction.

Possible impact:

	
- take additional info about Partner Name and Seller from the ADS and store them into Contract Supplement domain - Custom Data structure
	
- involve the additional info about Seller into HO_ALOP_DATA data source
	
- send Partner name into AM on transaction confirmation


AM confirm transaction API call will be extended as follow:

	
- Partner name is inserted into additionalData structure

## 📊 Appears In (1 diagrams)

- Custom: CBL-17318 (CSI-1688) BNPL - Use Merchant in transaction attribute
